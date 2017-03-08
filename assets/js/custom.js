"use strict";
(function (){
  var module = {
    year: function(){
      return new Date().getFullYear();
    },
    updateYearOnPage: function(){
      document.getElementById("date").innerHTML = "© Polyverge "+module.year();
    },
    toggleContainer: function(element){
      for (let i=0;i<element.length;i++){
        element[i].addEventListener("click", function(){
          let columnContainer = element[i].parentNode.parentNode.parentNode;
          let jumbotronContainer = element[i].parentNode.parentNode.parentNode.querySelector(".jumbotron");
          // replace visible class name with hidden class name and save it
           jumbotronContainer.className = jumbotronContainer.className.replace(/visible/, 'hidden');
           columnContainer.className = columnContainer.className + ' full-width';
        }, false);
      }
    },
    makeReadMoreVissible: function(){
      let innerEl = document.querySelectorAll("ul.list-inline > li.read-more");
      module.toggleContainer(innerEl);
    }
  }
  module.updateYearOnPage();
  module.makeReadMoreVissible();
})();


// when link is clicked hidden box will turn to show and slide down
// getElementById
