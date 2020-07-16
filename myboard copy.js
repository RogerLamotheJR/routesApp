$(document).ready(function() {
  
  // MyBoardContainer holds all of myboard posts
  var myBoardContainer = $(".myBoard-container");
  var postInstrumentSelect = $("#instruments");

    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    postInstrumentsSelect.on("change", handleInstrumentsChange);
    var posts;


    // This function grabs posts from the database and updates the view
    function getPosts(instruments) {
        var instrumentsString = instruments || "";
        if (instrumentsString) {
        instrumentsString = "/instruments/" + instrumentsString;
        }
        $.get("/api/posts" + instrumentsString, function(data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
            displayEmpty();
        }
        else {
            initializeRows();
        }
        });
    }
});