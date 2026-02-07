function addTodo() {
  const input = document.getElementById("TodoInput");
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.onclick = function () {
    span.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Clear";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
