$(document).ready(function() {
  $("#title").addClass("animated bounceInLeft");
  $("#random-button").addClass("animated shake");
  $('#random-button').addClass("infinite");
 
  $("#search-form").keypress(function(e) {
    if (e.keyCode === 13) {
    $("#random-button").removeClass("infinite");
    $("#output").empty();
    var searchTerm = $('#search').val();
    if (searchTerm == "") {
     $("#search").addClass("animated shake").delay(2000, function() {
    $("#search").removeClass("animated shake")
});
    }
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        var html = '<ul>';
        for (var i = 0; i < data[1].length; i++) {
          html += "<li id=\"title\"><a href=" + data[3][i] + ">" + data[1][i] + "</a></li>";
          html += "<li id=\"description\">" + data[2][i] + "</li>";
          html += '</ul>';
          $("#output").append(html);
          html = '<ul>';
          //$("#output").append("<ul>");
          //$("<ul>").appendTo("#output");
          //$("#output").append("<li id=\"title\"><a href=" + data[3][i] + ">" + data[1][i] + "</a></li>");
          //$("#output").append("<li id=\"description\">" + data[2][i] + "</li>");
        }
      },
      error: function(errorMessage) {
        //alert("Error");
      }
    });
  }
});
});