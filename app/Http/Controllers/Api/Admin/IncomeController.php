<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\IncomeCollection;
use App\Models\Income;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class IncomeController extends Controller
{
    public function index(Request $request): ResourceCollection
    {
        $incomes = Income::filter($request->input('filters'))->select(['id', 'name', 'description', 'disabled_at', 'created_at'])->paginate();
        return new IncomeCollection($incomes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
