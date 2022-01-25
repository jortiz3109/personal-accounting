<?php

namespace Tests\Api\Admin\Incomes;

use App\Models\Income;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class ShowTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_fetch_a_income(): void
    {
        $income = Income::factory()->create();

        $response = $this->getJson('/api/admin/incomes/' . $income->getRouteKey());

        $response->assertStatus(Response::HTTP_OK);
        $response->assertJson(
            fn (AssertableJson $json) => $json->where('data.id', $income->getRouteKey())
                ->where('data.name', $income->name())
                ->where('data.description', $income->description())
                ->where('data.is_disabled', $income->isDisabled())
        );
    }
}
