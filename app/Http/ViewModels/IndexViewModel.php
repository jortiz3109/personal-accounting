<?php

namespace App\Http\ViewModels;

use App\Contracts\IndexViewModelContract;

abstract class IndexViewModel extends ViewModel implements IndexViewModelContract
{
    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'search' => $this->search(),
            'fields' => $this->listFields(),
        ];
    }
}
