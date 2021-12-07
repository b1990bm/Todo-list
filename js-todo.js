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
        {content:"watch tv",status:true},
        {content:"watch photo",status:true},
        {content:"watch movie",status:true},
        
    ]
    localStorage.setItem("todos",JSON.stringify(todos))
}

// sakhte func baray create ul
function createtodos(todos){
    let todolist=document.querySelector("#todo-list")
    todolist.innerHTML = ""
    todos.forEach((todo,index) =>{
        let li=document.createElement("li")
        li.className="list-group-item"
        let span=document.createElement("span")
        //span chon bala {} gozashtim 
        span.textContent=todo.content
        //shart baray span darsorte true va false bodan
        span.style.textDecoration=todo.status ? "inital" : "line-through"
        let icon=document.createElement("img")
        icon.src="./Img/remove-icon.png"
        li.append(span)
        li.append(icon)
        todolist.append(li)

        // sakhtan remove icon
        icon.addEventListener("click",e=>{
            todos.splice(index,1)
            localStorage.setItem("todos",JSON.stringify(todos))
            createtodos(todos)
        })

        //sakhte khte vaste span
        span.addEventListener("click",e=>{
            todos[index].status=  !todos[index].status
            localStorage.setItem("todos",JSON.stringify(todos))
            createtodos(todos)
        })
    
    })
    
}

createtodos(todos)

let formw = document.querySelector(".form-w")
let actions = document.querySelector("#action")
Array.from(actions.children).forEach(action =>{
    if (action.dataset.action=="add"){
        action.addEventListener("click",e =>{
            formw.innerHTML=`
            <form id="add">
            <input type="text" class="form-control" name="add" placeholder="ADD To">
            </form>
            `
            
        })
    }else if (action.dataset.action=="search"){
        action.addEventListener("click",e =>{
            formw.innerHTML=`
            <form id="search">
            <input type="text" class="form-control bg-opacity-10" name="search" placeholder="Search To">
            </form>
            `
            
        })

    }
})