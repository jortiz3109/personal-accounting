<?php

namespace App\Contracts;

interface CreateViewModelContract extends ViewModelContract
{
    public function formFields(): array;
}
