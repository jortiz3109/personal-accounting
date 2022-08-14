@extends('layouts.admin')
@push('content')
    <incomes-dashboard-component
        title="{{ $title }}"
        :search-fields="{{ json_encode($search) }}"
        :actions="{{ json_encode($actions) }}"
        :fields="{{ json_encode($fields) }}"
    />
@endpush
