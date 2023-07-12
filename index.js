function remove(id){
    var divtoremove=document.getElementById(id)
    divtoremove.parentNode.removeChild(divtoremove);
}
document.querySelector("#push").onclick=function(){
    if(document.querySelector("#newtask input").value.length==0){
        alert("Please enter a task");
    }
    else{
        var all_tags=document.getElementsByClassName("task");
        var len=all_tags.length;

        document.querySelector("#tasks").innerHTML+=`
        <div class="task" id="task-${len}">
            <div id="taskname">
                ${document.querySelector("#newtask input").value}
                <button class="btn-remove" id="task-${len}" onclick="remove(this.id)"> X </button>
            </div>
        </div>
        `
    }
}
