<?php

namespace App\Filters\Contracts;

use Illuminate\Database\Eloquent\Builder;

interface EloquentFilterContract
{
    public function apply(): Builder;
}
