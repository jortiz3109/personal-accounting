<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ExpenseCollection extends ResourceCollection
{
    public $collects = ExpenseResource::class;
    public static $wrap = 'expenses';
}
