var s = document.getElementById("ip");
s.addEventListener("keypress", function(event){
if (event.key === "Enter"){
event.preventDefault();
document.getElementById("sub").click();
}
});

function addinlist(){
    let s=document.getElementById('ip').value;
    let mainlist=document.getElementById('ul');
    let list=document.createElement('li');
    let but=document.createElement('button');

    list.innerText=s;
    but.innerText="Delete";
    
    let div=document.createElement('div');
    div.append(list);
    div.append(but);
    mainlist.appendChild(div);

    div.setAttribute('class','row');
    list.setAttribute('id','li');
    but.setAttribute('class','foo');
    but.setAttribute('id','del');
    document.getElementById("ip").value="";
    
    list.addEventListener("click", function(){
        list.classList.toggle("delete");
    });

    but.onclick=function(){
        ul.removeChild(div);
    };
}
