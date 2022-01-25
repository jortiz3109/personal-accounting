<?php

namespace App\Filters\Eloquent;

use App\Filters\Condition;
use App\Filters\Contracts\EloquentFilterContract;
use App\Filters\Contracts\HasJoinsContract;
use App\Filters\Criteria;
use App\Filters\Filter as BaseFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

abstract class Filter extends BaseFilter implements EloquentFilterContract, HasJoinsContract
{
    private Builder $query;

    public function __construct(array $conditions = [])
    {
        $this->query = $this->newModel()->newQuery();
        parent::__construct($conditions);
    }

    public function apply(): Builder
    {
        $this->joins()->wheres();
        return $this->query;
    }

    private function newModel(): Model
    {
        $model = $this->model;

        return new $model();
    }

    protected function appendCondition(string $condition, $value): void
    {
        /** @var Condition $condition */
        $condition = new $condition($this->query);
        $condition->append(new Criteria($value));
    }

    public function joins(): HasJoinsContract
    {
        return $this;
    }
}
