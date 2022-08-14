<?php

namespace App\Http\ViewModels\Admin;

use Illuminate\Contracts\Support\Arrayable;

class IncomeIndexViewModel implements Arrayable
{
    public function toArray(): array
    {
        return [
            'title' => $this->title(),
            'search' => $this->search(),
            'actions' => $this->actions(),
            'fields' => $this->fields(),
        ];
    }

    private function title(): string
    {
        return trans(key: 'admin.incomes.module.title');
    }

    private function search(): array
    {
        return [
            'name' => ['placeholder' => 'Name', 'label' => 'Name'],
            'description' => ['placeholder' => 'Description', 'label' => 'Description'],
            'created_at' => ['label' => 'Created at'],
        ];
    }

    private function actions(): array
    {
        return [
            'create' => ['route' => route(name: 'admin.incomes.index')],
        ];
    }

    private function fields(): array
    {
        return [
            'name' => trans(key: 'admin.incomes.fields.name'),
            'description' => trans(key: 'admin.incomes.fields.description'),
            'created_at' => trans(key: 'admin.incomes.fields.created_at'),
        ];
    }
}
