let inputName = document.getElementById("name");
let inputProfession = document.getElementById("profession");
let inputAge = document.getElementById("age");

let message = document.getElementById("message");

let submit = document.getElementById("btn");

let arr = [
    { id: 1, name: "Jack", profession: "Developer", age: 20 },
    { id: 2, name: "John", profession: "Admin", age: 28 },
];
let id = 3;

function submitForm(event) {
    // It prevent the form default submission bracause it refresh page when click on add user and user is not added in array.
    event.preventDefault();

    let name = inputName.value;
    let profession = inputProfession.value;
    let age = inputAge.value;

    let newEmployee = {id: id++, name: name, profession: profession, age: age};
    arr.push(newEmployee);

    message.textContent = "Success : Employee Added!";
    message.style.color = "green";

    console.log("Updated Array: ", arr);
}

submit.addEventListener('click', submitForm);

console.log("Initial Array: ", arr);