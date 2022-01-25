<?php

namespace App\Actions\Admin\Incomes;

use App\Actions\Admin\Action;
use Illuminate\Database\Eloquent\Model;

class StoreAction extends Action
{
    public function execute(array $data): Model
    {
        $this->model->fill($data);
        $this->model->save();

        return $this->model;
    }
}
