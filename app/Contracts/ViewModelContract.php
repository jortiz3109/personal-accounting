<?php

namespace App\Contracts;

use Illuminate\Contracts\Support\Arrayable;

interface ViewModelContract extends Arrayable
{
    public function title(): string;
    public function actions(): array;
}
