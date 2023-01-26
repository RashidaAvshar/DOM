document.querySelector("#btn_add").addEventListener("click", ()=>{
    const inputTask = document.querySelector("#taskinput").value;
    if(inputTask.trim()==""){
        alert("xanaya deyer elave edin");
    }else{
        document.querySelector("#task_list").innerHTML +=`<div class="task_item">
            <span>${inputTask}</span>
            <button id="delete">X</button>
        </div>`;
        document.querySelector("#taskinput").value="";
        const deleteTask = document.querySelectorAll("#delete");
        for(let i=0; i< deleteTask.length; i++){
            deleteTask[i].onclick = function(){
                deleteTask[i].parentNode.remove();
            }
        }
    }
})

// !=================================================nav bar============================================================================

document.querySelector("#menu") =addEventListener("click", ()=>{
    console.log("menu");
});