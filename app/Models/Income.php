<?php

namespace App\Models;

use App\Filters\Concerns\HasEloquentFilters;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property string $name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $disabled_at
 */
class Income extends Model
{
    use HasFactory;
    use HasEloquentFilters;

    protected $dates = ['disabled_at'];
    protected $fillable = ['name', 'description'];

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
