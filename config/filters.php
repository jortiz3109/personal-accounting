<?php

use App\Filters\Conditions\Eloquent\CreatedAt;
use App\Filters\Conditions\Eloquent\Description;
use App\Filters\Conditions\Eloquent\Name;
use App\Models\Expense;
use App\Models\Income;

return [
    Income::class => [
        'name' => Name::class,
        'description' => Description::class,
        'created_at' => CreatedAt::class,
    ],
    Expense::class => [
        'name' => Name::class,
        'description' => Description::class,
    ],
];
