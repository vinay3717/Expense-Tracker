
let transactions = [];
let balance = 0;

let savedData = localStorage.getItem("transactions");

if (savedData !== null) {
    transactions = JSON.parse(savedData);
}
function addTransaction(){
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let type = document.getElementById("type").value;

    if(desc === "" || amount === ""){
        alert("Please fill all fields mentioned");
        return;
    }
    amount = Number(amount);

    let transaction = {
        description: desc,
        amount: amount,
        type: type
    };

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.innerText = desc;

    let cell2 = document.createElement("td");
    cell2.innerText = "₹ " + amount;

    let cell3 = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {

        if (type === "income") {
            balance = balance - amount;
        } else {
            balance = balance + amount;
        }

        document.getElementById("balance").innerText = balance;

        row.remove();
        transactions.splice(index,1);
        localStorage.setItem("transactions", JSON.stringify(transactions));
    };

    cell3.appendChild(deleteBtn);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    if (type === "income") {
        document.getElementById("incomeTable").appendChild(row);
        balance = balance + amount;
    } else {
        document.getElementById("expenseTable").appendChild(row);
        balance = balance - amount;
    }

    document.getElementById("balance").innerText = balance;

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}
function loadTransactions() {
    balance = 0;
    for (let i = 0; i < transactions.length; i++) {
        let t = transactions[i];
        addRowToTable(t.description, t.amount, t.type);
        if (t.type === "income") {
            balance += Number(t.amount);
        } else {
            balance -= Number(t.amount);
        }
    }
    document.getElementById("balance").innerText = balance;
}
function addRowToTable(desc, amount, type) {

    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.innerText = desc;

    let cell2 = document.createElement("td");
    cell2.innerText = "₹ " + amount;

    row.appendChild(cell1);
    row.appendChild(cell2);

    if (type === "income") {
        document.getElementById("incomeTable").appendChild(row);
    } else {
        document.getElementById("expenseTable").appendChild(row);
    }
}
loadTransactions();