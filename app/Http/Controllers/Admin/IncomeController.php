<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\ViewModels\Admin\IncomeIndexViewModel;
use Illuminate\View\View;

class IncomeController extends Controller
{
    public function index(IncomeIndexViewModel $viewModel): View
    {
        return view(view: 'admin.incomes.index', data: $viewModel);
    }

    public function create(): View
    {
        return view(view: 'admin.incomes.create');
    }
}
