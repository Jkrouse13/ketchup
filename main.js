// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  fetch("https://randomuser.me/api/?results=12")
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    const person = json.results[0];
    console.log(person);
    // 1. use a method on the document object that allows you to select an
    //    element by some css selector. Specifically, we want to get ahold of
    //    the div with the class "customers"
    // 2. use a method on the doucment object to create a div with a class of
    //    master
    //  3. use a property of that element to add inner HTML which is a profile
    //     image, name, address, etc.
    //  4. attach the new div to the html document
    var customers = document.getElementById("customers");
    for(var i = 0; i < 12; i++){
      let person = json.results[i];
      let name = person.name.first + " " + person.name.last;
      let address = person.address;
      let email = person.email;
      let phone = person.phone;
      let location = person.location.city + " " + person.location.state;
    };
      var pic = document.createElement('img');
      for(var j = 0; j < 12; j++){
      pic.id = "pic up";
      pic.textContent = json.results[j];
      pic.appendChild(pic);
    };
      var element = document.createElement('div');
      for(var e = 0; e < 12; e++){
      element.id = "master";
      element.textContent = json.results[e];
      element.appendChild(element);
    };











  });

  'use strict';

  // Your Code Goes Here

})();
