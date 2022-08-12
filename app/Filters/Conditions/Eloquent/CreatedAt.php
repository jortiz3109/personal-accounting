<?php

namespace App\Filters\Conditions\Eloquent;

use App\Filters\Criteria;

class CreatedAt extends Condition
{
    public function append(Criteria $criteria): void
    {
        $this->query->whereDate('created_at', $criteria);
    }
}
