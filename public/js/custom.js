"use strict";
(function (){

  var module = {

      year: function(){
          return new Date().getFullYear();
      },

      updateYearOnPage: function(){
        document.getElementById("date").innerHTML = "© POLYVERGE "+module.year();
      },

      // Logic for toggling container
      toggleAction: function(elements, div, oldAttribute, newAttribute, selector, visibility){
          for (var i=0;i<elements.length;i++){

            // Use an IIEF to pass the iterator in as a varible. This ensures that i's value is not changed by closure
            (function(x){
              elements[x].addEventListener("click", function(){
                var columnContainer = elements[x].parentNode.parentNode.parentNode;
                var jumbotronContainer = elements[x].parentNode.parentNode.parentNode.querySelector(div);
                   jumbotronContainer.className = jumbotronContainer.className.replace(oldAttribute, newAttribute);
                   columnContainer.className = selector;
              }, false);
            })(i);
          }
      },

      selectInnerElements(innerEls){
         var elements = document.querySelectorAll(innerEls);
         return elements;
      },

      // Call the action to toggle container
      toggleContainer: function(){
        module.toggleAction(module.selectInnerElements("ul.list-inline > li.read-more"), ".jumbotron", "hidden", "visible", 'col-lg-3 col-md-4 col-xs-6 full-width-absolute');
        module.toggleAction(module.selectInnerElements("ul.list-inline > .glyphicon-remove"), ".jumbotron", "visible", "hidden", 'col-lg-3 col-md-4 col-xs-6');
      }

  };

  module.updateYearOnPage();
  module.toggleContainer();

})();
