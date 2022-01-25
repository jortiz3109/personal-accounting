<?php

namespace Tests\Api\Admin\Incomes;

use App\Models\Income;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class DestroyTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_delete_a_income(): void
    {
        $income = Income::factory()->createOne();

        $response = $this->deleteJson('/api/admin/incomes/' . $income->getRouteKey());

        $response->assertStatus(Response::HTTP_NO_CONTENT);
    }
}
