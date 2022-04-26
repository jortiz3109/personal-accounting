<?php

namespace App\Http\Controllers\Api\Admin;

use App\Actions\Admin\Expenses\ExpenseStoreAction;
use App\Actions\Admin\Expenses\ExpenseUpdateAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Admin\Expenses\IndexRequest;
use App\Http\Requests\Api\Admin\Expenses\StoreRequest;
use App\Http\Requests\Api\Admin\Expenses\UpdateRequest;
use App\Http\Resources\ExpenseCollection;
use App\Http\Resources\ExpenseResource;
use App\Models\Expense;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

class ExpenseController extends Controller
{
    /**
     * @throws BindingResolutionException
     */
    public function index(IndexRequest $request, Expense $expense): ResourceCollection
    {
        $expenses = $expense
            ->filter($request->get('filters'))
            ->select(['id', 'name', 'description', 'disabled_at', 'created_at'])
            ->paginate();

        return new ExpenseCollection($expenses);
    }

    public function store(StoreRequest $request, ExpenseStoreAction $storeAction): JsonResource
    {
        $income = $storeAction->execute($request->validated())->result();
        return new ExpenseResource($income);
    }

    public function show(Expense $expense): JsonResource
    {
        return new ExpenseResource($expense);
    }

    public function update(UpdateRequest $request, Expense $expense, ExpenseUpdateAction $updateAction): JsonResource
    {
        $updateAction->for($expense)->execute($request->validated());

        return new ExpenseResource($expense);
    }

    public function destroy(Expense $expense): Response
    {
        $expense->delete();
        return response()->noContent();
    }
}
