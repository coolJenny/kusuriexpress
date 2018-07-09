jQuery(document).ready(function($) {
     // Wrap selects
     $("select").wrap("<div class='select'></div>");
     
	// Highlight any found errors
	$('.text-danger').each(function() {
		var element = $(this).parent().parent();
		
		if (element.hasClass('form-group')) {
			element.addClass('has-error');
		}
	});
	
/*
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && responsive_design == 'yes' && $(window).width() < 768) {
		var i = 0;
		var produkty = [];
		
		$( ".box-product .carousel .item" ).each(function() {
			$( this ).find( ".product-grid .row > div" ).each(function() {
				if(i > 1) {
					produkty.push($(this).html());
				}
				
				i++;
			});
			for ( var s = i-3; s >= 0; s--, s-- ) {
				var html = "<div class='item'><div class='product-grid'><div class='row'>";
				if (produkty[s-1] != undefined) {
					html += "<div class='col-xs-6'>" + produkty[s-1] + "</div>";
				} else {
					html += "<div class='col-xs-6'>" + produkty[s+1] + "</div>";
				}
								
				if (produkty[s] != undefined) {
					html += "<div class='col-xs-6'>" + produkty[s] + "</div>";
				} else {
					html += "<div class='col-xs-6'>" + produkty[s+1] + "</div>";
				}
				html += "</div></div></div>";
				
				$( this ).after( html );
			}
			
			produkty = [];
			i = 0;
		});
	}
*/

	/* Search */
	$('.button-search, .header-type-3 #top .search_form, .header-type-8 .search_form').bind('click', function() {
		url = 'https://www.kusuriexpress.com/index.php?route=product/search';
				 
		var search = $('header input[name=\'search\']').val();
		
		if (search) {
			url += '&search=' + encodeURIComponent(search);
		}
		
		var category_id = $('header select[name=\'category_id\']').val();
		
		if (category_id) {
			url += '&category_id=' + encodeURIComponent(category_id);
		}
		
		location = url;
	});
	
	$('header input[name=\'search\']').bind('keydown', function(e) {
		if (e.keyCode == 13) {
			url = 'https://www.kusuriexpress.com/index.php?route=product/search';
			 
			var search = $('header input[name=\'search\']').val();
			
			if (search) {
				url += '&search=' + encodeURIComponent(search);
			}
			
			location = url;
		}
	});
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
	    	$('.scrollup').fadeIn();
	    } else {
			$('.scrollup').fadeOut();
		}
	}); 
	
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	
	/* Search MegaMenu */
	$('.button-search2').bind('click', function() {
		url = 'https://www.kusuriexpress.com/index.php?route=product/search';
				 
		var search = $('.container-megamenu input[name=\'search2\']').val();
		
		if (search) {
			url += '&search=' + encodeURIComponent(search);
		}
		
		location = url;
	});
	
	$('.container-megamenu input[name=\'search2\']').bind('keydown', function(e) {
		if (e.keyCode == 13) {
			url = 'https://www.kusuriexpress.com/index.php?route=product/search';
			 
			var search = $('.container-megamenu input[name=\'search2\']').val();
			
			if (search) {
				url += '&search=' + encodeURIComponent(search);
			}
			
			location = url;
		}
	});
	
/*	// tooltips on hover
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	
	// Makes tooltips work on ajax generated content
	$(document).ajaxStop(function() {
		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	});
*/

	// toggle for SP
	if( $('body').hasClass('product-search') || $('body[class*=product-category-]').length > 0){
        var element = $('#column-left .dropdown');
	}else if( $('body[class*=product-product-]').length > 0 ){
        var element = $('.Dropdown-Product .dropdown');
	}else{
        var element = $('#column_left .dropdown');
    }
    $(document).on('click', '.dropdown-cat', function(){
    	if (element.length > 0){
	        element.toggleClass('open');
    	    return false;
    	}else{
    		window.location.href = "/";
    	}
    });

//    var box    = $('.container-mobile');
//    var boxTop = box.offset().top;
//    $(window).scroll(function () {
//        if($(window).scrollTop() >= boxTop) {
//            box.addClass('fixed');
//            element.addClass('fixed');
//            if ( $(window).width() <= 768 ) {
//				$('.copyright').css('margin-bottom','70px');
//	        	return false;
//	        }
//        } else {
//            box.removeClass('fixed');
//            element.removeClass('fixed');
//			$('.copyright').css('margin-bottom','0px');
//        	return false;
//        }
//    });
});

function getURLVar(key) {
    var value = [];
    
    var query = String(document.location).split('?');
    
    if (query[1]) {
        var part = query[1].split('&');

        for (i = 0; i < part.length; i++) {
            var data = part[i].split('=');
            
            if (data[0] && data[1]) {
                value[data[0]] = data[1];
            }
        }
        
        if (value[key]) {
            return value[key];
        } else {
            return '';
        }
    }
} 
	
/*
// Cart add remove functions	
var cart = {
	'add': function(product_id, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/add',
			type: 'post',
			data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			success: function(json) {			
				if (json['redirect']) {
					location = json['redirect'];
				}
				
				if (json['success']) {
				     $.notify({
				     	message: json['success'],
				     	target: '_blank'
				     },{
				     	// settings
				     	element: 'body',
				     	position: null,
				     	type: "info",
				     	allow_dismiss: true,
				     	newest_on_top: false,
				     	placement: {
				     		from: "top",
				     		align: "right"
				     	},
				     	offset: 20,
				     	spacing: 10,
				     	z_index: 2031,
				     	delay: 500,
				     	timer: 1000,
				     	url_target: '_blank',
				     	mouse_over: null,
				     	animate: {
				     		enter: 'animated fadeInDown',
				     		exit: 'animated fadeOutUp'
				     	},
				     	onShow: null,
				     	onShown: null,
				     	onClose: null,
				     	onClosed: null,
				     	icon_type: 'class',
				     	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
				     		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;혰</button>' +
				     		'<span data-notify="message"><i class="fa fa-check-circle"></i>&nbsp; {2}</span>' +
				     		'<div class="progress" data-notify="progressbar">' +
				     			'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
				     		'</div>' +
				     		'<a href="{3}" target="{4}" data-notify="url"></a>' +
				     	'</div>' 
				     });
				     					
					$('#cart_block #cart_content').load('index.php?route=common/cart/info #cart_content_ajax');
					$('#cart_block #total_price_ajax').load('index.php?route=common/cart/info #total_price');
					$('#cart_block .cart-count').load('index.php?route=common/cart/info #total_count_ajax');
					$('#cart_block .mini-cart-crosssell').load('index.php?route=common/cart/info #mini-cart-crosssell');
					
					$('#cart_block').addClass('open');
					setInterval(function() {
						$('#cart_block').removeClass('open');
					}, 5000);
				}
			}
		});
	},
	'update': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			success: function(json) {
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart_block #cart_content').load('index.php?route=common/cart/info #cart_content_ajax');
					$('#cart_block #total_price_ajax').load('index.php?route=common/cart/info #total_price');
					$('#cart_block .cart-count').load('index.php?route=common/cart/info #total_count_ajax');
				}			
			}
		});			
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',			
			success: function(json) {
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart_block #cart_content').load('index.php?route=common/cart/info #cart_content_ajax');
					$('#cart_block #total_price_ajax').load('index.php?route=common/cart/info #total_price');
					$('#cart_block .cart-count').load('index.php?route=common/cart/info #total_count_ajax');
				}
			}
		});			
	}
}

var voucher = {
	'add': function() {
		
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},      
			complete: function() {
				$('#cart > button').button('reset');
			},			
			success: function(json) {				
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart_block #cart_content').load('index.php?route=common/cart/info #cart_content_ajax');
					$('#cart_block #total_price_ajax').load('index.php?route=common/cart/info #total_price');
					$('#cart_block .cart-count').load('index.php?route=common/cart/info #total_count_ajax');
				}			
			}
		});	
	}
}

var noticelist = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=account/noticelist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {						
				if (json['success']) { 
					$.notify({
						message: json['success'],
						target: '_blank'
					},{
						// settings
						element: 'body',
						position: null,
						type: "info",
						allow_dismiss: true,
						newest_on_top: false,
						placement: {
							from: "top",
							align: "right"
						},
						offset: 20,
						spacing: 10,
						z_index: 2031,
						delay: 5000,
						timer: 1000,
						url_target: '_blank',
						mouse_over: null,
						animate: {
							enter: 'animated fadeInDown',
							exit: 'animated fadeOutUp'
						},
						onShow: null,
						onShown: null,
						onClose: null,
						onClosed: null,
						icon_type: 'class',
						template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
							'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;혰</button>' +
							'<span data-notify="message"><i class="fa fa-check-circle"></i>&nbsp; {2}</span>' +
							'<div class="progress" data-notify="progressbar">' +
								'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
							'</div>' +
							'<a href="{3}" target="{4}" data-notify="url"></a>' +
						'</div>' 
					});
					console.log( json );
					// alert('test'); 
					// $('#compare-total').html(json['total']);
				}   
			}
		});
	},
	'remove': function() {
	
	}
}

var wishlist = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {							
				if (json['success']) {
					$.notify({
						message: json['success'],
						target: '_blank'
					},{
						// settings
						element: 'body',
						position: null,
						type: "info",
						allow_dismiss: true,
						newest_on_top: false,
						placement: {
							from: "top",
							align: "right"
						},
						offset: 20,
						spacing: 10,
						z_index: 2031,
						delay: 5000,
						timer: 1000,
						url_target: '_blank',
						mouse_over: null,
						animate: {
							enter: 'animated fadeInDown',
							exit: 'animated fadeOutUp'
						},
						onShow: null,
						onShown: null,
						onClose: null,
						onClosed: null,
						icon_type: 'class',
						template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
							'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;혰</button>' +
							'<span data-notify="message"><i class="fa fa-check-circle"></i>&nbsp; {2}</span>' +
							'<div class="progress" data-notify="progressbar">' +
								'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
							'</div>' +
							'<a href="{3}" target="{4}" data-notify="url"></a>' +
						'</div>' 
					});
				}   
				
				if (json['info']) {
					$.notify({
						message: json['info'],
						target: '_blank'
					},{
						// settings
						element: 'body',
						position: null,
						type: "info",
						allow_dismiss: true,
						newest_on_top: false,
						placement: {
							from: "top",
							align: "right"
						},
						offset: 20,
						spacing: 10,
						z_index: 2031,
						delay: 5000,
						timer: 1000,
						url_target: '_blank',
						mouse_over: null,
						animate: {
							enter: 'animated fadeInDown',
							exit: 'animated fadeOutUp'
						},
						onShow: null,
						onShown: null,
						onClose: null,
						onClosed: null,
						icon_type: 'class',
						template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-info" role="alert">' +
							'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;혰</button>' +
							'<span data-notify="message"><i class="fa fa-info"></i>&nbsp; {2}</span>' +
							'<div class="progress" data-notify="progressbar">' +
								'<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
							'</div>' +
							'<a href="{3}" target="{4}" data-notify="url"></a>' +
						'</div>' 
					});
				}   
				
				$('#wishlist-total').html(json['total']);
			}
		});
	},
	'remove': function() {
	
	}
}

var compare = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=product/compare/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {							
				if (json['success']) {
					$.notify({
						message: json['success'],
						target: '_blank'
					},{
						// settings
						element: 'body',
						position: null,
						type: "info",
						allow_dismiss: true,
						newest_on_top: false,
						placement: {
							from: "top",
							align: "right"
						},
						offset: 20,
						spacing: 10,
						z_index: 2031,
						delay: 5000,
						timer: 1000,
						url_target: '_blank',
						mouse_over: null,
						animate: {
							enter: 'animated fadeInDown',
							exit: 'animated fadeOutUp'
						},
						onShow: null,
						onShown: null,
						onClose: null,
						onClosed: null,
						icon_type: 'class',
						template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
							'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;혰</button>' +
							'<span data-notify="message"><i class="fa fa-check-circle"></i>&nbsp; {2}</span>' +
							'<div class="progress" data-notify="progressbar">' +
								'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
							'</div>' +
							'<a href="{3}" target="{4}" data-notify="url"></a>' +
						'</div>' 
					});
					
					$('#compare-total').html(json['total']);
				}   
			}
		});
	},
	'remove': function() {
	
	}
}
*/

/* Agree to Terms */
/*
jQuery(document).delegate('.agree', 'click', function(e) {
	e.preventDefault();
	
	$('#modal-agree').remove(); 
	
	var element = this;
	
    $.ajax({
        url: $(element).attr('href'),
        type: 'get',
        dataType: 'html',
        success: function(data) {
			html  = '<div id="modal-agree" class="modal fade">';
			html += '  <div class="modal-dialog">';
			html += '    <div class="modal-content">';
			html += '      <div class="modal-header">'; 
			html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
			html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
			html += '      </div>';
			html += '      <div class="modal-body">' + data + '</div>';
			html += '    </div';
			html += '  </div>';
			html += '</div>';
			
			$('body').append(html);
			
			$('#modal-agree').modal('show');
        }
    });
});
*/

/* Autocomplete */
/*
(function($) {
	function Autocomplete(element, options) {
		this.element = element;
		this.options = options;
		this.timer = null;
		this.items = new Array();

		$(element).attr('autocomplete', 'off');
		$(element).on('focus', $.proxy(this.focus, this));
		$(element).on('blur', $.proxy(this.blur, this));
		$(element).on('keydown', $.proxy(this.keydown, this));

		$(element).after('<ul class="dropdown-menu"></ul>');
		$(element).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));
	}

	Autocomplete.prototype = {
		focus: function() {
			this.request();
		},
		blur: function() {
			setTimeout(function(object) {
				object.hide();
			}, 200, this);
		},
		click: function(event) {
			event.preventDefault();

			value = $(event.target).parent().attr('data-value');

			if (value && this.items[value]) {
				this.options.select(this.items[value]);
			}
		},
		keydown: function(event) {
			switch(event.keyCode) {
				case 27: // escape
					this.hide();
					break;
				default:
					this.request();
					break;
			}
		},
		show: function() {
			var pos = $(this.element).position();

			$(this.element).siblings('ul.dropdown-menu').css({
				top: pos.top + $(this.element).outerHeight(),
				left: pos.left
			});

			$(this.element).siblings('ul.dropdown-menu').show();
			$(this).siblings('ul.dropdown-menu').css("opacity", "1");
			$(this).siblings('ul.dropdown-menu').css("visibility", "visible");
		},
		hide: function() {
			$(this.element).siblings('ul.dropdown-menu').hide();
		},
		request: function() {
			clearTimeout(this.timer);

			this.timer = setTimeout(function(object) {
				object.options.source($(object.element).val(), $.proxy(object.response, object));
			}, 200, this);
		},
		response: function(json) {
			html = '';

			if (json.length) {
				for (i = 0; i < json.length; i++) {
					this.items[json[i]['value']] = json[i];
				}

				for (i = 0; i < json.length; i++) {
					if (!json[i]['category']) {
						html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
					}
				}

				// Get all the ones with a categories
				var category = new Array();

				for (i = 0; i < json.length; i++) {
					if (json[i]['category']) {
						if (!category[json[i]['category']]) {
							category[json[i]['category']] = new Array();
							category[json[i]['category']]['name'] = json[i]['category'];
							category[json[i]['category']]['item'] = new Array();
						}

						category[json[i]['category']]['item'].push(json[i]);
					}
				}

				for (i in category) {
					html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

					for (j = 0; j < category[i]['item'].length; j++) {
						html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
					}
				}
			}

			if (html) {
				this.show();
			} else {
				this.hide();
			}

			$(this.element).siblings('ul.dropdown-menu').html(html);
		}
	};

	$.fn.autocomplete = function(option) {
		return this.each(function() {
			var data = $(this).data('autocomplete');

			if (!data) {
				data = new Autocomplete(this, option);

				$(this).data('autocomplete', data);
			}
		});
	}
})(window.jQuery);

function openPopup(module_id, product_id) {
     product_id = product_id || undefined;
     $.magnificPopup.open({
          items: {
               src: 'index.php?route=module/popup/show&module_id=' + module_id + (product_id ? '&product_id=' + product_id : '')
          },
          mainClass: 'popup-module mfp-with-zoom',
          type: 'ajax',
          removalDelay: 200
     });
}
*/

// Hardcode of the mobile index.php

//$(document).ready(function () {
jQuery(window).on('load resize', function($){
    // PC VIEW
    if(!jQuery('body').hasClass('common-home') || jQuery(window).width() > 768) {
        // First time to change layout from SP to PC
        if(jQuery('.add-sp')[0]) layoutforPC();
    // SP VIEW
    }else{
        // First time to change layout from PC to SP
        if(!jQuery('.add-sp')[0]) layoutforSP();
    }
});

function layoutforSP() {
    var $imgResponsive = jQuery('.image-responsive'),
        imgpath = "/catalog/view/theme/fastor/img/custom/";

    jQuery('#header-right')
        .prepend('<a href="https://www.kusuriexpress.com/index.php?route=account/account" class="my-account add-sp"><i class="fa fa-user"></i><span>ログイン</span></a>')
        .prepend('<a href="https://www.kusuriexpress.com/index.php?route=checkout/cart" class="my-cart add-sp"><i class="fa fa-shopping-cart cart-icon"></i><span>カート</span></a>');

    jQuery('.container-mobile')
        .append('<div class="col-xs-2 add-sp"><a href="/"><i class="fa fa-home"></i><span>QAホーム</span></button></div>')
        .append('<div class="col-xs-2 add-sp"><a href="https://www.kusuriexpress.com/プレミアムレビュー"><i class="fa fa-commenting-o"></i><span>お客様の声</span></a></div>')
        .append('<div class="col-xs-2 add-sp"><a href="https://www.kusuriexpress.com/#news_bar"><i class="fa fa-bullhorn"></i><span>お知らせ</span></a></div>')
        .append('<div class="col-xs-2 add-sp"><a href="https://www.kusuriexpress.com/pages/売れ筋ランキング"><i class="fa fa-line-chart"></i><span>ランキング</span></a></div>')
        .append('<div class="col-xs-2 add-sp"><a href="https://www.kusuriexpress.com/index.php?route=information/contact"><i class="fa fa-envelope-o"></i><span>お問合せ</span></a></div>');

    jQuery('.custom-footer.full-width')
        .prepend('<div id="category-mobile-id" class="add-sp"></div>');

    if( jQuery('body').hasClass('product-search') || jQuery('body[class*=product-category-]').length > 0){
        var $preheaderGrid = $('.main-content > .background > .pattern > .container > .row:nth-child(2)');
        jQuery('.container-mobile')
            .append($preheaderGrid.find('#column_left'));
        jQuery('#column_left .dropdown')
            .append('<div class="col-xs-12 text-right add-sp"><i class="fa fa-window-close"></i> 閉じる</div>');
    }else if( jQuery('body[class*=product-product-]').length > 0 ){
        var $preheaderGrid = jQuery('#slider > .background > .pattern');
        jQuery('.container-mobile')
            .append($preheaderGrid.find('.Dropdown-Product'));
        jQuery('.Dropdown-Product .dropdown')
            .append('<div class="col-xs-12 text-right add-sp"><i class="fa fa-window-close"></i> 閉じる</div>');
    }else{
        var $preheaderGrid = jQuery('.main-content > .background > .pattern > .container > .row:nth-child(2)');
        jQuery('.container-mobile')
            .append($preheaderGrid.find('#column_left'));
        jQuery('#column_left .dropdown')
            .append('<div class="col-xs-12 text-right add-sp"><i class="fa fa-window-close"></i> 閉じる</div>');
    }

    jQuery('header .logo img').each(function(){
//        $(this).attr("src",$(this).attr("src").replace('.png', '_sp.png'));
    });
    var header_right = jQuery('#header-right').css('display');
    if(header_right == 'block') SetButtonText();
}

function layoutforPC() {
    var $headerRight = jQuery('#header-right'),
        $imgResponsive = jQuery('.image-responsive');

    jQuery('.my-account').css('display','inline-block');

    $headerRight.children().show();
    jQuery('.add-sp').remove();

    $imgResponsive.show();

    if( jQuery('body').hasClass('product-search') || jQuery('body[class*=product-category-]').length > 0){
        var $preheaderGrid = jQuery('.container-mobile');
        jQuery('.main-content > .background > .pattern > .container > .row:nth-child(2)')
            .prepend($preheaderGrid.find('#column_left'));
    }else if( jQuery('body[class*=product-product-]').length > 0 ){
        var $preheaderGrid = jQuery('.container-mobile');
        jQuery('#slider > .background > .pattern')
            .append($preheaderGrid.find('.Dropdown-Product'));
    }else{
        var $preheaderGrid = jQuery('.container-mobile');
        jQuery('.main-content > .background > .pattern > .container > .row:nth-child(2)')
            .prepend($preheaderGrid.find('#column_left'));
    }

    jQuery('header .logo img').each(function(){
//        $(this).attr("src",$(this).attr("src").replace('_sp.png', '.png'));
    });
}