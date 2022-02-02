<?php

namespace App\Filters\Eloquent;

use App\Filters\Conditions\Eloquent\Name;
use App\Models\Income;

class IncomeFilters extends Filter
{
    protected ?string $model = Income::class;
    protected function applicableConditions(): array
    {
        return [
            'name' => Name::class,
        ];
    }
}
