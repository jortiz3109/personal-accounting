<?php

namespace App\Contracts;

interface IndexViewModelContract extends ViewModelContract
{
    public function search(): array;
    public function listFields(): array;
}
