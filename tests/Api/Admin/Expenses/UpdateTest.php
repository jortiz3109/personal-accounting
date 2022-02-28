<?php

namespace Tests\Api\Admin\Expenses;

use App\Models\Expense;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\Api\Admin\Expenses\Concerns\HasDataProvider;
use Tests\TestCase;

class UpdateTest extends TestCase
{
    use RefreshDatabase;
    use HasDataProvider;

    public function test_it_can_update_a_expense(): void
    {
        $expense = Expense::factory()->create();
        $data = ['name' => 'Test expense', 'description' => 'Test description'];

        $response = $this->putJson('/api/admin/expenses/' . $expense->getRouteKey(), $data);
        $expense->refresh();

        $response->assertStatus(Response::HTTP_OK);
        $this->assertEquals($data['name'], $expense->name());
    }

    public function test_it_can_disable_a_expense(): void
    {
        $expense = Expense::factory()->create();
        $data = ['name' => 'Test expense', 'description' => 'Test description', 'disabled' => 'on'];

        $response = $this->putJson('/api/admin/expenses/' . $expense->getRouteKey(), $data);
        $expense->refresh();

        $response->assertStatus(Response::HTTP_OK);
        $this->assertTrue($expense->isDisabled());
    }

    public function test_it_can_enable_a_disabled_expense(): void
    {
        $expense = Expense::factory()->disabled()->create();
        $data = ['name' => 'Test expense', 'description' => 'Test description', 'disabled' => 'on'];

        $response = $this->putJson('/api/admin/expenses/' . $expense->getRouteKey(), $data);
        $expense->refresh();

        $response->assertStatus(Response::HTTP_OK);
        $this->assertTrue($expense->isEnabled());
    }

    /**
     * @param array $data
     * @param string $field
     * @return void
     * @dataProvider invalidDataProvider
     */
    public function test_it_validates_request_data(array $data, string $field): void
    {
        $expense = Expense::factory()->create();
        $response = $this->patchJson('/api/admin/expenses/' . $expense->getRouteKey(), $data);

        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
        $response->assertJsonValidationErrorFor($field);
    }
}
