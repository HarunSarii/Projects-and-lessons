// variables
const todoList = [
    {
        id: 1,
        todoText: "deneme",
        isDone: false
    }
]
const todoListWrapper = document.querySelector("todo-list-wrapper");
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");

//functions



//add event lsteners

todoButton.addEventListener("click", () => {
    console.log("TODO: ", todoInput.value)
})


function DisplayTodos() {
    todoList.forEach((item) => {
        const listElemet = document.createElement("li");
        listElemet.setAttribute("data-id", item.id)

        if(item.isDone) {
            listElemet.classList.add("checked")
        }

        const checkElemet = document.createElement("i");
        
    })    
}