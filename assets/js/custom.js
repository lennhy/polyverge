"use strict";
(function (){

  var module = {

      year: function(){
          return new Date().getFullYear();
      },

      updateYearOnPage: function(){
        document.getElementById("date").innerHTML = "© Polyverge "+module.year();
      },

      // Add new class-name to element
      addClass: function(element, newAttribute, string){
        if(newAttribute === "visible"){
          element.className = element.className = string;
        }
        if(newAttribute === "hidden"){
          element.className = element.className ="col-lg-3 col-md-4 col-xs-6";
        }
      },

      removeClass: function(element, string){
      },

      // Logic for toggling container
      toggleAction: function(elements, div, oldAttribute, newAttribute, width){
          for (var i = 0; i < elements.length; i++){
              // when document loads it adds 1 to i until it reaches 8. Then when it realizes nothing was clicked it runs again and executes
              // the following code when the click event occurs.
              elements[i].addEventListener("click", function(){
                // reset i to restart at 0 after window loads then loop and add 1 to i until click event occurs.
                i=0;
                var columnContainer = elements[i].parentNode.parentNode.parentNode;
                var jumbotronContainer = elements[i].parentNode.parentNode.parentNode.querySelector(div);
                   jumbotronContainer.className = jumbotronContainer.className.replace(oldAttribute, newAttribute);
                   module.addClass(columnContainer, newAttribute, width);
              }, false);
          }
      },

      selectInnerElements(innerEls){
         var elements = document.querySelectorAll(innerEls);
         return elements;
      },

      // Call the action to toggle container
      toggleContainer: function(){
        module.toggleAction(module.selectInnerElements("ul.list-inline > li.read-more"), ".jumbotron", "hidden", "visible", ' full-width');
        module.toggleAction(module.selectInnerElements("ul.list-inline > .glyphicon-remove"), ".jumbotron", "visible", "hidden", '  full-width');
      }

  };

  module.updateYearOnPage();
  module.toggleContainer();

})();
