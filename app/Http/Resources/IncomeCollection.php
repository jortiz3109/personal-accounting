<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class IncomeCollection extends ResourceCollection
{
    public $collects = IncomeResource::class;
    public static $wrap = 'incomes';
}
