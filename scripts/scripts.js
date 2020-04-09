$(function () {
    console.log("ready!");
    $("#textOutput").text("");
  
    //event listener in jQ
    $("#btnSendText").on("click", function (e) {
      e.preventDefault();
      var getInput = $("#textInput").val();
      //then maybe some other span
      $("#textOutput")
        .html("<p>" + getInput + "</p>")
        .addClass("capitalize");
        $("#textInput").val("");

      // then some code, somehow to change the format of the <p>, like css uppercase, lowercase, color, size, font-family...etc.
    });
  });

$("#textInput").keyup( function() {
    console.log('key');
    var inputVal = $("#textInput").val();
    $("#textInputType").val(inputVal);
 });

  $(function () {
    console.log("ready!");
    $("#textOutput2").text("");
  
    //event listener in jQ
    $("#btnSendText2").on("click", function (e) {
      e.preventDefault();
      var getInput = $("#textInput2").val();
      //then maybe some other span
      $("#textOutput2")
        .html("<p>" + getInput + "</p>")
        .addClass("lowerWithOtherFont");
        $("#textInput2").val("");
      // then some code, somehow to change the format of the <p>, like css uppercase, lowercase, color, size, font-family...etc.
    });
  });

$("#textInput2").keyup( function() {
    console.log('key');
    var inputVal = $("#textInput2").val();
    $("#textInputType2").val(inputVal);
 });

  $(function () {
    console.log("ready!");
    $("#textOutput3").text("");
  
    //event listener in jQ
    $("#btnSendText3").on("click", function (e) {
      e.preventDefault();
      var getInput = $("#textInput3").val();
      //then maybe some other span
      $("#textOutput3")
        .html("<p>" + getInput + "</p>")
        .addClass("boldLargerColor");
        $("#textInput3").val("");
      // then some code, somehow to change the format of the <p>, like css uppercase, lowercase, color, size, font-family...etc.
    });

    $("#textInput3").keyup( function() {
        console.log('key');
        var inputVal = $("#textInput3").val();
        $("#textInputType3").val(inputVal);
     });
  });