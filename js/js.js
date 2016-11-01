/*fonction qui fait disparaitre les éléments listes du body et les fais réapparaître*/

$(document).ready(function(){
    $("#hide").click(function(){
        $("li").hide();
       });
       $("#show").click(function(){
        $("li").show();
    });
      });
