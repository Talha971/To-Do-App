var getol = document.getElementById("list_ol");

document.getElementById("add_btn").addEventListener("click", function () {
  // li text

  var a = document.getElementById("inp");
  var li = document.createElement("li");
  var liText = document.createTextNode(a.value);
  getol.appendChild(li);
  li.appendChild(liText);
  a.value = " ";

  // edit button

  var edit_btn = document.createElement("button");
  var edit_btn_text = document.createTextNode("Edit");
  edit_btn.appendChild(edit_btn_text);
  li.appendChild(edit_btn);
  edit_btn.setAttribute("onclick", "editBtn(this)");
  edit_btn.setAttribute("class", "btn btn-warning");

  // delete button

  var del_btn = document.createElement("button");
  var del_btn_text = document.createTextNode("Delete");
  del_btn.appendChild(del_btn_text);
  li.appendChild(del_btn);
  del_btn.setAttribute("onclick", "del(this)");
  del_btn.setAttribute("class", "btn btn-danger");
});

// del all btn functionality

document.getElementById("del_all_btn").addEventListener("click", function () {
  getol.innerHTML = "";
});

// del btn functionality

function del(o) {
  o.parentNode.remove();
}

// edit btn functionality

function editBtn(k) {
  var editText = prompt("enter edit text", k.parentNode.firstChild.nodeValue);
  k.parentNode.firstChild.nodeValue = editText;
}
