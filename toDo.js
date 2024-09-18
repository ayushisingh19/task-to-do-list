
function Add(){
    let newEle=document.createElement('li')
    let inputs=document.getElementById("inp");
    let text=document.querySelector(".text")
    if(inputs.value==""){
        alert("Please Enter Task ");
    }
    else{
        // newEle.innerHTML=`${inputs.value}`; 
        text.appendChild(newEle);
        newEle.textContent=document.getElementById('inp').value;
        inputs.value="";
        deleteTask(newEle)
    }
}
function  deleteTask(newEle){
  let dltbtn=document.createElement("button");
  dltbtn.textContent="Delete"
  newEle.appendChild(dltbtn)
  dltbtn.onclick=function(){
    newEle.remove()
  }


}
