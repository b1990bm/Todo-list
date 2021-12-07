let todos=localStorage.getItem("todos")

// error localStorage try 
try {
    todos=JSON.parse(todos)
    todos=todos.length ? todos : null
} catch (e) {
    todos=null   
}
//  zamani ke todo khali
if (!todos){
    todos=[
        "video",
        "books",
        "music",
        "photo",
        
    ]
    localStorage.setItem("todos",JSON.stringify(todos))
}

function createtodos(todos){
    let todolist=document.querySelector("#todo-list")
    todolist.innerHTML = ""
    todos.forEach(todo =>{
        let li=document.createElement("li")
        li.className="list-group-item"
        let span=document.createElement("span")
        span.textContent=todo
        let icon=document.createElement("img")
        icon.src="./Img/remove-icon.png"
        li.append(span)
        li.append(icon)
        todolist.append(li)
    })

}
createtodos(todos)

