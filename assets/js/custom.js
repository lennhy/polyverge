"use strict";
(function (){
  var myModule = {
    year: function(){
      return new Date().getFullYear();
    },
    updateYearOnPage: function(){
      document.getElementById("date").innerHTML = "© Polyverge "+myModule.year();
    },
    // makeReadMoreVissible: function(){
    //     let el = document.getElementsByClassName("img-container");
    //     for (let i=0;i<el.length;i++){
    //       // console.log(el[i].childNodes[1]);
    //       el[i].addEventListener("mouseover", function(){
    //         el[i].childNodes[1].style.visibility = "visible";
    //       }, false);
    //     }
    // }
  };
  myModule.updateYearOnPage();
  // myModule.makeReadMoreVissible();

})();
