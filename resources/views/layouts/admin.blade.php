@extends('layouts.app')
@section('content')
    @include('admin.components.navbars.main')
    <div class="container">
        @stack('content-top')
        <div class="card mb-2">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h3 class="mb-0">{{ $moduleTitle }}</h3>
                @include('admin.components.toolbars.main')
            </div>
            <div class="card-body">
                @stack('card-body-top')
                @stack('card-body-center')
                @stack('card-body-bottom')
            </div>
        </div>
        @stack('content-bottom')
    </div>
@endsection
