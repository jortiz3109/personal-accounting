<?php

namespace App\Filters\Conditions\Eloquent;

use App\Filters\Criteria;

class Name extends Condition
{
    public function append(Criteria $criteria): void
    {
        $this->query->where('name', 'like', "%{$criteria}%");
    }
}
