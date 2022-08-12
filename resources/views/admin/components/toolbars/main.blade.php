<div class="btn-toolbar" role="toolbar" aria-label="{{ trans('Module toolbar') }}">
    @foreach($actions as $action => $params)
        @includeIf("admin.components.buttons.$action", $params)
    @endforeach
</div>
