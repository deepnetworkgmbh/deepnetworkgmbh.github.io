(function($){

	var createCookie = function (name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	var readCookie = function (name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	var eraseCookie = function (name) {
		createCookie(name,"",-1);
	}

	$(document).ready(function() {
		if (window.JUB_EDIT_BUTTON) {
			$(JUB_EDIT_BUTTON).appendTo('body').on('click', function() {
				createCookie('JUBEDIT_VISITED', 1, 30);
				var url = location.href.split('#')[0];
				url += url.match(/\?/) ? '&jub=edit' : '?jub=edit';
				location.href = url;
				return false;
			});	
		}
		$(window).on('load', function(){
			setTimeout(function() {
				if ($('.jub-edit-btn').length || window.JUB_EDIT_BUTTON) {
					// check if this is the first time visit, add onboarding class
					if (!readCookie('JUBEDIT_VISITED')) {
						$('body').addClass('jub-onboarding');
					}
					$('.jub-edit-btn').on('click', function(){
						createCookie('JUBEDIT_VISITED', 1, 30);
					})
				}
			}, 1000);
		})	
	})
})(jQuery)
