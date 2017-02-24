/* global moment */

// When user clicks add-btn
$("#event-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newEvent = {
    name: $('#event-name').val().trim(),
    author: $("#author").val().trim(),
    description: $("#description").val().trim(),
    when_at: moment($('#when-at')).format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newEvent);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newEvent)
    // On success, run the following code
    .done(function() {
      

      var row = $("<div>");
      row.addClass("events-created");

      row.append("<p>" + newEvent.author + " events: </p>");
      row.append("<p>" + newEvent.description + "</p>");
      row.append("<p>At " + moment(newEvent.when_at).format("h:mma on dddd") + "</p>");

      $("#events-post").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#description").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  .done(function(data) {
    alert( "$.get succeeded" );
  })
  $.fail(function(data) {
    alert( "$.get failed!" );
  });


  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("events-created");

      row.append("<p>" + data[i].author + " events.. </p>");
      row.append("<p>" + data[i].description+ "</p>");
      row.append("<p>At " + moment(data[i].when_at).format("h:mma on dddd") + "</p>");

      $("#events-post").prepend(row);

    }

  }

});
