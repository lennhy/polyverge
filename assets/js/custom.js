"use strict";
(function (){
  var myModule = {
    year: function(){
      return new Date().getFullYear();
    },
    updateYearOnPage: function(){
      document.getElementById("date").innerHTML = "© Polyverge "+myModule.year();
    }
  };
  myModule.updateYearOnPage();

})();
