var outerHeight = jQuery('header').outerHeight();
jQuery(window).scroll(function() {
if (screen.width > 300){
    if (jQuery(this).scrollTop() > 100){
      jQuery('header').addClass("sticky");
    }else{
      jQuery('header').removeClass("sticky");
    }
  }else{
    jQuery('header').removeClass("sticky");
  }
});

  jQuery(".menu_open").click(function () {
  jQuery(".mobile_menu_wrap").addClass("menu_show");
  jQuery(".menu_overlay").show();
  jQuery("html").addClass("overflow_hidden");
  });
  jQuery(".menu_close, .menu_overlay").click(function () {
  jQuery(".mobile_menu_wrap").removeClass("menu_show");
  jQuery(".menu_overlay").hide();
  jQuery(".mobile_menu_wrap ul li ul").removeClass("show_submenu");
  jQuery("html").removeClass("overflow_hidden");
  });
  jQuery('.mobile_menu_wrap ul li:has(ul)').addClass('hassub');
  jQuery('.mobile_menu_wrap ul li:has(ul)').append('<a href="javascript:;" class="sub_menu_open"><i class="bi bi-chevron-right"></i></a>');
  jQuery('.mobile_menu_wrap ul li ul').append('<li class="back_to_mainmenu"><a href="javascript:;"><i class="bi bi-chevron-left"></i> Back</a></li>');
  jQuery(document).ready(function(){
  jQuery("li.hassub a[href$='#'], li.hassub a[href$='javascript:;'], li.hassub a[href$='javascript::;'], li.hassub a[href$='javascript:void(0);']").addClass("no_link");
  jQuery(".mobile_menu_wrap ul li a.no_link").click(function () {
  jQuery(this).next().addClass("show_submenu");
  });
  });
  jQuery(".back_to_mainmenu").click(function(){
  jQuery(this).parent().removeClass("show_submenu");
  });
  jQuery(".mobile_menu_wrap ul li .sub_menu_open").click(function(){
  jQuery(this).prev("ul").addClass("show_submenu");
  });
  jQuery(".view_services_btn .btn").click(function(){
  jQuery(".help_content_box").slideDown();
  jQuery(".view_services_btn").hide();
  });
  jQuery(".offer_toggle").click(function(){
  jQuery(".offers_popup").addClass("show_offers");
  jQuery("html").addClass("overflow_hidden");
  });
  jQuery(".offer_close").click(function(){
  jQuery(".offers_popup").removeClass("show_offers");
  jQuery("html").removeClass("overflow_hidden");
  });
   if (screen.width > 767) {
                new WOW().init();
            }