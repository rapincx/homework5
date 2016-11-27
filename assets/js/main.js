/**
 * Created by chaOS on 19.11.16.
 */
$(document).ready(function(){
    $("section.menu h3").click(function(){
        $("ul#left_menu").slideToggle(500);
    });
    var panel = $(".auth-panel");
    $('.tabs ul').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('body').find('div.main').removeClass('active').eq($(this).index()).addClass('active');
    });
    panel.on('click', '.reg', function() {
        $(this).toggleClass("link").siblings().removeClass("link").closest("header").find(".auth-panel").toggleClass("active").closest("header").find(".registration").slideToggle();
    });
    panel.on('click', '.autht', function() {
        $(this).toggleClass("link").siblings().removeClass("link").closest("header").find(".auth-panel").toggleClass("active").closest("header").find(".auth").slideToggle();
    });
});