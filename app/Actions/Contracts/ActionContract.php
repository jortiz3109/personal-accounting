<?php

namespace App\Actions\Contracts;

use Illuminate\Database\Eloquent\Model;

interface ActionContract
{
    public function execute(array $data): Model|bool;

    public function for(Model $model): self;
}
