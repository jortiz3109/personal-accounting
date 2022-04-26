<?php

namespace App\Http\Requests\Api\Admin\Expenses;

class UpdateRequest extends StoreRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return array_merge_recursive(parent::rules(), ['disabled' => ['sometimes', 'accepted']]);
    }
}
