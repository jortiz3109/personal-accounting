<?php

namespace App\Actions\Contracts;

use Illuminate\Database\Eloquent\Model;

interface ActionContract
{
    public function execute(array $data): self;

    public function result(): Model;
}
