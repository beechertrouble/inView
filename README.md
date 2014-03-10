inView
======

lightweight jQuery plugin to detect if something is in view or not. minified is 261 bytes.


usage :
======
- requires jQuery
- include/require after jQuery 
- attatch to elements on whatever event with optional padding*
	- *padding is for when something is to be considered in-view
	- i.e. so loading can begin before the element is in-view
	- defaults to window height
- returns boolean
- i.e. <code>$(window).on('scroll', function(){ if($('.element').inView(0)) { ... do something ... }});</code>
- note: onscroll runs a lot - probably better to setInterval and whatnot on scroll ...