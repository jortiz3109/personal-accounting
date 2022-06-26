<?php

namespace App\Http\Requests\Api\Admin\Incomes;

class UpdateRequest extends StoreRequest
{
    public function rules(): array
    {
        return array_merge_recursive(parent::rules(), ['disabled' => ['sometimes', 'boolean']]);
    }
}
