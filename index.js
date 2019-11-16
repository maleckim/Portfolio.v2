
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

function projectNavigation(){
    $('.projectList').on('click',function(e) {
        $('.projectList').hide()
        $('figure').show()
        $('.goBack').show()
    })
    $('.goBack').on('click',function(e) {
        $('.projectList').show()
        $('figure').hide()
        $('.goBack').hide()
    })
}    




function render() {
    $(navHandler);
    $(projectNavigation);
}

$(render);