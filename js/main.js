jQuery(document).ready(function ($) {
    //ISOTOPE
    let btns = $("#servicos .button-group button");
    btns.click(function (e) {
        $("#servicos .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#servicos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function () {
        $("#servicos .grid").isotope({
            filter: "*",
        });
    });

    //MAGNIFY
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        },
    });
});