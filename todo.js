let todo=[];
let req=prompt("Please enter the request");

while(true){
    if(req=="quit"){
        console.log("You are quiting the app");
        break;
    }

    if(req=="list"){
        console.log("--------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("--------");
    }else if(req=="add"){
        let task=prompt("Enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req =="delete"){
        let idx=prompt("Enter the index you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("Wrong request");
    }
    req=prompt("Please enter the request");
}