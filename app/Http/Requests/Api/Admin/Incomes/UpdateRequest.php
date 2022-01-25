<?php

namespace App\Http\Requests\Api\Admin\Incomes;

class UpdateRequest extends StoreRequest
{
    public function rules(): array
    {
        return [
            ...parent::rules(),
            'disabled' => ['sometimes', 'accepted'],
        ];
    }
}
