const service = document.querySelector("#service");
const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const button = document.querySelector("#calculate");
const tip = document.querySelector("#tip");
const result = document.querySelector("#result");
const each = document.querySelector("#each");


button.addEventListener("click", calculate);

function calculate() {
    let index = service.selectedIndex;
    let tipPercent = Number(bill.value) * Number(service.options[index].value) / 100;
    result.style.visibility = "visible";
    tip.style.visibility = "visible";

    if (people.value >= 1) {
        let final = tipPercent / people.value;
        result.innerHTML = Number(final.toFixed(2));
        each.style.visibility = "visible";
    }
}