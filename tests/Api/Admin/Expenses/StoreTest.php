<?php

namespace Tests\Api\Admin\Expenses;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Symfony\Component\HttpFoundation\Response;
use Tests\Api\Admin\Expenses\Concerns\HasDataProvider;
use Tests\TestCase;

class StoreTest extends TestCase
{
    use RefreshDatabase;
    use HasDataProvider;

    public function test_it_can_store_a_expense(): void
    {
        $data = ['name' => 'test', 'description' => 'Expense test'];

        $response = $this->postJson('/api/admin/expenses', $data);

        $response->assertStatus(Response::HTTP_CREATED);
        $this->assertDatabaseHas('expenses', $data);
    }

    public function test_it_returns_the_stored_expense_data(): void
    {
        $data = ['name' => 'test', 'description' => 'Expense test'];

        $response = $this->postJson('/api/admin/expenses', $data);

        $response->assertJson(
            fn (AssertableJson $json) => $json->has('data.id')
            ->has('data.is_disabled')
            ->where('data.name', $data['name'])
            ->where('data.description', $data['description'])
            ->etc()
        );
    }

    /**
     * @param array $data
     * @param string $field
     * @return void
     * @dataProvider invalidDataProvider
     */
    public function test_it_validates_request_data(array $data, string $field): void
    {
        $response = $this->postJson('/api/admin/expenses', $data);

        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
        $response->assertJsonValidationErrorFor($field);
    }
}
