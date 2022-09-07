//add item code
const msg = document.getElementById("msg");
let data = [];
function manageData() {
  const inputData = document.getElementById("Item").value;

  // console.log(inputData, "hello");
  if (inputData === "") {
    msg.innerHTML = "Please enter your item";
    // console.log("fail");
  } else {
    data.push({ value: inputData, id: new Date().valueOf() });
    document.getElementById("Item").value = "";
    // console.log("done");
    msg.innerHTML = "";
  }

  console.log(data);

  setData();
}

function setData() {
  let str = "";
  data.forEach((item, index) => {
    const row = `<div class="task">
     <p>${item.value}</p>
     <button type="submit" class="btn btn-danger" onClick="deletePost(${item.id})"> <i class="far fa-trash-alt"></i></button>
        </div>`;
    str = `${str}${row}`;
  });

  document.getElementById("userList").innerHTML = str;
}
function deletePost(id) {
  data = data.filter((item, index) => item.id != id);
  setData();
}
