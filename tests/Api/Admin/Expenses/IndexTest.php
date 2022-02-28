<?php

namespace Tests\Api\Admin\Expenses;

use App\Models\Expense;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_fetch_a_list_of_expenses(): void
    {
        Expense::factory()->create();

        $response = $this->getJson('api/admin/expenses');

        $response->assertStatus(Response::HTTP_OK);
        $response->assertJson(
            fn (AssertableJson $json) => $json->has('expenses', 1)
            ->has(
                'expenses.0',
                fn (AssertableJson $json) => $json->hasAll(['id', 'name', 'description', 'is_disabled', 'created_at'])
            )
            ->etc()
        );
    }

    /**
     * @dataProvider searchFiltersProvider
     */
    public function test_it_can_filter_expenses(array $expense, array $params): void
    {
        $this->withoutExceptionHandling();

        Expense::factory()->count(3)->create();
        $expense = Expense::factory()->create($expense);

        $response = $this->getJson('api/admin/expenses?' . http_build_query($params));

        $response->assertJson(
            fn (AssertableJson $json) => $json->has('expenses', 1)
             ->has(
                 'expenses.0',
                 fn (AssertableJson $json) => $json->where('name', $expense->name())
                        ->where('description', $expense->description())
                        ->where('is_disabled', $expense->isDisabled())
                        ->where('created_at', $expense->createdAt()->toDateTimeString())
                        ->etc()
             )
            ->etc()
        );
    }

    public function test_it_can_paginate_expenses(): void
    {
        Expense::factory()->count(15)->create();
        $expense = Expense::factory()->create();

        $response = $this->getJson('api/admin/expenses?page=2');

        $response->assertJson(
            fn (AssertableJson $json) => $json->has('expenses', 1)
            ->has(
                'expenses.0',
                fn (AssertableJson $json) => $json->where('name', $expense->name())
                    ->where('description', $expense->description())
                    ->where('is_disabled', $expense->isDisabled())
                    ->where('created_at', $expense->createdAt()->toDateTimeString())
                    ->etc()
            )
            ->etc()
        );
    }

    public function searchFiltersProvider(): array
    {
        $expense = [
            'name' => 'salary',
            'description' => 'a fixed regular payment, typically paid on a monthly or biweekly basis but often expressed as an annual sum, made by an employer to an employee.',
            'disabled_at' => Carbon::now(),
        ];

        return [
            'it can filter by name' => ['expense' => $expense, 'params' => ['filters' => ['name' => 'salary']]],
        ];
    }
}
