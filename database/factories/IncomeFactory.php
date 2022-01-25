<?php

namespace Database\Factories;

use App\Models\Income;
use Illuminate\Database\Eloquent\Factories\Factory;

class IncomeFactory extends Factory
{
    protected $model = Income::class;

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
