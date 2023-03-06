$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    //Hide and show the header
    var headerHide = new ScrollMagic.Scene({
        triggerElement: "#make-header-disappear",
        triggerHook:0.2
    })
    .setClassToggle("header", "header-hidden")
    .addIndicators({name: "Bye, header"})
    .addTo(controller);

    //Show what people think(sic!)
    var showWhatPeopleThink = new ScrollMagic.Scene({
        triggerElement: ".rect-rounded-beige",
        reverse:false,
        triggerHook:0.7
    })
    .setClassToggle("#what-people-think", "show")
    .addIndicators({name: "show opinios"})
    .addTo(controller);

    //Showing each card on scroll
    $('.recent__card').each(function () {
    
        var showCards = new ScrollMagic.Scene({
            triggerElement: this,
            reverse:false,
            triggerHook:0.7 ,
        })
		.setClassToggle(this, "show")
		.addIndicators({name: "photo"}) // add indicators (requires plugin)
		.addTo(controller);
    })

    //Show Stats
    var showWhatPeopleThink = new ScrollMagic.Scene({
        triggerElement: ".stats__rect",
        reverse:false,
        triggerHook:0.7
    })
    .setClassToggle(".stats__container", "show")
    .addIndicators({name: "show stats"})
    .addTo(controller);

    //Show blog cards from one to another
    let makeVisible = new TimelineMax();
    makeVisible.to(".blogs__card", {
        duration: 1,
        opacity: 1,
        stagger: 0.3
    })

    var showBlogs = new ScrollMagic.Scene({
        triggerElement: ".recent__blogs",
        reverse:false,
        triggerHook:0.5 ,
    })
	.setTween(makeVisible)
	.addIndicators({name: "Yo"})
	.addTo(controller);

    //Recent Projects
    var showRecent = new ScrollMagic.Scene({
        triggerElement: "recent__projects",
        reverse:false,
        triggerHook:0.45
    })
    .setClassToggle(".recent", "show")
    .addIndicators({name: "Yo3"})
    .addTo(controller);
})