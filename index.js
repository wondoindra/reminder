$(document).ready(function () {
    $("#input-button").click(function () {
        if ($("#input-text").val().length === 0) {
            alert("Write something ");
        } else {
            var text = $("#input-text").val();
            $(".reminder-list-container").append("<div class='reminder-list'>" +
                "<button id='reminder-delete' class='reminder-list-button'>X</button> " +
                "<li>" + text + "</li>" + "</div>");
            $("#input-text").val('');
        }
    });
});

$(document).on("click", "#reminder-delete", function () {
    $(this).parent().fadeOut(400);
})