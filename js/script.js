$(function () {
	$(".nav> li>a").click(function () {
		$(this).next(".sub").slideToggle();
	});
});
$(function () {
	$(".sub>li>a").click(function () {
		$(".sub>li>a").css({ "background": "none" });
		$(this).css({ "background": "#c7edff" });
		$(".sub>li>a").css({ "font-weight": "normal" });
		$(this).css({ "font-weight": "bold" });
	})
})

$(function () {
	$(".notice>ul>li").click(function () {
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
	});
});
$(function () {
	$(".notice>ul>li").click(function () {
		$(this).toggleClass("turn");

		if ($(this).hasClass("turn") === true) {
			$(this).siblings().removeClass("turn");

		}

	});
});


$(function () {
	$(".mobile_lnb> ul> li").click(function () {
		$(this).find(".mobile_info").slideToggle();
	});
});

$(function () {
	$(".mobile_lnb> ul> li").click(function () {
		$(this).toggleClass("turn2");

		if ($(this).hasClass("turn2") === true) {
			$(this).siblings().removeClass("turn2");

		}

	});
});
