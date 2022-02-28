<?php

namespace Tests\Api\Admin\Incomes;

use App\Models\Income;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_fetch_a_list_of_incomes(): void
    {
        Income::factory()->create();

        $response = $this->getJson('api/admin/incomes');

        $response->assertStatus(Response::HTTP_OK);
        $response->assertJson(
            fn (AssertableJson $json) => $json->has('incomes', 1)
            ->has(
                'incomes.0',
                fn (AssertableJson $json) => $json->hasAll(['id', 'name', 'description', 'is_disabled', 'created_at'])
            )
            ->etc()
        );
    }

    /**
     * @dataProvider searchFiltersProvider
     */
    public function test_it_can_filter_incomes(array $income, array $params): void
    {
        $this->withoutExceptionHandling();

        Income::factory()->count(3)->create();
        $income = Income::factory()->create($income);

        $response = $this->getJson('api/admin/incomes?' . http_build_query($params));

        $response->assertJson(
            fn (AssertableJson $json) => $json->has('incomes', 1)
             ->has(
                 'incomes.0',
                 fn (AssertableJson $json) => $json->where('name', $income->name())
                        ->where('description', $income->description())
                        ->where('is_disabled', $income->isDisabled())
                        ->where('created_at', $income->createdAt()->toDateTimeString())
                        ->etc()
             )
            ->etc()
        );
    }

    public function test_it_can_paginate_incomes(): void
    {
        Income::factory()->count(15)->create();
        $income = Income::factory()->create();

        $response = $this->getJson('api/admin/incomes?page=2');

        $response->assertJson(
            fn (AssertableJson $json) => $json->has('incomes', 1)
            ->has(
                'incomes.0',
                fn (AssertableJson $json) => $json->where('name', $income->name())
                    ->where('description', $income->description())
                    ->where('is_disabled', $income->isDisabled())
                    ->where('created_at', $income->createdAt()->toDateTimeString())
                    ->etc()
            )
            ->etc()
        );
    }

    public function searchFiltersProvider(): array
    {
        $income = [
            'name' => 'salary',
            'description' => 'a fixed regular payment, typically paid on a monthly or biweekly basis but often expressed as an annual sum, made by an employer to an employee.',
            'disabled_at' => Carbon::now(),
        ];

        return [
            'it can filter by name' => ['income' => $income, 'params' => ['filters' => ['name' => 'salary']]],
        ];
    }
}
