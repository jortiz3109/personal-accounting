<?php

namespace App\Http\ViewModels\Admin;

use App\Http\ViewModels\CreateViewModel;

class IncomeCreateViewModel extends CreateViewModel
{
    public function title(): string
    {
        return trans('admin.incomes.titles.create');
    }

    public function actions(): array
    {
        return [
            'back' => [
                'route' => route(name: 'admin.incomes.index'),
                'text' =>  trans(key: 'admin.incomes.titles.index'),
            ],
        ];
    }

    public function formFields(): array
    {
        return [
            'name' => [
                'label' => trans('admin.incomes.fields.name.label'),
                'placeholder' => trans('admin.incomes.fields.name.placeholder'),
            ],
            'description' => [
                'label' => trans('admin.incomes.fields.description.label'),
                'placeholder' => trans('admin.incomes.fields.description.placeholder'),
            ],
        ];
    }
}
