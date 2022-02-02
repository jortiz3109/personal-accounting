<?php

namespace Tests\Api\Admin\Incomes\Concerns;

use Illuminate\Support\Str;

trait HasDataProvider
{
    public function invalidDataProvider(): array
    {
        $data = ['name' => 'test', 'description' => 'Income test'];

        return [
            'test name is missing' => ['data' => array_merge($data, ['name' => null]), 'field' => 'name'],
            'test name is min' => ['data' => array_merge($data, ['name' => 'ab']), 'field' => 'name'],
            'test name is max' => ['data' => array_merge($data, ['name' => Str::random(51)]), 'field' => 'name'],
            'test description is missing' => ['data' => array_merge($data, ['description' => null]), 'field' => 'description'],
            'test description is min' => ['data' => array_merge($data, ['description' => 'abcd']), 'field' => 'description'],
            'test description is max' => ['data' => array_merge($data, ['description' => Str::random(256)]), 'field' => 'description'],
            'test description is not a string' => ['data' => array_merge($data, ['description' => ['test']]), 'field' => 'description'],
        ];
    }
}
