// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

(function () {

  'use strict';

const customerContainer = document.querySelector(".customers");
fetch("https://randomuser.me/api/?results=12&nat=us&seed=tiy")
.then(function(response) {
  return response.json();
})
.then(function(sanData) {
  console.log(sanData);
})
let results = sanData.results;
custGen(results);

});
function custGen(custFields) {
  console.log(custFields[0]);
  for (let idx in custFields) {
    const cust = custFields[idx];

    let custName = cust.name.first + " " + cust.name.last;
    let custEmail = cust.email;
    let address1 = cust.location.street;
    let address2 = cust.location.city + ", " + cust.location.state + " " + cust.location.postcode;
    let custPhone = cust.phone;
    let container = document.createElement("div");
    let custPic = document.createElement("img");

    custPic.setAttribute("src", cust.picture.large);
    container.appendChild(custPic);
    let name = document.createElement("p");
    name.classList.add("name");
    container.appendChild(name);
    let email = document.createElement("p");
    email.textContent = custEmail.toUpperCase();
    name.classList.add("email");
    container.appendChild(email);
    let address = document.createElement("p");
    address.innerHtml = address1.toUpperCase() + "<br>" + address2.toUpperCase();
    address.classList.add("address");
    container.appendChild(address);
    let phone = document.createElement("p");
    phone.textContent = custPhone;
    phone.classList.add("phone");
    container.appendChild(phone);

    customerContainer.appendChild(container);

  }
}
})();
