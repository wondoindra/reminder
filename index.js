$(document).ready(function () {
    $("#input-button").click(function () {
        if ($("#input-text").val().length === 0) {
            alert("Write something ");
        } else {
            var text = $("#input-text").val();
            $(".reminder-list-container").append("<div class='card m-3'>" +
                "<div class='card-header'>" + "</div>" + "<div class='card-body'>" +
                "<p class='card-text'>" + text + "</p>" + "<button id='reminder-delete' class='btn btn-danger float-right'>Completed</button>" + "</div>" + "</div>");
            $("#input-text").val('');
        }
    });
});

$(document).on("click", "#reminder-delete", function () {
    $(".card").fadeOut(400);
})