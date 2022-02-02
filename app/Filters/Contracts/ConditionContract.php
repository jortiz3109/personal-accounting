<?php

namespace App\Filters\Contracts;

use App\Filters\Criteria;

interface ConditionContract
{
    public function append(Criteria $criteria): void;
}
