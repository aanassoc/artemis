!function(a){a(document).on("click","#btn-drawer",function(){a("#drawer").css("left",0),a("html").addClass("dimmed")}),a(document).on("click","#btn-search",function(){a(this).children().removeClass("fa-search").addClass("fa-times");var s=a(".navbar").position(),e=a(".navbar").height();a("#search").css("top",s.top+e),a("#search input").focus(),a("html").addClass("dark")}),a(document).on("click",".dimmed, .dark",function(s){a(s.target).is("#drawer")||a(s.target).is("#drawer *")||a(s.target).is("#search")||a(s.target).is("#search *")||(a("#drawer").css("left",-290),a("#search").css("top",-200),a("#btn-search").children().removeClass("fa-times").addClass("fa-search"),a("html").removeClass("dimmed"),a("html").removeClass("dark"))})}(jQuery);