app.controller("myctrl",['$scope','myfactory',(scope,factory)=>{
    scope.item = {};
    scope.items = [];
    scope.add=()=>
    {
        var items = factory.add(scope.item);
        scope.items = items;
    }
    scope.delete=()=>
    {
        var items=factory.delete();
        scope.items=items;
    }
    scope.search=()=>
    {
        scope.searchy=factory.searchToggle();
    }
    scope.mark_danger=(id)=>
    {
        factory.isTrash(id);
    }
    scope.local_storage=()=>
    {
        factory.addtolocalStorage();
    }
    scope.load_from_database=()=>
    {
        
        scope.items=factory.load();
    }
    scope.Clear_all=()=>
    {
        scope.items=factory.clear();
    }

}]);