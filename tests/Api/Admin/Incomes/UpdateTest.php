<?php

namespace Tests\Api\Admin\Incomes;

use App\Models\Income;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\Api\Admin\Incomes\Concerns\HasDataProvider;
use Tests\TestCase;

class UpdateTest extends TestCase
{
    use RefreshDatabase;
    use HasDataProvider;

    public function test_it_can_update_a_income(): void
    {
        $income = Income::factory()->create();
        $data = ['name' => 'Test income', 'description' => 'Test description'];

        $response = $this->putJson('/api/admin/incomes/' . $income->getRouteKey(), $data);
        $income->refresh();

        $response->assertStatus(Response::HTTP_OK);
        $this->assertEquals($data['name'], $income->name());
    }

    public function test_it_can_disable_a_income(): void
    {
        $income = Income::factory()->create();
        $data = ['name' => 'Test income', 'description' => 'Test description', 'disabled' => true];

        $response = $this->putJson('/api/admin/incomes/' . $income->getRouteKey(), $data);
        $income->refresh();

        $response->assertStatus(Response::HTTP_OK);
        $this->assertTrue($income->isDisabled());
    }

    public function test_it_can_enable_a_disabled_income(): void
    {
        $income = Income::factory()->disabled()->create();
        $data = ['name' => 'Test income', 'description' => 'Test description', 'disabled' => true];

        $response = $this->putJson('/api/admin/incomes/' . $income->getRouteKey(), $data);
        $income->refresh();

        $response->assertStatus(Response::HTTP_OK);
        $this->assertTrue($income->isEnabled());
    }

    /**
     * @param array $data
     * @param string $field
     * @return void
     * @dataProvider invalidDataProvider
     */
    public function test_it_validates_request_data(array $data, string $field): void
    {
        $income = Income::factory()->create();
        $response = $this->patchJson('/api/admin/incomes/' . $income->getRouteKey(), $data);

        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
        $response->assertJsonValidationErrorFor($field);
    }
}
