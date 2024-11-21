// 以下变量定义在外部，使得所有method都能用
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

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
  // this is where the <li> is added
  itemList.appendChild(li);
  checkUI();
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

function removeItem(e) {
  // the if condition target the click on the <i> whose parent has the className attribute 'remove-item'
  if (e.target.parentElement.classList.contains("remove-item")) {
    // first parent is <button>; second parent is <li>
    if (window.confirm("are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
    checkUI();
  }
  // 此时，e.target 指向 click对象，点ul即是ul，点li即是li，点i即是icon
  // e.target;
}

function clearAll(e) {
  // 自己的写法，老师说也算行
  // itemList.innerHTML = "";
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  itemInput.value = "";
  checkUI();
}

function checkUI() {
  // this will return a list of nodes that meet the requirement
  // 如果放在这里，只在网页一打开的时候取值一次，之后没有自动再取值
  //想要动态取值的话，要把这句放进 checkUI()里面

  const items = itemList.querySelectorAll("li");
  if (items.length == 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

// // event listeners
// 用于向元素添加事件监听器：当遇到submit事件，触发addItem method。submit是预定义的事件

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearAll);
checkUI();
