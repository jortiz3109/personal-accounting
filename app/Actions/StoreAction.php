<?php

namespace App\Actions;

use App\Actions\Contracts\ActionContract;
use Illuminate\Database\Eloquent\Model;

abstract class StoreAction implements ActionContract
{
    protected Model $model;

    abstract public function execute(array $data): ActionContract;

    public function result(): Model
    {
        return $this->model;
    }
}
