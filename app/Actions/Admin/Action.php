<?php

namespace App\Actions\Admin;

use App\Actions\Contracts\ActionContract;
use Illuminate\Database\Eloquent\Model;

abstract class Action implements ActionContract
{
    protected Model $model;

    abstract public function execute(array $data): Model|bool;

    final public function for(Model $model): ActionContract
    {
        $this->model = $model;

        return $this;
    }
}
