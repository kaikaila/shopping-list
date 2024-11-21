// 以下变量定义在外部，使得所有method都能用
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  // 老师说这句话是防止触发事件e自身的default行为，也即submit to file
  e.preventDefault();
  newItem = itemInput.value;
  // validate input
  if (newItem === "") {
    alert("Please add an item");
    return;
  }
  // for test
  // console.log("success");

  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
  // to clear the input box
  itemInput.value = "";
  // for testing
  // console.log(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  button.appendChild(createIcon("fa-solid fa-xmark"));
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

// // event listeners
// 用于向元素添加事件监听器：当遇到submit事件，触发addItem method。submit是预定义的事件

itemForm.addEventListener("submit", addItem);
