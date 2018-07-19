$(document).ready(function () {
    $("#input-button").click(function () {
        if ($("#input-text").val().length && $("#datetimepicker").val().length === 0) {
            alert("Write something ");
        } else {
            var text = $("#input-text").val();
            var datetime = $("#datetimepicker").val();
            $(".reminder-list-container").append("<div id='list-div' class='alert alert-light clearfix align-middle m-3 border-danger'>" +
                datetime + "<hr>" + text + "<button id='reminder-ongoing' class='btn btn-danger float-right' disabled>Ongoing</button>" +
                "<button id='reminder-completed' class='btn mr-2 float-right'>Completed</button>" + "</div>");
            $("#input-text").val('');
        }
    });
});

$(document).on("click", "#reminder-ongoing", function () {
    $(this).addClass("btn-danger").prop("disabled", true);
    $("#reminder-completed").removeClass("btn-success").prop("disabled", null);
    $("#list-div").removeClass("border-success").addClass("border-danger");
});

$(document).on("click", "#reminder-completed", function () {
    $(this).addClass("btn-success").prop("disabled", true)
    $("#reminder-ongoing").removeClass("btn-danger").prop("disabled", null);
    $("#list-div").removeClass("border-danger").addClass("border-success");
});