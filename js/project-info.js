$(document).ready(function () {
    $('.project-info-toggle').click(function () {

        var target = "." + $(this).data("target");


        $('.click-to-expand').html("Project Details:");

        $('.project-info').hide();
        $(target).fadeIn();

        $('html, body').animate({ scrollTop: $(target).offset().top - 20});

        return false;
    });
});