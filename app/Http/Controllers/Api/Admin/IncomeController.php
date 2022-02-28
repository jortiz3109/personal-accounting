<?php

namespace App\Http\Controllers\Api\Admin;

use App\Actions\Admin\Incomes\IncomeStoreAction;
use App\Actions\Admin\Incomes\IncomeUpdateAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Admin\Incomes\StoreRequest;
use App\Http\Requests\Api\Admin\Incomes\UpdateRequest;
use App\Http\Resources\IncomeCollection;
use App\Http\Resources\IncomeResource;
use App\Models\Income;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

class IncomeController extends Controller
{
    /**x
     * @throws BindingResolutionException
     */
    public function index(Request $request, Income $income): ResourceCollection
    {
        $incomes = $income
            ->filter($request->get('filters'))
            ->select(['id', 'name', 'description', 'disabled_at', 'created_at'])
            ->paginate();

        return new IncomeCollection($incomes);
    }

    public function store(StoreRequest $request, IncomeStoreAction $storeAction): JsonResource
    {
        $income = $storeAction->execute($request->validated())->result();
        return new IncomeResource($income);
    }

    public function show(Income $income): JsonResource
    {
        return new IncomeResource($income);
    }

    public function update(UpdateRequest $request, Income $income, IncomeUpdateAction $updateAction): JsonResource
    {
        $updateAction->for($income)->execute($request->validated())->result();
        return new IncomeResource($income);
    }

    public function destroy(Income $income): Response
    {
        $income->delete();

        return response()->noContent();
    }
}
