<?php

namespace App\Actions;

use App\Actions\Contracts\UpdateActionContract;
use Illuminate\Database\Eloquent\Model;

abstract class UpdateAction extends StoreAction implements UpdateActionContract
{
    public function for(Model $model): UpdateActionContract
    {
        $this->model = $model;
        return $this;
    }
}
