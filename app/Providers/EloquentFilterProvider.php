<?php

namespace App\Providers;

use App\Filters\Eloquent\Filter;
use Illuminate\Support\ServiceProvider;

class EloquentFilterProvider extends ServiceProvider
{
    private string $namespace = 'App\\Filters\\Eloquent\\';

    public function register(): void
    {
        $this->app->singleton(Filter::class, function ($app, array $params) {
            $filterName = $this->filterName($params['modelName']);
            return new $filterName();
        });
    }

    private function filterName(string $modelName): string
    {
        return $this->namespace . class_basename($modelName) . 'Filters';
    }
}
