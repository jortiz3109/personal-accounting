<?php

namespace App\Actions\Admin\Incomes;

use App\Actions\StoreAction;
use App\Models\Income;
use Illuminate\Database\Eloquent\Model;

class IncomeStoreAction extends StoreAction
{
    protected Model $model;

    public function execute(array $data): self
    {
        $income = new Income();
        $income->name = $data['name'];
        $income->description = $data['description'];
        $income->save();

        $this->model = $income;

        return $this;
    }
}
