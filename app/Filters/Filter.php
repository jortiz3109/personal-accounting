<?php

namespace App\Filters;

abstract class Filter implements Contracts\FilterContract
{
    protected array $conditions;
    protected ?string $model = null;

    public function __construct(array $conditions = [])
    {
        $this->setConditions($conditions);
    }

    public function setConditions(array $conditions = []): self
    {
        $this->conditions = array_filter($conditions);
        return $this;
    }

    protected function wheres(): self
    {
        $filteredConditions = array_intersect_key($this->conditions, $this->applicableConditions());

        foreach ($filteredConditions as $condition => $value) {
            $this->appendCondition($this->applicableConditions()[$condition], $value);
        }

        return $this;
    }

    protected function applicableConditions(): array
    {
        return config('filters.' . $this->model);
    }

    abstract protected function appendCondition(string $condition, $value): void;
}
