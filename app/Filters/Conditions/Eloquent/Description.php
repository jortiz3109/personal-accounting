<?php

namespace App\Filters\Conditions\Eloquent;

use App\Filters\Criteria;

class Description extends Condition
{
    public function append(Criteria $criteria): void
    {
        $this->query->where('description', 'like', "%{$criteria}%");
    }
}
