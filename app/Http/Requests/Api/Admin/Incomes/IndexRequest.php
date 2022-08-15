<?php

namespace App\Http\Requests\Api\Admin\Incomes;

use Illuminate\Foundation\Http\FormRequest;

class IndexRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'filters' => ['sometimes', 'filled', 'array'],
            'filters.name' => ['bail', 'string', 'min:3', 'max:50'],
            'filters.description' => ['bail', 'string', 'min:3', 'max:50'],
            'filters.created_at' => ['bail', 'before_or_equal:today'],
        ];
    }
}
