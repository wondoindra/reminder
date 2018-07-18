$(document).ready(function () {
    $("#input-button").click(function () {
        var text = $("#input-text").val();
        $(".reminder-list-container").append("<div class='reminder-list'>" +
            "<button id='reminder-delete' class='reminder-list-button'>X</button> " +
            "<li>" + text + "</li>" + "</div>");
        $("#input-text").val('');
    });
});

$(document).on("click", "#reminder-delete", function () {
    $(this).parent().hide();
})