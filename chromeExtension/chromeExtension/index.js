
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBnt = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBnt.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = " ";
    renderLeads()
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems +=  "<li>" + "<a href='" + myLeads[i] + "' target='_blank' rel='noopener noreferrer'>" + myLeads[i] + "</a>" + "</li>";
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank' rel='noopener noreferrer'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        //const li = document.createElement("li");
        //li.textContent = myLeads[i];
        //ulEl.append(li)
    }
    ulEl.innerHTML += listItems;
}


