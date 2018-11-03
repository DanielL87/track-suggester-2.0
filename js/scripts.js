$(document).ready(function() {
  $("#submit").click(function(event) {

  var school = $("#school").val();
  var describe = $("#describe").val();
  var hobby = $("#hobby").val();
  var sales = $("#sales").val();
  var goal = $("#goal").val();


  if (school == "Art" && describe == "Quiet and Reserved" && hobby == "Painting" && sales == "Marketing" && goal == "To share my design Visions with Others"){
    $(".result2").hide();
    $(".result3").hide();
    $(".result1").show();
  }
  if(school == "Math and Science" && describe == "Loud and Cheerful" && hobby == "Playing Video Games" && sales == "Working out Shipping Details" && goal == "To Learn how an App Works"){
    $(".result1").hide();
    $(".result3").hide();
    $(".result2").show();
  }
  if(school == "Language Arts" && describe == "Neither" && hobby == "Reading Books" && sales == "Head of Finance" && goal == "To Make Money"){
    $(".result1").hide();
    $(".result2").hide();
    $(".result3").show();
  }


  event.preventDefault();
  });
});
