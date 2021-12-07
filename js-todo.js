let todos=localStorage.getItem("todos")

// error localStorage try 
try {
    todos=JSON.parse(todos)
    todos=todos.length ? todos : null
} catch (e) {
    todos=null   
}

if (!todos){
    todos=[
        "video",
        "books",
        "music",
        "photo",
        
    ]
    localStorage.setItem("todos",JSON.stringify(todos))
}

