<?php

namespace App\Http\ViewModels\Admin;

use App\Http\ViewModels\IndexViewModel;

class IncomeIndexViewModel extends IndexViewModel
{
    public function title(): string
    {
        return trans(key: 'admin.incomes.titles.index');
    }

    public function search(): array
    {
        return [
            'name' => ['placeholder' => 'Name', 'label' => 'Name'],
            'description' => ['placeholder' => 'Description', 'label' => 'Description'],
            'created_at' => ['label' => 'Created at'],
        ];
    }

    public function actions(): array
    {
        return [
            'create' => ['route' => route(name: 'admin.incomes.create')],
        ];
    }

    public function listFields(): array
    {
        return [
            'name' => trans(key: 'admin.incomes.fields.name.label'),
            'description' => trans(key: 'admin.incomes.fields.description.label'),
            'created_at' => trans(key: 'admin.incomes.fields.created_at.label'),
        ];
    }
}
