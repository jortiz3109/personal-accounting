<?php

namespace App\Actions\Admin\Expenses;

use App\Actions\Contracts\ActionContract;
use App\Actions\StoreAction;
use App\Models\Expense;

class ExpenseStoreAction extends StoreAction
{
    public function execute(array $data): ActionContract
    {
        $income = new Expense();
        $income->name = $data['name'];
        $income->description = $data['description'];
        $income->save();

        $this->model = $income;

        return $this;
    }
}
