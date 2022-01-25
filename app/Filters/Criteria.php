<?php

namespace App\Filters;

use Stringable;

class Criteria implements Stringable
{
    private string|array|null $value;

    public function __construct(string|array|null $value)
    {
        $this->value = $value;
    }

    public function __toString(): string
    {
        return is_array($this->value) ? implode(',', $this->value) : (string) $this->value;
    }
}
