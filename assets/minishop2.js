(function (window, document, $, miniShop2Config) {
    var miniShop2 = miniShop2 || {};
    miniShop2Config.callbacksObjectTemplate = function () {
        return {
            // return false to prevent send data
            before: [],
            response: {
                success: [],
                error: []
            },
            ajax: {
                done: [],
                fail: [],
                always: []
            }
        }
    };
    miniShop2.Callbacks = miniShop2Config.Callbacks = {
        Cart: {
            add: miniShop2Config.callbacksObjectTemplate(),
            remove: miniShop2Config.callbacksObjectTemplate(),
            change: miniShop2Config.callbacksObjectTemplate(),
            clean: miniShop2Config.callbacksObjectTemplate()
        },
        Order: {
            add: miniShop2Config.callbacksObjectTemplate(),
            getcost: miniShop2Config.callbacksObjectTemplate(),
            clean: miniShop2Config.callbacksObjectTemplate(),
            submit: miniShop2Config.callbacksObjectTemplate(),
            getrequired: miniShop2Config.callbacksObjectTemplate()
        },
    };
    miniShop2.Callbacks.add = function (path, name, func) {
        if (typeof func != 'function') {
            return false;
        }
        path = path.split('.');
        var obj = miniShop2.Callbacks;
        for (var i = 0; i < path.length; i++) {
            if (obj[path[i]] == undefined) {
                return false;
            }
            obj = obj[path[i]];
        }
        if (typeof obj != 'object') {
            obj = [obj];
        }
        if (name != undefined) {
            obj[name] = func;
        }
        else {
            obj.push(func);
        }
        return true;
    };
    miniShop2.Callbacks.remove = function (path, name) {
        path = path.split('.');
        var obj = miniShop2.Callbacks;
        for (var i = 0; i < path.length; i++) {
            if (obj[path[i]] == undefined) {
                return false;
            }
            obj = obj[path[i]];
        }
        if (obj[name] != undefined) {
            delete obj[name];
            return true;
        }
        return false;
    };
    miniShop2.ajaxProgress = false;
    miniShop2.setup = function () {
        // selectors & $objects
        this.actionName = 'ms2_action';
        this.action = ':submit[name=' + this.actionName + ']';
        this.form = '.ms2_form';
        this.$doc = $(document);

        this.sendData = {
            $form: null,
            action: null,
            formData: null
        };
    };
    miniShop2.initialize = function () {
        miniShop2.setup();
        // Indicator of active ajax request

        //noinspection JSUnresolvedFunction
        miniShop2.$doc
            .ajaxStart(function () {
                miniShop2.ajaxProgress = true;
            })
            .ajaxStop(function () {
                miniShop2.ajaxProgress = false;
            })
            .on('submit', miniShop2.form, function (e) {
                e.preventDefault();
                var $form = $(this);
                var action = $form.find(miniShop2.action).val();

                if (action) {
                    var formData = $form.serializeArray();
                    formData.push({
                        name: miniShop2.actionName,
                        value: action
                    });
                    miniShop2.sendData = {
                        $form: $form,
                        action: action,
                        formData: formData
                    };
                    miniShop2.controller();
                }
            });
        miniShop2.Cart.initialize();
        miniShop2.Message.initialize();
        miniShop2.Order.initialize();
        miniShop2.Gallery.initialize();
    };
    miniShop2.controller = function () {
        var self = this;
        switch (self.sendData.action) {
            case 'cart/add':
                miniShop2.Cart.add();
                break;
            case 'cart/remove':
                miniShop2.Cart.remove();
                break;
            case 'cart/change':
                miniShop2.Cart.change();
                break;
            case 'cart/clean':
                miniShop2.Cart.clean();
                break;
            case 'order/submit':
                miniShop2.Order.submit();
                break;
            case 'order/clean':
                miniShop2.Order.clean();
                break;
            default:
                return;
        }
    };
    miniShop2.send = function (data, callbacks, userCallbacks) {
        var runCallback = function (callback, bind) {
            if (typeof callback == 'function') {
                return callback.apply(bind, Array.prototype.slice.call(arguments, 2));
            }
            else if (typeof callback == 'object') {
                for (var i in callback) {
                    if (callback.hasOwnProperty(i)) {
                        var response = callback[i].apply(bind, Array.prototype.slice.call(arguments, 2));
                        if (response === false) {
                            return false;
                        }
                    }
                }
            }
            return true;
        };
        // set context
        if ($.isArray(data)) {
            data.push({
                name: 'ctx',
                value: miniShop2Config.ctx
            });
        }
        else if ($.isPlainObject(data)) {
            data.ctx = miniShop2Config.ctx;
        }
        else if (typeof data == 'string') {
            data += '&ctx=' + miniShop2Config.ctx;
        }

        // set action url
        var formActionUrl = (miniShop2.sendData.$form)
            ? miniShop2.sendData.$form.attr('action')
            : false;
        var url = (formActionUrl)
            ? formActionUrl
            : (miniShop2Config.actionUrl)
                      ? miniShop2Config.actionUrl
                      : document.location.href;
        // set request method
        var formMethod = (miniShop2.sendData.$form)
            ? miniShop2.sendData.$form.attr('method')
            : false;
        var method = (formMethod)
            ? formMethod
            : 'post';

        // callback before
        if (runCallback(callbacks.before) === false || runCallback(userCallbacks.before) === false) {
            return;
        }
        // send
        var xhr = function (callbacks, userCallbacks) {
            return $[method](url, data, function (response) {
                if (response.success) {
                    if (response.message) {
                        miniShop2.Message.success(response.message);
                    }
                    runCallback(callbacks.response.success, miniShop2, response);
                    runCallback(userCallbacks.response.success, miniShop2, response);
                }
                else {
                    miniShop2.Message.error(response.message);
                    runCallback(callbacks.response.error, miniShop2, response);
                    runCallback(userCallbacks.response.error, miniShop2, response);
                }
            }, 'json').done(function () {
                runCallback(callbacks.ajax.done, miniShop2, xhr);
                runCallback(userCallbacks.ajax.done, miniShop2, xhr);
            }).fail(function () {
                runCallback(callbacks.ajax.fail, miniShop2, xhr);
                runCallback(userCallbacks.ajax.fail, miniShop2, xhr);
            }).always(function () {
                runCallback(callbacks.ajax.always, miniShop2, xhr);
                runCallback(userCallbacks.ajax.always, miniShop2, xhr);
            });
        }(callbacks, userCallbacks);
    };

    miniShop2.Cart = {
        callbacks: {
            add: miniShop2Config.callbacksObjectTemplate(),
            remove: miniShop2Config.callbacksObjectTemplate(),
            change: miniShop2Config.callbacksObjectTemplate(),
            clean: miniShop2Config.callbacksObjectTemplate()
        },
        setup: function () {
            miniShop2.Cart.cart = '#msCart';
            miniShop2.Cart.miniCart = '#msMiniCart';
            miniShop2.Cart.miniCartNotEmptyClass = 'full';
            miniShop2.Cart.countInput = 'input[name=count]';
            miniShop2.Cart.totalWeight = '.ms2_total_weight';
            miniShop2.Cart.totalCount = '.ms2_total_count';
            miniShop2.Cart.totalCost = '.ms2_total_cost';
        },
        initialize: function () {
            miniShop2.Cart.setup();
            if (!$(miniShop2.Cart.cart).length) {
                return;
            }
            miniShop2.$doc.on('change', miniShop2.Cart.cart + ' ' + miniShop2.Cart.countInput, function () {
                $(this).closest(miniShop2.form).submit();
            });
        },
        add: function () {
            var callbacks = miniShop2.Cart.callbacks;
            callbacks.add.response.success = function (response) {
                this.Cart.status(response.data);
            };
            miniShop2.send(miniShop2.sendData.formData, miniShop2.Cart.callbacks.add, miniShop2.Callbacks.Cart.add);
        },
        remove: function () {
            var callbacks = miniShop2.Cart.callbacks;
            callbacks.remove.response.success = function (response) {
                this.Cart.remove_position(miniShop2.Utils.getValueFromSerializedArray('key'));
                this.Cart.status(response.data);
            };
            miniShop2.send(miniShop2.sendData.formData, miniShop2.Cart.callbacks.remove, miniShop2.Callbacks.Cart.remove);
        },
        change: function () {
            var callbacks = miniShop2.Cart.callbacks;
            callbacks.change.response.success = function (response) {
                if (typeof(response.data.key) == 'undefined') {
                    this.Cart.remove_position(miniShop2.Utils.getValueFromSerializedArray('key'));
                }
                else {
                    $('#' + miniShop2.Utils.getValueFromSerializedArray('key')).find('');
                }
                this.Cart.status(response.data);
            };
            miniShop2.send(miniShop2.sendData.formData, miniShop2.Cart.callbacks.change, miniShop2.Callbacks.Cart.change);
        },
        status: function (status) {
            if (status['total_count'] < 1) {
                location.reload();
            }
            else {
                //var $cart = $(miniShop2.Cart.cart);
                var $miniCart = $(miniShop2.Cart.miniCart);
                if (status['total_count'] > 0 && !$miniCart.hasClass(miniShop2.Cart.miniCartNotEmptyClass)) {
                    $miniCart.addClass(miniShop2.Cart.miniCartNotEmptyClass);
                }
                $(miniShop2.Cart.totalWeight).text(miniShop2.Utils.formatWeight(status['total_weight']));
                $(miniShop2.Cart.totalCount).text(status['total_count']);
                $(miniShop2.Cart.totalCost).text(miniShop2.Utils.formatPrice(status['total_cost']));
                if ($(miniShop2.Order.orderCost, miniShop2.Order.order).length) {
                    miniShop2.Order.getcost();
                }
            }
        },
        clean: function () {
            var callbacks = miniShop2.Cart.callbacks;
            callbacks.clean.response.success = function (response) {
                this.Cart.status(response.data);
            };
            miniShop2.send(miniShop2.sendData.formData, miniShop2.Cart.callbacks.clean, miniShop2.Callbacks.Cart.clean);
        },
        remove_position: function (key) {
            $('#' + key).remove();
        }
    };

    miniShop2.Gallery = {
        setup: function () {
            miniShop2.Gallery.gallery = $('#msGallery');
            miniShop2.Gallery.files = miniShop2.Gallery.gallery.find('.fotorama');
        },
        initialize: function () {
            miniShop2.Gallery.setup();
            if (miniShop2.Gallery.files.length) {
                $('<link/>', {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: miniShop2Config.cssUrl + 'lib/fotorama.min.css',
                }).appendTo('head');
                $('<script/>', {
                    type: 'text/javascript',
                    src: miniShop2Config.jsUrl + 'lib/fotorama.min.js',
                }).appendTo('head');
            }
        }
    };

    miniShop2.Order = {
        callbacks: {
            add: miniShop2Config.callbacksObjectTemplate(),
            getcost: miniShop2Config.callbacksObjectTemplate(),
            clean: miniShop2Config.callbacksObjectTemplate(),
            submit: miniShop2Config.callbacksObjectTemplate(),
            getrequired: miniShop2Config.callbacksObjectTemplate()
        },
        setup: function () {
            miniShop2.Order.order = '#msOrder';
            miniShop2.Order.deliveries = '#deliveries';
            miniShop2.Order.payments = '#payments';
            miniShop2.Order.deliveryInput = 'input[name="delivery"]';
            miniShop2.Order.countryInput = 'input[name="country"]';
            miniShop2.Order.inputParent = '.input-parent';
            miniShop2.Order.paymentInput = 'input[name="payment"]';
            miniShop2.Order.paymentInputUniquePrefix = 'input#payment_';
            miniShop2.Order.deliveryInputUniquePrefix = 'input#delivery_';
            miniShop2.Order.countryInputUniquePrefix = 'input#country_';
            miniShop2.Order.orderCost = '#ms2_order_cost'
        },
        initialize: function () {
            miniShop2.Order.setup();
            if ($(miniShop2.Order.order).length) {
                miniShop2.$doc
                    .on('click', miniShop2.Order.order + ' [name="' + miniShop2.actionName + '"][value="order/clean"]', function (e) {
                        miniShop2.Order.clean();
                        e.preventDefault();
                    })
                    .on('change', miniShop2.Order.order + ' input,' + miniShop2.Order.order + ' textarea', function () {
                        var $this = $(this);
                        var key = $this.attr('name');
                        var type = $this.attr('type');
                        var value = $this.val();
                        if (type == 'checkbox') {
                            var checkboxes = document.querySelectorAll('input[name=' + key + ']:checked');
                            var values = [];
                            for (var i = 0; i < checkboxes.length; ++i) {
                                values.push(checkboxes[i].value);
                            }
                            value = values.join('||');
                        }
                        miniShop2.Order.add(key, value);
                    });
                var $countryInputChecked = $(miniShop2.Order.countryInput + ':checked', miniShop2.Order.order);
                $countryInputChecked.trigger('change');
                miniShop2.Order.updateDeliveries($countryInputChecked.data('deliveries'));
                var $deliveryInputChecked = $(miniShop2.Order.deliveryInput + ':checked', miniShop2.Order.order);
                $deliveryInputChecked.trigger('change');
                miniShop2.Order.updatePayments($deliveryInputChecked.data('payments'));
            }
        },
        updatePayments: function (payments) {
            var $paymentInputs = $(miniShop2.Order.paymentInput, miniShop2.Order.order);
            $paymentInputs.attr('disabled', true).prop('disabled', true).closest(miniShop2.Order.inputParent).hide();
            if (payments.length > 0) {
                for (var i in payments) {
                    if (payments.hasOwnProperty(i)) {
                        $paymentInputs.filter(miniShop2.Order.paymentInputUniquePrefix + payments[i]).attr('disabled', false).prop('disabled', false).closest(miniShop2.Order.inputParent).show();
                    }
                }
            }
            if ($paymentInputs.filter(':visible:checked').length == 0) {
                $paymentInputs.filter(':visible:first').trigger('click');
            }
        },
        updateDeliveries: function (deliveries) {
            var $deliveryInputs = $(miniShop2.Order.deliveryInput, miniShop2.Order.order);
            $deliveryInputs.attr('disabled', true).prop('disabled', true).closest(miniShop2.Order.inputParent).hide();
            if (deliveries.length > 0) {
                for (var i in deliveries) {
                    if (deliveries.hasOwnProperty(i)) {
                        $deliveryInputs.filter(miniShop2.Order.deliveryInputUniquePrefix + deliveries[i]).attr('disabled', false).prop('disabled', false).closest(miniShop2.Order.inputParent).show();
                    }
                }
            }
            if ($deliveryInputs.filter(':visible:checked').length == 0) {
                $deliveryInputs.filter(':visible:first').trigger('click');
            }
        },
        add: function (key, value) {
            // var callbacks = miniShop2.Order.callbacks;
            var callbacks = {
                ajax: {
                    always: [],
                    done: [],
                    fail: []
                },
                before: [],
                response: {
                    error: [],
                    success: []
                }
            };
            var old_value = value;
            callbacks.response.success = function (response) {
                (function (key, value, old_value) {
                    var $field = $('[name="' + key + '"]', miniShop2.Order.order)
                        type = $field.attr('type');
                        
                    switch (key) {
                        case 'delivery':
                            $field = $(miniShop2.Order.deliveryInputUniquePrefix + response.data[key]);
                            if (response.data[key] != old_value) {
                                $field.trigger('click');
                            }
                            else {
                                miniShop2.Order.getrequired(value);
                                miniShop2.Order.updatePayments($field.data('payments'));
                                miniShop2.Order.getcost();
                            }
                            break;
                        case 'country':
                            $field = $(miniShop2.Order.countryInputUniquePrefix + response.data[key]);
                            if (response.data[key] != old_value) {
                                $field.trigger('click');
                            }
                            else {
                                // miniShop2.Order.updatePayments($field.data('payments'));
                                miniShop2.Order.updateDeliveries($field.data('deliveries'));
                            }
                            break;
                        case 'payment':
                            $field = $(miniShop2.Order.paymentInputUniquePrefix + response.data[key]);
                            if (response.data[key] != old_value) {
                                $field.trigger('click');
                            }
                            else {
                                miniShop2.Order.getcost();
                            }
                            break;
                        //default:
                    }
                    
                    switch (type) {
                        case 'checkbox':
                        case 'radio':
                            var values = typeof(response.data[key]) != 'undefined' ? response.data[key].split('||') : [];
                            $field.removeClass('error').closest(miniShop2.Order.inputParent).removeClass('error');
                            $field.each(function() {
                                if(values.indexOf($(this).val()) != -1) {
                                    $(this).prop('checked', true);
                                }
                            });
                            break;
                        default:
                            $field.val(response.data[key]).removeClass('error').closest(miniShop2.Order.inputParent).removeClass('error');
                    }
                })(key, value, old_value);
            };
            callbacks.response.error = function () {
                (function (key) {
                    var $field = $('[name="' + key + '"]', miniShop2.Order.order);
                    if ($field.attr('type') == 'checkbox' || $field.attr('type') == 'radio') {
                        $field.closest(miniShop2.Order.inputParent).addClass('error');
                    }
                    else {
                        $field.addClass('error');
                    }
                })(key);
            };

            var data = {
                key: key,
                value: value
            };
            data[miniShop2.actionName] = 'order/add';
            miniShop2.send(data, callbacks, miniShop2.Callbacks.Order.add);
        },
        getcost: function () {
            var callbacks = miniShop2.Order.callbacks;
            callbacks.getcost.response.success = function (response) {
                $(miniShop2.Order.orderCost, miniShop2.Order.order).text(miniShop2.Utils.formatPrice(response.data['cost']));
            };
            var data = {};
            data[miniShop2.actionName] = 'order/getcost';
            miniShop2.send(data, miniShop2.Order.callbacks.getcost, miniShop2.Callbacks.Order.getcost);
        },
        clean: function () {
            var callbacks = miniShop2.Order.callbacks;
            callbacks.clean.response.success = function () {
                location.reload();
            };

            var data = {};
            data[miniShop2.actionName] = 'order/clean';
            miniShop2.send(data, miniShop2.Order.callbacks.clean, miniShop2.Callbacks.Order.clean);
        },
        submit: function () {
            miniShop2.Message.close();

            // Checking for active ajax request
            if (miniShop2.ajaxProgress) {
                //noinspection JSUnresolvedFunction
                miniShop2.$doc.ajaxComplete(function () {
                    miniShop2.ajaxProgress = false;
                    miniShop2.$doc.unbind('ajaxComplete');
                    miniShop2.Order.submit();
                });
                return false;
            }

            var callbacks = miniShop2.Order.callbacks;
            callbacks.submit.before = function () {
                $(':button, a', miniShop2.Order.order).attr('disabled', true).prop('disabled', true);
            };
            callbacks.submit.ajax.always = function () {
                $(':button, a', miniShop2.Order.order).attr('disabled', false).prop('disabled', false);
            };
            callbacks.submit.response.success = function (response) {
                // if (response.data['redirect']) {
                //     document.location.href = response.data['redirect'];
                // }
                // else if (response.data['msorder']) {
                //     document.location.href = /\?/.test(document.location.href)
                //         ? document.location.href + '&msorder=' + response.data['msorder']
                //         : document.location.href + '?msorder=' + response.data['msorder'];
                // }
                // else {
                //     location.reload();
                // }
            };
            callbacks.submit.response.error = function (response) {
                $('[name]', miniShop2.Order.order).removeClass('error').closest(miniShop2.Order.inputParent).removeClass('error');
                for (var i in response.data) {
                    if (response.data.hasOwnProperty(i)) {
                        var key = response.data[i];
                        //var $field = $('[name="' + response.data[i] + '"]', miniShop2.Order.order);
                        //$field.addClass('error').closest(miniShop2.Order.inputParent).addClass('error');
                        var $field = $('[name="' + key + '"]', miniShop2.Order.order);
                        if ($field.attr('type') == 'checkbox' || $field.attr('type') == 'radio') {
                            $field.closest(miniShop2.Order.inputParent).addClass('error');
                        }
                        else {
                            $field.addClass('error');
                        }
                    }
                }
            };
            return miniShop2.send(miniShop2.sendData.formData, miniShop2.Order.callbacks.submit, miniShop2.Callbacks.Order.submit);
        },
        getrequired: function (value) {
            var callbacks = miniShop2.Order.callbacks;
            callbacks.getrequired.response.success = function (response) {
                $('[name]', miniShop2.Order.order).removeClass('required').closest(miniShop2.Order.inputParent).removeClass('required');
                var requires = response.data['requires'];
                for (var i = 0, length = requires.length; i < length; i++) {
                    $('[name=' + requires[i] + ']', miniShop2.Order.order).addClass('required').closest(miniShop2.Order.inputParent).addClass('required');
                }
            };
            callbacks.getrequired.response.error = function () {
                $('[name]', miniShop2.Order.order).removeClass('required').closest(miniShop2.Order.inputParent).removeClass('required');
            };

            var data = {
                id: value
            };
            data[miniShop2.actionName] = 'order/getrequired';
            miniShop2.send(data, miniShop2.Order.callbacks.getrequired, miniShop2.Callbacks.Order.getrequired);
        }
    };

    miniShop2.Message = {
        initialize: function () {
            miniShop2.Message.close = function () {
            };
            miniShop2.Message.show = function (message) {
                if (message != '') {
                    alert(message);
                }
            };

            if (typeof (UIkit.notify) == 'function') {
                miniShop2.Message.close = function () {
                    $('.uk-notify .uk-close').click();
                };
                miniShop2.Message.show = function (message, options) {
                    if (message != '') {
                        UIkit.notify(message, options);
                    }
                }
            }
        },
        success: function (message) {
            miniShop2.Message.show(message, {
                theme: 'ms2-message-success',
                sticky: false,
                timeout: 2000
            });
        },
        error: function (message) {
            miniShop2.Message.show(message, {
                theme: 'ms2-message-error',
                sticky: false,
                timeout: 2000
            });
        },
        info: function (message) {
            miniShop2.Message.show(message, {
                theme: 'ms2-message-info',
                sticky: false,
                timeout: 2000
            });
        }
    };

    miniShop2.Utils = {
        empty: function (val) {
            return (typeof(val) == 'undefined' || val == 0 || val === null || val === false || (typeof(val) == 'string' && val.replace(/\s+/g, '') == '') || (typeof(val) == 'object' && val.length == 0));
        },
        formatPrice: function (price) {
            var pf = miniShop2Config.price_format;
            price = this.number_format(price, pf[0], pf[1], pf[2]);

            if (miniShop2Config.price_format_no_zeros) {
                price = price.replace(/(0+)$/, '');
                price = price.replace(/[^0-9]$/, '');
            }

            return price;
        },
        formatWeight: function (weight) {
            var wf = miniShop2Config.weight_format;
            weight = this.number_format(weight, wf[0], wf[1], wf[2]);

            if (miniShop2Config.weight_format_no_zeros) {
                weight = weight.replace(/(0+)$/, '');
                weight = weight.replace(/[^0-9]$/, '');
            }

            return weight;
        },
        // Format a number with grouped thousands,
        number_format: function (number, decimals, dec_point, thousands_sep) {
            // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfix by: Michael White (http://crestidg.com)
            var i, j, kw, kd, km;

            // input sanitation & defaults
            if (isNaN(decimals = Math.abs(decimals))) {
                decimals = 2;
            }
            if (dec_point == undefined) {
                dec_point = ',';
            }
            if (thousands_sep == undefined) {
                thousands_sep = '.';
            }

            i = parseInt(number = (+number || 0).toFixed(decimals)) + '';

            if ((j = i.length) > 3) {
                j = j % 3;
            }
            else {
                j = 0;
            }

            km = j
                ? i.substr(0, j) + thousands_sep
                : '';
            kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
            kd = (decimals
                ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, '0').slice(2)
                : '');

            return km + kw + kd;
        },
        getValueFromSerializedArray: function (name, arr) {
            if (!$.isArray(arr)) {
                arr = miniShop2.sendData.formData;
            }
            for (var i = 0, length = arr.length; i < length; i++) {
                if (arr[i].name = name) {
                    return arr[i].value;
                }
            }
            return null;
        }
    };

    $(document).ready(function ($) {
        miniShop2.initialize();
        var html = $('html');
        html.removeClass('no-js');
        if (!html.hasClass('js')) {
            html.addClass('js');
        }
    });

    window.miniShop2 = miniShop2;

    /**
     * Callbacks
     */
     
    function optionsInCart () {
        $('form.ms2_form').each(function (i, form) {
            var $form = $(form);
            var in_cart = $form.data('in_cart') || {};
            var check = function () {
                var added = false;
                $.each(in_cart, function (i, item) {
                    if (Object.keys(item.options).length > 0) {
                        var match = 0;
                        var $checked = $form.find('[name^="options"]:checked');
                        $.each($checked, function (i, option) {
                            var name = $(option).attr('name');
                            name = name.substr(8, name.length - 9)
                            if (item.options[name] === $(option).val()) {
                                match += 1
                            }
                        });
                        if (Object.keys(item.options).length == match && match == $checked.length) {
                            added = true;
                        }
                    } else {
                        if ($form.find('[name^="options"]:checked').length === 0) {
                            added = true;
                        }
                    }
                });
                if (added) {
                    $form.addClass('_is_in_cart');
                } else {
                    $form.removeClass('_is_in_cart');
                }
            }
            check()
            $form.on('change', 'input', check);
        })
    }
    optionsInCart();

    /* сообщение о добавлении в корзину */
    miniShop2.Callbacks.add('Cart.add.response.success', 'add_to_cart_message', function(response) {
        $.post(
          '/template/actions.php',
          {
              action: 'cart/add/success',
              key: response.data.key
          },
          function(r) {
              r = $.parseJSON(r);

              if (r.success) {
                  var form = $('form.ms2_form').has('input[name="id"][value="' + r.data.product.id + '"]');
                  var in_cart = form.data('in_cart') || [];
                  in_cart.push(r.data.cart);
                  form.data('in_cart', in_cart);
                  optionsInCart();

                  var modal = UIkit.modal($(r.html).appendTo("body"), {
                      center: true
                  });

                  modal.on("hide.uk.modal", function(){
                      modal.element.remove();
                  });

                  modal.show();
              }
          }
        );
    });

    /* Обновление цены после ввода купона в корзине */
    miniShop2.Callbacks.add('Order.add.ajax.done', 'coupon_code', function(res) {
        var res = res.responseJSON;
        if (typeof(res.data['coupon_code']) != 'undefined') {
            miniShop2.Order.getcost();
        }
        if(typeof(res.data['coupon_code']) == 'undefined' || res.data['coupon_code'] == '') {
            $('#coupon_code_desc').text('');
        } else {
            $('#coupon_code_desc').text('Скидка применена!');
        }
    });

    /* Обновление скидки */
    function discountUpdateCart() {
        $.ajax({
            url: location.href,
            success: function(response){
                var html = $(document.createElement('div')).append(response);

                // обновление стоимости корзины
                $('.ms2_total_count').html(html.find('.ms2_total_count').html());
                $('.ms2_total_cost').html(html.find('.ms2_total_cost').html());
                html.find('.js-cart-row').each(function() {
                    var id = $(this).attr('id'),
                      target = $('[id="' + id + '"]');

                    $('.js-cart-row-price', target).html( $('.js-cart-row-price', this).html() );
                    $('.js-cart-row-oldprice', target).html( $('.js-cart-row-oldprice', this).html() );
                    $('.js-cart-row-discount', target).html( $('.js-cart-row-discount', this).html() );
                    $('.ms2_total_cost_row', target).html( $('.ms2_total_cost_row', this).html() );
                });

                // обновление стоимости заказа
                miniShop2.Order.getcost();
            }
        });
    }

    /* Обновление цены после изменений в корзине */
    miniShop2.Callbacks.add('Cart.change.response.success', 'change_cart', discountUpdateCart);
    miniShop2.Callbacks.add('Cart.remove.response.success', 'remove_cart', discountUpdateCart);

    /* Обновление цены после ввода купона в корзине */
    miniShop2.Callbacks.add('Order.add.response.success', 'discount_code', function(response) {
        if(response.data.discount_code) {
            $('.cart-coupon').addClass('cart-coupon--applied');
            discountUpdateCart();
        }
    });

    /* Обновление цены после включения кредита в корзине */
    miniShop2.Callbacks.add('Order.add.response.success', 'credit', function(response) {
        if (typeof(response.data['credit']) != 'undefined') {
            discountUpdateCart();
        }
    });

    /* обновление стоимости доставки */
    function updDeliveryPrice() {
        var form = $('form#msOrder'),
          params = {
              'action': 'delivery/price',
              'payment': $('[name="payment"]:checked', form).val()
          };

        $('.js-delivery-price').each(function() {
            var span = $(this),
              data = $.extend({
                  'delivery': span.data('id')
              }, params);

            $.post("template/actions.php", data, function(response) {
                if(response.price > 0) {
                    span.html('&mdash; <i>' + response.price + ' <i class="uk-icon-rub"></i></i>');
                } else {
                    span.html('');
                }
            }, 'json');
        });
    }
    miniShop2.Callbacks.add('Order.getcost.response.success', 'updDeliveryPrice', updDeliveryPrice);

    function updPaymentDesc(response) {
        var form = $('form#msOrder'),
          params = {
              'action': 'payment/description',
              'delivery': $('[name="delivery"]:checked', form).val()
          };

        $('.js-delivery-description').each(function() {
            var span = $(this),
              data = $.extend({
                  'payment': span.data('id')
              }, params);

            $.post("template/actions.php", data, function(response) {
                if(response.description) {
                    span.html(response.description);
                } else {
                    span.html('');
                }
            }, 'json');
        });
    }
    miniShop2.Callbacks.add('Order.getcost.response.success', 'updPaymentDesc', updPaymentDesc);

    miniShop2.Callbacks.add('Order.submit.response.success', 'order_success', function(response) {
        // if (response.data['redirect']) {
        //     document.location.href = response.data['redirect'];
        // }
        // else if (response.data['msorder']) {
        var href = document.location.pathname;
        if (response.data['msorder']) {
            href = document.location.search
              ? href + document.location.search + '&msorder=' + response.data['msorder']
              : href + '?msorder=' + response.data['msorder'];
        }
        if ($('#msGetOrder').length) {
            $.ajax({
                url: href,
                success: function(response) {
                    $('#msGetOrder').html($(document.createElement('div')).html(response).find('#msGetOrder').html());

                    $('#cart-tabs li.uk-disabled').removeClass('uk-disabled').siblings().addClass('uk-disabled').end().click();

                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(".content").offset().top - $('.toolbar').height()
                    }, 1000);
                }
            });
        } else {
            document.location.href = href;
        }
        // }
        // else {
        //     location.reload();
        // }
    });

    miniShop2.Callbacks.add('Order.submit.before', 'orderSubmitBefore', function() {
        document.querySelector('.js-order-submit').classList.add('preloader');
    });
    miniShop2.Callbacks.add('Order.submit.ajax.done', 'orderSubmitDone', function() {
        document.querySelector('.js-order-submit').classList.remove('preloader');
    });

    miniShop2.Callbacks.add('Cart.remove.before', 'remove_cart_before', function() {
        $('.content').addClass('preloader');
    });
    miniShop2.Callbacks.add('Cart.remove.ajax.always', 'remove_cart_after', function() {
        setTimeout(function() {$('.content').removeClass('preloader')}, 800);
    });
})(window, document, jQuery, miniShop2Config);