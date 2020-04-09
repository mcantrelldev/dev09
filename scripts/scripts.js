$(function () {
    console.log("ready!");
    $("#textOutput").text("");

    //event listener in jQ
    $("#btnSendText").on("click", function (e) {
        e.preventDefault();
        var getInput = $("#textInput").val();
        // change the output accordingly
        $("#textOutput")
            .html("<p>" + getInput + "</p>")
            .addClass("capitalize");
        // set value back to blank
        $("#textInput").val("");

    });
});

// on each key, replicate to the input box below
  $("#textInput").keyup(function () {
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
        // change the output accordingly
        $("#textOutput2")
            .html("<p>" + getInput + "</p>")
            .addClass("lowerWithOtherFont");
        // set value back to blank
        $("#textInput2").val("");

    });
});

// on each key, replicate to the input box below
  $("#textInput2").keyup(function () {
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
        // change the output accordingly
        $("#textOutput3")
            .html("<p>" + getInput + "</p>")
            .addClass("boldLargerColor");
        // set value back to blank
        $("#textInput3").val("");
        
    });

    // on each key, replicate to the input box below
  $("#textInput3").keyup(function () {
      console.log('key');
      var inputVal = $("#textInput3").val();
      $("#textInputType3").val(inputVal);
  });

});
