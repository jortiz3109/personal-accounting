<?php

use App\Http\Controllers\Admin\IncomeController;
use Illuminate\Support\Facades\Route;

Route::name('incomes.index')->get('incomes', [IncomeController::class, 'index']);
