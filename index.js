function homeScreen() {

    $('.aboutPage').hide()
    $('.contactPage').hide()
    $('.projectsPage').hide()

}



function navHandler() {
    $('.home').on('click', function (e) {
        $('.homePage').show()
        $('.aboutPage').hide()
        $('.contactPage').hide()
        $('.projectsPage').hide()

    });
    $('.about').on('click', function (e) {
        $('.aboutPage').show()
        $('.homePage').hide()
        $('.contactPage').hide()
        $('.projectsPage').hide()

    });
    $('.contact').on('click', function (e) {
        $('.aboutPage').hide()
        $('.homePage').hide()
        $('.contactPage').show()
        $('.projectsPage').hide()

    });
    $('.projects').on('click', function (e) {
        $('.aboutPage').hide()
        $('.homePage').hide()
        $('.contactPage').hide()
        $('.projectsPage').show()

    });

}



function render() {
    $(homeScreen);
    $(navHandler);
}

$(render);