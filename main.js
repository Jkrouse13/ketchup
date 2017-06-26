// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  fetch("https://randomuser.me/api/?results=12")
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json.results[0])





  });

  'use strict';

  // Your Code Goes Here

})();
