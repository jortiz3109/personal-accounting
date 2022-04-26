<?php

namespace Database\Factories;

use App\Models\Expense;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExpenseFactory extends Factory
{
    protected $model = Expense::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->words(3, true),
        ];
    }

    public function disabled(): Factory
    {
        return $this->state(function () {
            return [
                'disabled_at' => now(),
            ];
        });
    }
}
