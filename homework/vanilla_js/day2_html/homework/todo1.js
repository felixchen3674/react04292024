const button = document.getElementsByClassName("--addBtn");
const ul = document.getElementsByClassName("__ulList")[0];
button[0].addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementsByTagName("input")[0];
  const value = input.value;
  if (input.value === "") {
    alert("Please enter input");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `<p>${value}</p><button class="--deleteBtn">-</button>`;
  ul.appendChild(li);
  input.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("--deleteBtn")) {
    e.target.closest("li").remove();
  }
});
