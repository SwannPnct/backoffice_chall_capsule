$("#filter_button").on("click", function() {
    console.log("clicked on FILTER");
    if($("#filter_type").val()) {
        $(".card-subtitle").each(function() {
            if($(this).text() != $("#filter_type").val()) {
                $(this).parent().parent().hide();
            }
        })
    }
    if($("#filter_min").val()) {
        console.log("filtering by MIN");
        $(".contact_age").each(function() {
            if(parseInt($(this).text()) <= $("#filter_min").val()) {
                $(this).parent().parent().parent().parent().parent().hide();
            }
        })
    }
    if($("#filter_max").val()) {
        console.log("filtering by MAX");
        $(".contact_age").each(function() {
            if(parseInt($(this).text()) >= $("#filter_max").val()) {
                $(this).parent().parent().parent().parent().parent().hide();
            }
        })
    }
})

$("#filter_cancel").on("click", function() {
    console.log("clicked on CANCEL");
    $(".row").children().each(function() {$(this).show()})
    $("#filter_type").val("");
    $("#filter_min").val("");
    $("#filter_max").val("");
})