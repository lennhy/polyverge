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
      addClass: function(element, string){
          element.className = element.className + string;
      },

      // Logic for toggling container
      toggleAction: function(elements, div, oldAttribute, newAttribute){
          for (let i=0;i<elements.length;i++){
              elements[i].addEventListener("click", function(){
                let columnContainer = elements[i].parentNode.parentNode.parentNode;
                let jumbotronContainer = elements[i].parentNode.parentNode.parentNode.querySelector(div);
                   jumbotronContainer.className = jumbotronContainer.className.replace(oldAttribute, newAttribute);
                   module.addClass(columnContainer, ' full-width');
              }, false);
          }
      },

      selectInnerElements(innerEls){
         let elements = document.querySelectorAll(innerEls);
         return elements;
      },
      
      // Call the action to toggle container
      toggleContainer: function(){
        module.toggleAction(module.selectInnerElements("ul.list-inline > li.read-more"), ".jumbotron", "hidden", "visible");
        module.toggleAction(module.selectInnerElements("div.jumbotron .glyphicon-remove"), ".jumbotron", "visible", "hidden");
      }

  };

  module.updateYearOnPage();
  module.toggleContainer();

})();


// when link is clicked hidden box will turn to show and slide down
// getElementById
