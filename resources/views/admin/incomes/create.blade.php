@extends('layouts.admin')
@push('content')
    <income-create-component title="{{ $title  }}" :form-fields="{{ json_encode($formFields) }}" :actions="{{ json_encode($actions) }}"></income-create-component>
@endpush
