<?php

namespace App\Actions\Contracts;

use Illuminate\Database\Eloquent\Model;

interface UpdateActionContract
{
    public function for(Model $model): self;
}
