<?php

namespace App\Filters;

use App\Filters\Contracts\ConditionContract;

abstract class Condition implements ConditionContract
{
    abstract public function append(Criteria $criteria): void;
}
