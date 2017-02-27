/* global moment */
$(document).ready(function(){

// $("#when_at").datepicker({ dateFormat: 'mm/dd/yyyy', minDate:0})
// When user clicks add-btn
$("#event-submit").on("click", function(event) {
  event.preventDefault();
  
  $("#myModal").modal("toggle");
  
  
  
  
  // var test = moment($('#when_at').val(),"MM-DD-YYYY").toString();
  // console.log(test);

  // Make a event object
  var newEvent = {
    event_Name: $('#event-name').val().trim(),
    author: $("#author").val().trim(),
    description: $("#description").val().trim(),
    when_at: $('#when_at').val(),
    location: $("#where_at").val().trim(),
    attendee: parseInt($("#who-attends").val()),
    time: $("#time_at").val()
  };

  console.log(newEvent);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newEvent)
    // On success, run the following code
    .done(function() {
      
      
      var row = $("<div>");
      row.addClass("events-created");

      row.append("<p>" + newEvent.event_Name + "</p>");
      row.append("<p>" + newEvent.description + "</p>");
      row.append("<p>At " + (newEvent.when_at) + "</p>");

      $("#events-post").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#description").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  // .done(function(data) {
  //   alert( "$.get succeeded" );
  // })
  // .fail(function(data) {
  //   alert( "$.get failed!" );
  // });
console.log(data);

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("events-created");

      row.append("<p>" + data[i].event_Name + "</p>");
      row.append("<p>" + data[i].description+ "</p>");
      row.append("<p>At " + data[i].when_at+ "</p>");

      $("#events-post").prepend(row);

    }

  }

});
});
