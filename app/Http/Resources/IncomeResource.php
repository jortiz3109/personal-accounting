<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

/**
 * @method string name()
 * @method string description()
 * @method bool isDisabled()
 * @method Carbon createdAt()
 */
class IncomeResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->getRouteKey(),
            'name' => $this->name(),
            'description' => $this->description(),
            'is_disabled' => $this->isDisabled(),
            'created_at' => $this->createdAt()->toDateTimeString(),
        ];
    }
}
