$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.nav_bar').addClass("sticky");
        } else {
            $('.nav_bar').removeClass("sticky");
        }
    });
});