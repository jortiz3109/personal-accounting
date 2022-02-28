<?php

use App\Filters\Conditions\Eloquent\Name;
use App\Models\Expense;
use App\Models\Income;

return [
    Income::class => [
        'name' => Name::class,
    ],
    Expense::class => [
        'name' => Name::class,
    ],
];
