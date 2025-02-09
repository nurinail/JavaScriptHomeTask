class Employee {
  constructor(id, fullName, age, position, skill) {
    this.id = id;
    this.fullName = fullName;
    this.age = age;
    this.position = position;
    this.skill = skill;
  }
}
let usersTable = document.querySelector(".tableUsersDiv");
let userForm = document.querySelector(".main_employeeSystem_forAdd_form");
let warningText = document.querySelector(".warning");
let employeeUsersArr = [];
let userId = 0;
let selectValue = [];
let inputSelect = document.getElementById("employeeSelect");
inputSelect.addEventListener("change", () => {
  let selectedOption = inputSelect.options[inputSelect.selectedIndex]; // Seçilmiş option
  selectedOption.classList.toggle("employeeSelectOptionActive");
  optionValue = inputSelect.options[inputSelect.selectedIndex].text;
  selectValue.push(optionValue);
  let endSelectValue = [...new Set(selectValue)];
  selectValue = endSelectValue;
});
function refreshData() {
  usersTable.innerHTML = employeeUsersArr
    .map(
      (e, index) =>
        `
        <ul class="tableUsers_list" >
            <li class="tableUsers_list_item">${index + 1}</li>
            <li class="tableUsers_list_item">${e.fullName}</li>
            <li class="tableUsers_list_item">${e.age}</li>
            <li class="tableUsers_list_item">${e.position}</li>
            <li class="tableUsers_list_item">${e.skill}</li>
            <li class="tableUsers_list_item"><button class="listBtn changeBtn">Düzəliş</button><button class="listBtn removeBtn" data-userId="${
              e.id
            }">Sil</button></li>
        </ul>
        `
    )
    .join("");
}

function change() {
  let changeBtn = document.querySelectorAll(".changeBtn");
  changeBtn.forEach((e) => {
    e.addEventListener("click", () => {
      let parentElement = e.parentElement.parentElement;
      let listItem = parentElement.children;
      listItem[1].toggleAttribute("contenteditable", "true");
      listItem[2].toggleAttribute("contenteditable", "true");
      listItem[3].toggleAttribute("contenteditable", "true");
      listItem[4].toggleAttribute("contenteditable", "true");
    });
  });
}
function remove() {
  let removeBtn = document.querySelectorAll(".removeBtn");
  removeBtn.forEach((even) => {
    even.addEventListener("click", () => {
      let userId = Number(even.getAttribute("data-userId"));
      let filterArr = employeeUsersArr.filter((item) => item.id != userId);
      employeeUsersArr = filterArr;
      refreshData();
      console.log(employeeUsersArr);
    });
  });
}

function sendUser(ev) {
  ev.preventDefault();
  let inputFullName = document.querySelector(
    ".main_employeeSystem_forAdd_form_inputFullName"
  );
  let inputAge = document.querySelector(
    ".main_employeeSystem_forAdd_form_inputAge"
  );
  let inputPosition = document.querySelector(
    ".main_employeeSystem_forAdd_form_inputPosition"
  );
  if (
    !inputFullName.value ||
    !inputAge.value ||
    !inputPosition.value ||
    selectValue.length == 0
  ) {
    warningText.innerText = "Bütün xanaları doldurun";
  } else if (inputFullName.value.length < 3) {
    warningText.innerText = "Ad və Soyad 3 hərfdən aşağı ola bilməz";
  } else if (inputAge.value < 18 || inputAge.value > 65) {
    warningText.innerText = "Yaş 18-dən kiçik, 65-dən böyük ola bilməz";
  } else if (inputPosition.value.length < 3 || inputAge.value > 30) {
    warningText.innerText = "Vəzifə 3 və 30 simvol sayı ola bilər";
  } else if (selectValue.length == 0) {
    warningText.innerText = "Ən azı bir dil seçilməlidir";
  } else {
    userId++;
    let newUser = new Employee(
      userId,
      inputFullName.value.trim(),
      inputAge.value,
      inputPosition.value.trim(),
      selectValue
    );
    selectValue = [];
    employeeUsersArr.push(newUser);
    refreshData();
    change();
    remove();
    warningText.innerText = "";
    inputFullName.value = "";
    inputAge.value = "";
    inputPosition.value = "";
    console.log(employeeUsersArr);
  }
}

userForm.addEventListener("submit", sendUser);
