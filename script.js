let inputName = document.getElementById("name");
let inputProfession = document.getElementById("profession");
let inputAge = document.getElementById("age");
let message = document.getElementById("message");
let employeeList = document.getElementById("employee-list");
let submit = document.getElementById("btn");

let id = 1;
let arr = [];

// Part 4: Add Employee Function
function addEmployee(event) {
  // It prevent the form default submission bracause it refresh page when click on add user and user is not added in array.
  event.preventDefault();

  let name = inputName.value;
  let profession = inputProfession.value;
  let age = parseInt(inputAge.value);


  //Part 2: Error Messages
  if (name === "" || profession === "" || isNaN(age)) {
    message.textContent = "Error : Please Make sure All the fields are filled before adding in an employee !";
    message.style.color = "red";
    return;
  }

//Part 5: Mapping of Added Employees
  let newEmployee = { id: id++, name: name, profession: profession, age: age };
  arr.push(newEmployee);

  //Part 3: Success Message
  message.textContent = "Success : Employee Added!";
  message.style.color = "green";

  renderEmployee()

  name = "";
  email = "";
  profession = "";


  console.log("Updated Array: ", arr);
}


//Part 5: Mapping of Added Employees
function renderEmployee() {
    employeeList.innerHTML = '';
    arr.map((employee) => {
        employeeList.innerHTML += `
        <div class="employee-detail">
            <div class="employee">
                <p id="e_id">${employee.id}.</p>
                <p id="e_name">Name: ${employee.name}</p>
                <p id="e_profession">Profession: ${employee.profession}</p>
                <p id="e_age">Age: ${employee.age}</p>
            </div>
            <div>
                <button type="submit" id="btn2" onclick="deleteEmployee(${employee.id})" >Delete User</button>
            </div>
        </div>
    `;

    // Clear form inputs to add new user
    inputName.value = "";
    inputProfession.value = "";
    inputAge.value = "";
    })
}


// Part : 6 - Delete User: On click of this button, remove the specific object from the array and hide the corresponding div
function deleteEmployee(id) {
    arr = arr.filter(item => item.id !== id)
    message.textContent = "Success : Employee Deleted!";
    message.style.color = "green";
    renderEmployee();
}

submit.addEventListener("click", addEmployee);

console.log("Initial Array: ", arr);
