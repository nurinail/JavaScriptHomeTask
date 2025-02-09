let employeeForm = document.querySelector(".main_employeeSystem_forAdd_form");
let employeeTable = document.querySelector(".tableUsersAbout");
function Employee(userId, fullName, age, position) {
  this.userId = userId;
  this.fullName = fullName;
  this.age = age;
  this.position = position;
}

let usersArr = [];
let userId = 0;
function writeData() {
  employeeTable.innerHTML = usersArr
    .map(
      (even, index) =>
        `
    <ul class="tableUsersAboutUl" data-userId="${index + 1}">
      <li class="tableUsersAboutUlTitle">${index + 1}</li>
      <li class="tableUsersAboutUlTitle"><input class="tableInputforChange tableInputforChangeFullName" type="text" value="${
        even.fullName
      }" disabled></li>
      <li class="tableUsersAboutUlTitle"><input class="tableInputforChange tableInputforChangeAge" type="number" value="${
        even.age
      }" disabled></li>
      <li class="tableUsersAboutUlTitle"> <input class="tableInputforChange tableInputforChangePosition" type="text" value="${
        even.position
      }" disabled></li>
      <li class="tableUsersAboutUlTitle listBtn">  <button class="tableBtn changeBtn"></button><button class="tableBtn removeBtn">Sil</button> </li>
    </ul>
    `
    )
    .join("");

  let userList = document.querySelectorAll(".tableUsersAboutUl");
  userList.forEach((e, id) => {
    let changeBtn = e.children[4].children[0];
    let removeBtn = e.children[4].children[1];
    let changeFullName = e.children[1].children[0];
    let changeAge = e.children[2].children[0];
    let changePositin = e.children[3].children[0];
    // let changeInputs=document.querySelectorAll(".tableInputforChange");

    changeBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      changeFullName.toggleAttribute("disabled");
      changeAge.toggleAttribute("disabled");
      changePositin.toggleAttribute("disabled");
      changeBtn.classList.toggle("changeBtn");
      changeBtn.classList.toggle("changeBtnactive");
    });

    removeBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      let listId = id + 1;

      usersArr = usersArr.filter((user) => user.userId != listId);
      writeData();
      console.log(usersArr);
    });
  });
}

function setNewUser(e) {
  e.preventDefault();

  let warningText = document.querySelector(".warning");
  let fullNameInput = document.querySelector(
    ".main_employeeSystem_forAdd_form_inputFullName"
  );
  let ageInput = document.querySelector(
    ".main_employeeSystem_forAdd_form_inputAge"
  );
  let positionInput = document.querySelector(
    ".main_employeeSystem_forAdd_form_inputPosition"
  );

  function getReset() {
    fullNameInput.value = "";
    ageInput.value = "";
    positionInput.value = "";
  }
  if (setNewUser) {
    if (fullNameInput.value.length > 30 || fullNameInput.value.length < 3) {
      warningText.innerHTML = "Ad və Soyad 3 və 30 simvol sayı arası olmalıdır";
    } else if (ageInput.value <= 18 || ageInput.value >= 65) {
      warningText.innerHTML = "Yaş 18-dən kiçik 65-dən böyük ola bilməz";
    } else if (
      !positionInput.value ||
      !fullNameInput.value ||
      !ageInput.value
    ) {
      warningText.innerHTML = "Zəhmət olmasa bütün xanaları doldurun";
    } else {
      userId += 1;
      let newUser = new Employee(
        userId,
        (fullNameInput.value).trim(),
        Number(ageInput.value),
        positionInput.value.trim()
      );
      usersArr.push(newUser);
      console.log(usersArr);
      warningText.innerHTML = "";
      getReset();
      writeData();
    }
  }
}
employeeForm.addEventListener("submit", setNewUser);
