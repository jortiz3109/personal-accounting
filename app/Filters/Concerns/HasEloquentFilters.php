<?php

namespace App\Filters\Concerns;

use App\Filters\Eloquent\Filter;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Database\Eloquent\Builder;

trait HasEloquentFilters
{
    /**
     * @throws BindingResolutionException
     */
    public static function filter(?array $conditions): Builder
    {
        $filter = app()->make(Filter::class, ['modelName' => get_called_class()]);

        return $filter->setConditions($conditions ?? [])->apply();
    }
}
