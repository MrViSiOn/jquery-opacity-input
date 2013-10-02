/*
jQuery Opacity Input Form Plugin
Version 0.1
Author: Daniel Ruiz
*/
$.fn.opacityinput = function(options) {
	options = $.extend({}, $.fn.opacityinput.defaults, options);

	return this.each(function() {
		element = $(this);
		if(element.data('opacityinputdata') == undefined){
			element.css('z-index', 600);
			element.css('background-color', 'transparent');
			element.parent().css('background-color', 'transparent');

			var id = "t"+new Date().getTime();
			var $div = $("<div id='"+id+"' class='overlay_input'/>");
			element.data('opacityinputdata', id);

			$div.css({
				"position": "absolute",
				"opacity": options.opacity,
				"background-color": options.bacgroundColor,
				"width" : element.width(),
				"height" : element.height()+parseFloat(element.css("padding-top"))+parseFloat(element.css("padding-bottom")),
				"z-index": 599
			});
			$div.appendTo(element.parent());
			$div.position({
			  my: "left top",
			  at: "left top",
			  of: element
			});
			element.position({
			  my: "left top",
			  at: "left top",
			  of: $div
			});
		}else{
			var $div = $('#'+element.data('opacityinputdata'));
			$div.position({
			  my: "left top",
			  at: "left top",
			  of: element
			});
			$div.css({
				"width" : element.width(),
				"height" :element.height()+parseFloat(element.css("padding-top"))+parseFloat(element.css("padding-bottom"))
			});
			if(element.attr('type') == "file"){
				element.css('opacity', 0);
				if($div.data('url') == undefined){
					$div.html(element.attr('placeholder'));
					$div.data('url', '');
				}
				$div.css('font-size', '16px');
				$div.css('padding-left', '3px');

				element.on("change", function(){
					if($div.data('url') != $(this).val()){
						var t = $(this).val().split("/").pop();
						t = $(this).val().split("\\").pop();
						$div.html(t);
						$div.data('url', $(this).val());
					}
				});
			}
		}
	})
}
$.fn.opacityinput.defaults = {
	opacity: 0.5,
	bacgroundColor: "black"
}
