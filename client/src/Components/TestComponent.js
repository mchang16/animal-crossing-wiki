import React from 'react';

export default class dbService{
    getData(){
        return ["Hi", "Hello", "Bye"];
    }
}

export default class TestComponent extends React.Component{

    constructor(db){
        super();
        this.db = db;
        this.characters();
    }

    characters(){
        this.data = this.db.getData();
    }

    searchData(target){
        for(let item of this.data){
            if(item == target)
                return true;
        }
        return false;
    }

    render(){
        return(
            <h1>Hello World!</h1>
        )
    }
}
