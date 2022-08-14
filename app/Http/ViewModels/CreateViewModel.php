<?php

namespace App\Http\ViewModels;

use App\Contracts\CreateViewModelContract;

abstract class CreateViewModel extends ViewModel implements CreateViewModelContract
{
    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'formFields' => $this->formFields(),
        ];
    }
}
