<?php

namespace App\Filters\Eloquent;

use App\Models\Expense;

class ExpenseFilters extends Filter
{
    protected ?string $model = Expense::class;
}
