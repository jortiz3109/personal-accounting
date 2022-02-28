<?php

namespace Tests\Api\Admin\Expenses;

use App\Models\Expense;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class DestroyTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_delete_a_expense(): void
    {
        $expense = Expense::factory()->createOne();

        $response = $this->deleteJson('/api/admin/expenses/' . $expense->getRouteKey());

        $response->assertStatus(Response::HTTP_NO_CONTENT);
    }
}
