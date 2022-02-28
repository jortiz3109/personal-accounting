<?php

namespace Tests\Api\Admin\Expenses;

use App\Models\Expense;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class ShowTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_fetch_a_expense(): void
    {
        $expense = Expense::factory()->create();

        $response = $this->getJson('/api/admin/expenses/' . $expense->getRouteKey());

        $response->assertStatus(Response::HTTP_OK);
        $response->assertJson(
            fn (AssertableJson $json) => $json->where('data.id', $expense->getRouteKey())
                ->where('data.name', $expense->name())
                ->where('data.description', $expense->description())
                ->where('data.is_disabled', $expense->isDisabled())
        );
    }
}
