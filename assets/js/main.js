!function(s){s(document).on("click","#btn-drawer",function(){s("#drawer").css("left",0),s("html").addClass("dimmed")}),s(document).on("click","#btn-search",function(){if(s("#search").hasClass("open"))s(this).children().removeClass("fa-times").addClass("fa-search"),s("#search").css("top",-200),s("#search").removeClass("open");else{s(this).children().removeClass("fa-search").addClass("fa-times");var e=s(".navbar").position(),a=s(".navbar").height();s("#search").css("top",e.top+a),s("#search").addClass("open"),s("#search input").focus()}}),s(document).on("click",".dimmed",function(e){s(e.target).is("#drawer")||s(e.target).is("#drawer *")||(s("#drawer").css("left",-290),s("html").removeClass("dimmed"))})}(jQuery);