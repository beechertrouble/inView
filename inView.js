if(!jQuery().inView){
	
	var W = $(window);
	
	$.fn.inView=function(p){ 
		
		var el = this,
			r = false;
			
		if(el.length > 0 && el.is(":visible")){
		
			var t = el.offset() === null ? 0 : el.offset().top, // top of the $el
				b = t+el.height(); // bottom of the $el
			
			p = p === undefined ? W.height() : p; // padding for viewport, to consider things in view, default to 1 viewport height
			
			r = ((W.scrollTop() + W.height()) + p) >= t && (W.scrollTop() - p) <= b ? true : false;
		}
		
		return r;
	}
};