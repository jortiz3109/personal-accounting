<?php

namespace App\Filters\Conditions\Eloquent;

use App\Filters\Condition as ConditionBase;
use App\Filters\Criteria;
use Illuminate\Database\Eloquent\Builder;

abstract class Condition extends ConditionBase
{
    protected Builder $query;

    public function __construct(Builder $query)
    {
        $this->query = $query;
    }

    abstract public function append(Criteria $criteria): void;
}
