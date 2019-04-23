$(function () {

    $(".devour-burger").on("click", function () {
        var ID = $(this).data("id")

        $.ajax("api/burgers/" + ID, {
            type: "PUT",
        }).then(
            function () {
                location.reload();
            }
        )
    });

    $("#submit-burger").on("click", function (event) {

        event.preventDefault();
        var burgerName = { name: $("#burger-name").val().trim() }


        $.ajax("api/burgers", {
            type: "POST",
            data: burgerName
        }).then(
            function () {
                location.reload();
            }
        )

        $("#burger-name").val("")

    });





})

// $('.devour-burger').hover(
//     function () { $(this).addClass('') },
//     function () { $(this).removeClass('hover') }
// )