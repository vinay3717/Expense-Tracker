alert("JavaScript Connected!");
let balance=0;
function addTransaction(){
    let desc=document.getElementById("desc").value;
    let amount=document.getElementById("amount").value;
    let type=document.getElementById("type").value;

    if(desc===""||amount===""){
        alert("Please fill all fields mentioned");
        return;
    }
    amount=Number(amount);

    if(type==="expense"){
        balance=balance-amount;
    }
    else{
        balance=balance+amount;
    }
    document.getElementById("balance").innerText=balance;
    let li=document.createElement("li");
    li.innerText=desc+"-Rs"+amount+" ("+type+") ";
    
    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";

    deleteBtn.onclick=function(){
        li.remove();
    };
    li.appendChild(deleteBtn);
    document.getElementById("list").appendChild(li);

    document.getElementById("desc").value="";
    document.getElementById("amount").value="";
}