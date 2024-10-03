/** v 2.0.0 */

(function (window, document, $, mslistordersConfig) {

	var mslistorders = mslistorders || {};


	mslistorders.setup = function () {
		mslistorders.Orders.list = '#mslistorders';
		mslistorders.Orders.form = '.mslistorders-form';
		mslistorders.Orders.output = '.mslistorder-output';
		mslistorders.Orders.submit = '[type="submit"], [type="button"]';

	};


	mslistorders.initialize = function () {

		mslistorders.setup();

		/*if (!jQuery().modal) {
			document.writeln('<style data-compiled-css>@import url(' + mslistordersConfig.assetsUrl + 'vendor/bs3modal/dist/css/bootstrap-modal.css); </style>');
			document.writeln('<script src="' + mslistordersConfig.assetsUrl + 'vendor/bs3modal/dist/js/bootstrap-modal.js"><\/script>');
		}
		if (typeof window['dataConfirmModal'] != 'object') {
			document.writeln('<script src="' + mslistordersConfig.assetsUrl + 'vendor/bs3modal/dist/js/data-confirm-modal.js"><\/script>');
		}
		document.writeln('<style data-compiled-css>@import url(' + mslistordersConfig.assetsUrl + 'vendor/fontawesome/css/font-awesome.min.css); </style>');*/

		$(document).on('submit', mslistorders.Orders.form, function (e) {
			mslistorders.Orders.setAction(this, $(this).find(mslistorders.Orders.submit)[0]);

			e.preventDefault();
			return false;
		});

	};


	mslistorders.Orders = {
		setAction: function (form, button, modal) {
			var action = 'order/' + $(button).prop('value');
			var confirm = mslistordersConfig.confirm[action];

			switch (action) {
				case 'order/repeat':
				case 'order/cart':
				case 'order/pay':
				case 'order/cancel':
					if (typeof modal == "undefined") {
						modal = true;
					}
					break;
				case 'order/close':
					$(mslistorders.Orders.output).html('');
					return true;
					break;
				default:
					modal = false;
					break;
			}

			if (modal) {
				mslistorders.Confirm.modal(form, button, confirm);
				return false;
			}

			var formData = new FormData($(form)[0]);
			formData.append('action', action);
			formData.append('ctx', mslistordersConfig.ctx);

			$.ajax({
				type: 'POST',
				url: mslistordersConfig.actionUrl,
				dataType: 'json',
				data: formData,
				async: true,
				contentType: false,
				processData: false,
				beforeSend: function () {
					$(form).find(mslistorders.Orders.submit).attr('disabled', 'disabled');
					return true;
				},
				success: function (response) {
					if (response.success) {
						$(form).find(mslistorders.Orders.submit).removeAttr('disabled');

						if (response.message) {
							miniShop2.Message.success(response.message);
						}

						if (response.object.output) {
							$(mslistorders.Orders.output).html(response.object.output);
						}

						if (response.object.cart) {
							miniShop2.Cart.status(response.object.cart);
						}

						if (response.object.redirect) {
							document.location.href = response.object.redirect;
						}

					} else {
						miniShop2.Message.error(response.message);
					}
				}
			}).done(function (answer) {

			}).fail(function (jqXHR, textStatus, errorThrown) {

			});

		}

	};


	mslistorders.Confirm = {
		modal: function (form, button, confirm) {
		    UIkit.modal.confirm(confirm || mslistordersConfig.confirm.default, function () {
				mslistorders.Orders.setAction(form, button, false);
				return true;
			}, function () {
				return false;
			});
			/*dataConfirmModal.confirm({
				text: confirm || mslistordersConfig.confirm.default,
				title: mslistordersConfig.confirm.title,
				commit: mslistordersConfig.confirm.commit,
				cancel: mslistordersConfig.confirm.cancel,
				onConfirm: function () {
					mslistorders.Orders.setAction(form, button, false);
					return true;
				},
				onCancel: function () {
					return false;
				}
			});*/
		}
	};


	$(document).ready(function ($) {

	});

	mslistorders.initialize();
	window.mslistorders = mslistorders;

})(window, document, jQuery, mslistordersConfig);
