<?php

namespace App\Models;

use App\Filters\Concerns\HasEloquentFilters;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Expense extends Model
{
    use HasFactory;
    use HasEloquentFilters;

    public function name(): string
    {
        return $this->name;
    }

    public function description(): string
    {
        return $this->description;
    }

    public function createdAt(): Carbon
    {
        return $this->created_at;
    }

    public function isEnabled(): bool
    {
        return (bool)$this->isDisabled();
    }

    public function isDisabled(): bool
    {
        return (bool)$this->disabled_at;
    }
}
