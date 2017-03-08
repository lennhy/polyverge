// "use strict";
// (function (){
//
//   var module = {
//
//       year: function(){
//           return new Date().getFullYear();
//       },
//
//       updateYearOnPage: function(){
//         document.getElementById("date").innerHTML = "© Polyverge "+module.year();
//       },
//
//       // Add new class-name to element
//       addClass: function(element, newAttribute, string){
//         if(newAttribute === "visible"){
//           element.className = element.className = string;
//         }
//         if(newAttribute === "hidden"){
//           element.className = element.className ="col-lg-3 col-md-4 col-xs-6";
//         }
//       },
//
//       removeClass: function(element, string){
//       },
//
//       // Logic for toggling container
//       toggleAction: function(elements, div, oldAttribute, newAttribute, width){
//           for (var i=0;i<elements.length;i++){
//             debugger;
//               elements[i].addEventListener("click", function(){
//                 var columnContainer = elements[i].parentNode.parentNode.parentNode;
//                 var jumbotronContainer = elements[i].parentNode.parentNode.parentNode.querySelector(div);
//                    jumbotronContainer.className = jumbotronContainer.className.replace(oldAttribute, newAttribute);
//                    module.addClass(columnContainer, newAttribute, width);
//               }, false);
//           }
//       },
//
//       selectInnerElements(innerEls){
//          var elements = document.querySelectorAll(innerEls);
//          return elements;
//       },
//
//       // Call the action to toggle container
//       toggleContainer: function(){
//         module.toggleAction(module.selectInnerElements("ul.list-inline > li.read-more"), ".jumbotron", "hidden", "visible", ' full-width');
//         module.toggleAction(module.selectInnerElements("ul.list-inline > .glyphicon-remove"), ".jumbotron", "visible", "hidden", '  full-width');
//       }
//
//   };
//
//   module.updateYearOnPage();
//   module.toggleContainer();
//
// })();
"use strict";
(function (){
  var module = {
    year: function(){
      return new Date().getFullYear();
    },
    updateYearOnPage: function(){
      document.getElementById("date").innerHTML = "© Polyverge "+module.year();
    },
    toggleContainerOpen: function(element){
      for (var i=0;i<element.length;i++){
        (function(x){
          element[x].addEventListener("click", function(){
          // console.log(i);
          var columnContainer = element[x].parentNode.parentNode.parentNode;
          var jumbotronContainer = element[x].parentNode.parentNode.parentNode.querySelector(".jumbotron");
          // replace visible class name with hidden class name and save it
           jumbotronContainer.className = jumbotronContainer.className.replace(/hidden/, 'visible');
           columnContainer.className = columnContainer.className + ' full-width';
        }, false);
      })(i);
      }
    },
    toggleContainerClose: function(button){
      for (var i=0;i<button.length;i++){
        // console.log(i);
        (function(x){
          button[x].addEventListener("click", function(){

            var columnContainer = button[x].parentNode.parentNode.parentNode;
            var jumbotronContainer = button[x].parentNode.parentNode.parentNode.querySelector(".jumbotron");
            // replace visible class name with hidden class name and save it
             jumbotronContainer.className = jumbotronContainer.className.replace(/visible/, 'hidden');
             columnContainer.className = columnContainer.className ="col-lg-3 col-md-4 col-xs-6";
          }, false);
        })(i)

      }
    },

    makeReadMoreVissible: function(){
      var innerEl = document.querySelectorAll("ul.list-inline > li.read-more");
      var exitButton = document.querySelectorAll("ul.list-inline > .glyphicon-remove");
      module.toggleContainerOpen(innerEl);
      module.toggleContainerClose(exitButton);
    }
  }
  module.updateYearOnPage();
  module.makeReadMoreVissible();
})();


// when link is clicked hidden box will turn to show and slide down
// getElementById
// Contact GitHub API Training Shop Blog About
