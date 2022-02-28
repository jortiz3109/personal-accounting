<?php

namespace App\Actions\Admin\Expenses;

use App\Actions\UpdateAction;
use Illuminate\Support\Arr;

class ExpenseUpdateAction extends UpdateAction
{
    public function execute(array $data): self
    {
        $this->model->name = $data['name'];
        $this->model->description = $data['description'];
        $this->model->disabled_at = Arr::has($data, 'disabled') ? now() : null;
        $this->model->save();

        return $this;
    }
}
