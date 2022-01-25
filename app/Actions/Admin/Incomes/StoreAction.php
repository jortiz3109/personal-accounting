<?php

namespace App\Actions\Admin\Incomes;

use App\Actions\Admin\Action;
use App\Models\Income;
use Illuminate\Database\Eloquent\Model;

class StoreAction extends Action
{
    public function execute(array $data): Model
    {
        return Income::create($data);
    }
}
