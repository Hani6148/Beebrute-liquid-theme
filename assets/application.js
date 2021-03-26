
$(document).ready(function () {


    var sideMenuIcon = $(".menu-icon")
    var sideMenu = $("#side-bar")
    var listItems = $(".side-list-item")


    myArray = listItems


    //displaying side-menu when clicking the side-menu icon

    sideMenuIcon.on("click", function () {
        console.log(sideMenu[0])
        disp = window.getComputedStyle(sideMenu[0]).visibility
        console.log(disp)

        if (disp == "hidden") {
            sideMenu[0].style.visibility = "visible"
            sideMenu[0].style.transform = "translateX(0%)"
        }

        else {
            sideMenu[0].style.visibility = "hidden"
            sideMenu[0].style.transform = "translateX(-150%)"

        }


    });

    // hiding side-menu when clicking anywhere but inside the side-menu itself
    $("main").on("click", function () {
        sideMenu[0].style.transform = "translateX(-150%)"
        sideMenu[0].style.visibility = "hidden"
    })

    listItems.on("click", function () {
        try {
            console.log(this.children[1])
            subListDisplay = getComputedStyle(this.children[1]).display
            if (subListDisplay == "none") {
                this.children[1].style.display = "block"
            }

            else {

                this.children[1].style.display = "none"
            }
        }
        catch {
            console.log("this element does not have children")
        }

    })


    // displaying underline when hovering over a  menu item

    $(".main-list-item").hover(function () {
        $(this).find(".under-list-item").css("visibility", "visible")
        $(this).find(".under-list-item").css("width", "100%")
    }, function () {
        $(this).find(".under-list-item").css("visibility", "hidden")
        $(this).find(".under-list-item").css("width", "0%")

    })



})

    