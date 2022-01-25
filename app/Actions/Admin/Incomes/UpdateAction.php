<?php

namespace App\Actions\Admin\Incomes;

use App\Actions\Admin\Action;
use Illuminate\Support\Arr;

class UpdateAction extends Action
{
    public function execute(array $data): bool
    {
        $this->model->name = $data['name'];
        $this->model->description = $data['description'];
        $this->model->disabled_at = Arr::has($data, 'disabled') ? now() : null;
        return $this->model->save();
    }
}
