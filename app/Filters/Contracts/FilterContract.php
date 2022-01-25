<?php

namespace App\Filters\Contracts;

interface FilterContract
{
    public function setConditions(array $conditions = []): FilterContract;
}
