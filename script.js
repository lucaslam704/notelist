const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let notifBox = document.querySelector(".notifbox");
 


function addTask()
{
    if(inputBox.value === '')
        {
            alert("ủa sao mà để trống ? giỡn mặt à?");
        }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    inputBox.value = "";
    showNotif();
    /* notifContainer.classList.add("active");
        setTimeout(() =>{
            notifContainer.classList.remove("active");
        }, 3000); */
    
    saveData();
}

function showNotif()
{
    let notifContainer = document.createElement("div");
    notifContainer.classList.add('notifContainer');
    notifContainer.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thêm vô list mà không làm bị bóp trứng dái';
    notifBox.appendChild(notifContainer);
    setTimeout(() =>{
        notifContainer.remove();
    }, 6000);
}


window.onload=function() {

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            
            saveData();
            
        }
    }, false);

}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

