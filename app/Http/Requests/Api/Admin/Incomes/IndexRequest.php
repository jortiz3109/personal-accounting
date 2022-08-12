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
            'filters.name' => ['string', 'min:3', 'max:50'],
            'filters.description' => ['string', 'min:3', 'max:50'],
            'filters.created_at' => ['before_or_equal:today'],
        ];
    }
}
