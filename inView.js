if(!jQuery().inView){
	$.fn.inView=function(c){ // where c = padding above and below the element : i.e. to trigger when slightly off screen :  defaults to window height
		
		var e = false,
			a = $(window);
		
		if(this.length > 0){
		
			var d = this.offset() === null ? 0 : this.offset().top,
				b = d+this.height();
				c = c === undefined ? a.height() : c;
			
			e =((a.scrollTop() + a.height()) + c) >= d && (a.scrollTop() - c) <= b ? true : false;
		}
		return e;
	}
};