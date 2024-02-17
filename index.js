const form_data = document.getElementById("form-category");
let list_categoria = document.getElementById("list-category");
const alert_category = document.getElementById("alert-categoria");
const copy_category = document.getElementById("copy-category").children[0];

form_data.addEventListener("submit", (e) => {
  e.preventDefault();
  let cat = document.getElementById("input-category");
  if (!!cat.value) {
    alert_category.style.display = "none";
    console.log(cat.value, cat.name);
    copy_category.innerHTML += `"${cat.value}",`;
    list_categoria.innerHTML += `<li>${cat.value}</li>`;
    cat.value = "";
  } else {
    alert_category.style.display = "block";
  }
});
