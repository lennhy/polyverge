"use strict";
var showDetail = function(){

  // private function
  function year(){
    return new Date().getFullYear();
  }

  function updateYearOnPage (){
    document.getElementById("date").innerHTML = "© POLYVERGE "+year();
  }
  // function merge (){
  //   let lines = document.querySelectorAll(".moving_lines")
  //   for(let i=0; i < lines[0].children.length; i++){
  //     if(lines[0].children[i].offsetLeft > 500){
  //       console.log("kdsfdsjkfd")
  //     //   lines[0].children[i].style.animation = "merge 5s ";
  //     //
  //     //   // console.log(lines[0].children[i].offsetLeft)
  //     //   // console.log(lines[0].children[i].offsetLeft === 500)
  //     // }else{
  //     //   lines[0].children[i].style.animation = "moveright 15s infinite";
  //     // }
  //    }
  //   }
  // }

  // setInterval(merge, 10);

  // // Logic for toggling container
  // function toggleAction(elements, div, oldAttribute, newAttribute, selector, visibility){
  //   for (var i=0;i<elements.length;i++){
  //   // Use an IIEF to pass the iterator in as a varible. This ensures that i's value is not changed by closure
  //     (function(x){
  //       elements[x].addEventListener("click", function(){
  //       var columnContainer = elements[x].parentNode.parentNode.parentNode;
  //       var jumbotronContainer = elements[x].parentNode.parentNode.parentNode.querySelector(div);
  //       jumbotronContainer.className = jumbotronContainer.className.replace(oldAttribute, newAttribute);
  //       columnContainer.className = selector;
  //       }, false);
  //     })(i);
  //   }
  // },

  // private function
  // function selectInnerElements(innerEls){
  //   var elements = document.querySelectorAll(innerEls);
  //   return elements;
  // },

  // Call the action to toggle container
  // function toggleContainer (){
  //   toggleAction(selectInnerElements("ul.list-inline > li.read-more"), ".jumbotron", "hidden", "visible", 'col-lg-3 col-md-4 col-xs-6 full-width-absolute');
  //   toggleAction(selectInnerElements("ul.list-inline > .glyphicon-remove"), ".jumbotron", "visible", "hidden", 'col-lg-3 col-md-4 col-xs-6');
  // }

  return {
    updateYearOnPage: updateYearOnPage,
    // merge: merge
    // toggleContainer: toggleContainer
  }

}();

showDetail.updateYearOnPage();
// showDetail.merge();

// showDetail.toggleContainer();
