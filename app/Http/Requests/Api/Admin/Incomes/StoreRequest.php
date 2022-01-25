<?php

namespace App\Http\Requests\Api\Admin\Incomes;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:50'],
            'description' => ['required', 'string', 'min:10', 'max:255']
        ];
    }
}
