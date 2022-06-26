<?php

namespace App\Actions\Admin\Incomes;

use App\Actions\UpdateAction;
use Illuminate\Support\Arr;

class IncomeUpdateAction extends UpdateAction
{
    public function execute(array $data): self
    {
        $this->model->name = $data['name'];
        $this->model->description = $data['description'];
        $this->model->disabled_at = Arr::get($data, 'disabled', false) ? now() : null;
        $this->model->save();

        return $this;
    }
}
