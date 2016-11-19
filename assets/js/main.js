/**
 * Created by chaOS on 19.11.16.
 */
$(document).ready(function(){
    $("section.menu h3").click(function(){
        $("ul#left_menu").fadeToggle(1000);
    });
});