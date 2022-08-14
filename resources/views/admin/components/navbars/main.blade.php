<div class="container mb-2">
<nav class="navbar navbar-expand-lg bg-light rounded px-2" aria-label="{{ trans('Main navbar') }}">
        <a class="navbar-brand" href="{{ url()->to('/') }}">{{ config('app.name', 'Laravel') }}</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavBar"
            aria-controls="mainNavBar"
            aria-expanded="false"
            aria-label="{{ trans('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNavBar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">{{ trans('Home') }}</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">{{ trans('Administration') }}</a>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                        <li>
                            <a class="dropdown-item" href="{{ route('admin.incomes.index') }}">
                                {{ trans('admin.incomes.titles.index') }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
</nav>
</div>
