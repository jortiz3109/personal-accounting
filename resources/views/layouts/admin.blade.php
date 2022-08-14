@extends('layouts.app')
@section('content')
    @include('admin.components.navbars.main')
    <div class="container">
        @stack('content-top')
        @stack('content')
        @stack('content-bottom')
    </div>
@endsection
