<?php

namespace App\Filters\Eloquent;

use App\Models\Income;

class IncomeFilters extends Filter
{
    protected ?string $model = Income::class;
}
