<?php

namespace App\Http\ViewModels\Admin;

use Illuminate\Contracts\Support\Arrayable;

class IncomeIndexViewModel implements Arrayable
{
    public function toArray(): array
    {
        return [
            'moduleTitle' => trans(key: 'admin.incomes.module.title'),
            'actions' => [
                'create' => [
                    'route' => route(name: 'admin.incomes.index'),
                ],
            ],
        ];
    }
}
