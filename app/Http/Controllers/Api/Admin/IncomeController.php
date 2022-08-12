<?php

namespace App\Http\Controllers\Api\Admin;

use App\Actions\Admin\Incomes\IncomeStoreAction;
use App\Actions\Admin\Incomes\IncomeUpdateAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Admin\Incomes\IndexRequest;
use App\Http\Requests\Api\Admin\Incomes\StoreRequest;
use App\Http\Requests\Api\Admin\Incomes\UpdateRequest;
use App\Http\Resources\IncomeCollection;
use App\Http\Resources\IncomeResource;
use App\Models\Income;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

class IncomeController extends Controller
{
    /**
     * @throws BindingResolutionException
     */
    public function index(IndexRequest $request, Income $income): ResourceCollection
    {
        $incomes = $income
            ->filter($request->get('filters'))
            ->select(['id', 'name', 'description', 'disabled_at', 'created_at'])
            ->latest()
            ->simplePaginate();

        return new IncomeCollection($incomes);
    }

    public function store(StoreRequest $request, IncomeStoreAction $storeAction): JsonResponse
    {
        $income = $storeAction->execute($request->validated())->result();
        return response()->json([
            'message' => trans('admin.incomes.messages.created'),
            'data' => (new IncomeResource($income))->toArray($request),
        ], SymfonyResponse::HTTP_CREATED);
    }

    public function show(Income $income): JsonResource
    {
        return new IncomeResource($income);
    }

    public function update(UpdateRequest $request, Income $income, IncomeUpdateAction $updateAction): JsonResponse
    {
        $updateAction->for($income)->execute($request->validated());
        return response()->json(['message' => 'Income updated successfully'], SymfonyResponse::HTTP_OK);
    }

    public function destroy(Income $income): JsonResponse
    {
        $income->delete();
        return response()->json(['message' => 'Income deleted successfully'], SymfonyResponse::HTTP_OK);
    }
}
