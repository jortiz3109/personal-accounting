@extends('layouts.admin')
@push('content-top')
    <div class="mb-3">
        <incomes-search-component></incomes-search-component>
    </div>
@endpush
@push('card-body-top')
    <incomes-index-component>
        <template #thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Created at</th>
                <th></th>
            </tr>
        </template>
    </incomes-index-component>
@endpush
@push('content-bottom')
    <pagination-component></pagination-component>
@endpush
