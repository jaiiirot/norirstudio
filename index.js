// // const form_data = document.getElementById("form-category");
// // let list_categoria = document.getElementById("list-category");
// // const alert_category = document.getElementById("alert-categoria");
// // const copy_category = document.getElementById("copy-category").children[0];

// // form_data.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   let cat = document.getElementById("input-category");
// //   if (!!cat.value) {
// //     alert_category.style.display = "none";
// //     console.log(cat.value, cat.name);
// //     copy_category.innerHTML += `"${cat.value}",`;
// //     list_categoria.innerHTML += `<li>${cat.value}</li>`;

// //     console.log(
// //       JSON.stringify({
// //         category: cat.value,
// //       })
// //     );
// //     let req = new XMLHttpRequest();
// //     req.onreadystatechange = () => {
// //       if (req.readyState == XMLHttpRequest.DONE) {
// //         console.log(req.responseText);
// //       }
// //     };

// //     req.open("POST", "https://api.jsonbin.io/v3/b", true);
// //     req.setRequestHeader("Content-Type", "application/json");
// //     req.setRequestHeader(
// //       "X-Master-Key",
// //       "$2a$10$HSXqh33JY5Kov.6XF/iXBeC420WH9fOKfXa8erY.DSDbMzXhlqyKy"
// //     );
// //     req.setRequestHeader(
// //       "X-Access-key",
// //       "$2a$10$vsvVkMi5kJlVy8oupAvPXOKAhO7XrJqtaG3OLfEAr/fvdWYYPE3ge"
// //     );
// //     req.setRequestHeader("X-Bin-Private", "false");
// //     req.setRequestHeader("X-Collection-Name", "category");
// //     req.setRequestHeader("X-Collection-Id", "65d10849dc74654018a62b52");
// //     req.send(
// //       JSON.stringify({
// //         category: cat.value,
// //       })
// //     );
// //     cat.value = "";
// //   } else {
// //     alert_category.style.display = "block";
// //   }
// // });
// const form_data = document.getElementById("form-category");
// let list_categoria = document.getElementById("list-category");
// const alert_category = document.getElementById("alert-categoria");
// const copy_category = document.getElementById("copy-category").children[0];
// const send_whatsapp_button = document.getElementById("send-whatsapp");

// form_data.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let cat = document.getElementById("input-category");
//   if (!!cat.value) {
//     alert_category.style.display = "none";
//     console.log(cat.value, cat.name);
//     copy_category.innerHTML += `"${cat.value}",`;
//     list_categoria.innerHTML += `<li>${cat.value}</li>`;

//     console.log(
//       JSON.stringify({
//         category: cat.value,
//       })
//     );

//     // Aquí iría la lógica de enviar la categoría a la API

//     cat.value = "";
//   } else {
//     alert_category.style.display = "block";
//   }
// });

// send_whatsapp_button.addEventListener("click", () => {
//   const code = document.getElementById("copy-category").textContent;
//   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(code)}`;
//   window.open(whatsappLink, "_blank");
// });
