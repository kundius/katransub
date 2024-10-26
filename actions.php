<?php

if (empty($_REQUEST['action'])) {
    die('Access denied');
} else {
    $action = $_REQUEST['action'];
}

// Подключаем
define('MODX_API_MODE', true);
require '../../index.php';

// Включаем обработку ошибок
$modx->getService('error', 'error.modError');
$modx->getRequest();
$modx->setLogLevel(modX::LOG_LEVEL_ERROR);
$modx->setLogTarget('FILE');
$modx->error->message = null;

$modx->switchContext('web');

define('MODX_ACTION_MODE', true);

switch ($_REQUEST['action']) {
    case 'delivery/price':
        $params = array_merge($_POST, []);
        $price = $modx->runSnippet('getDeliveryPrice', $params);
        $response = ['price' => $price];
        break;
    case 'payment/description':
        $params = array_merge($_POST, []);
        $description = $modx->runSnippet('getPaymentDescription', $params);
        $response = ['description' => $description];
        break;
    case 'order/cancel':
        $miniShop2 = $modx->getService('miniShop2');
        $miniShop2->initialize($modx->context->key);
        $params = array_merge($_POST, []);
        $response = [];
        $order = $modx->getObject('msOrder', (int)$params['id']);
        $data = $miniShop2->changeOrderStatus($order->get('id'), 4);
        if ($order && $data) {
            $response['order'] = $order->toArray();
            $response['success'] = true;
        } else {
            $response = ['success' => false];
        }
        break;
    case 'order/cart':
        $miniShop2 = $modx->getService('miniShop2');
        $miniShop2->initialize($modx->context->key);
        $params = array_merge($_POST, []);
        $response = [];
        $order = $modx->getObject('msOrder', (int)$params['id']);
        $products = $order->getMany('Products');
        if ($order && $products) {
            $response['order'] = $order->toArray();

            foreach ($products as $product) {
                $miniShop2->cart->add($product->get('product_id'), $product->get('count'), $product->get('options'));
                $response['products'][] = $product->toArray();
            }

            $response['cart'] = $miniShop2->cart->status();
            $response['success'] = true;
        } else {
            $response = ['success' => false];
        }
        break;
    case 'order/pay':
        $miniShop2 = $modx->getService('miniShop2');
        $miniShop2->initialize($modx->context->key);
        $params = array_merge($_POST, []);
        $response = [];
        $order = $modx->getObject('msOrder', (int)$params['id']);
        $payment = $order->getOne('Payment');
        if ($order && $payment) {
            $data = $payment->send($order);
            if (!empty($data['data']['redirect'])) {
                $response['redirect'] = $data['data']['redirect'];
            }
            $response['order'] = $order->toArray();
            $response['success'] = true;
        } else {
            $response = ['success' => false];
        }
        break;
}

if (is_array($response)) {
    $response = json_encode($response);
}

@session_write_close();
exit($response);
