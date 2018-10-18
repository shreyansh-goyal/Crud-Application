app2.factory("myfactory",()=>{
    const itemOperations = 
    {
        items:[],search:false,
        add(itemObject)
        {
            var item = new Item(itemObject.id, itemObject.name, itemObject.desc, itemObject.price, itemObject.color, itemObject.date);
            this.items.push(item);
            return this.items;
        },
        delete()
        {
            var data = this.items.filter(data=>data.trash==false);
            this.items=data;
            return this.items;
            
        },
        isTrash(id)
        {
                var a=this.items.find(i=>i.id===id);
                a.toggle();
        },
        searchToggle()
        {
            this.search=!this.search;
            console.log(this.search)
            return this.search;
        },
        addtolocalStorage()
        {
            const obj={first_commit:this.items};
            const string=JSON.stringify(obj);
            localStorage.setItem("first_commit",string);
        },
        load()
        {
            var a=JSON.parse(localStorage.getItem("first_commit"));
            var a=this.items.concat(a.first_commit);
            return a;
        },
        clear()
        {
            var a=[];
            this.items=a;
            return this.items;
        }

    };
    return itemOperations;
})