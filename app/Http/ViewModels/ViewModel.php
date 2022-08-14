<?php

namespace App\Http\ViewModels;

use App\Contracts\ViewModelContract;

abstract class ViewModel implements ViewModelContract
{
    public function toArray(): array
    {
        return [
            'title' => $this->title(),
            'actions' => $this->actions(),
        ];
    }
}
