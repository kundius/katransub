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

try {
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
        case 'upload_invoice':
            // Undefined | Multiple Files | $_FILES Corruption Attack
            // If this request falls under any of them, treat it invalid.
            if (!isset($_FILES['file']['error']) || is_array($_FILES['file']['error'])) {
                throw new RuntimeException('Invalid parameters.');
            }
        
            // Check $_FILES['file']['error'] value.
            switch ($_FILES['file']['error']) {
                case UPLOAD_ERR_OK:
                    break;
                case UPLOAD_ERR_NO_FILE:
                    throw new RuntimeException('No file sent.');
                case UPLOAD_ERR_INI_SIZE:
                case UPLOAD_ERR_FORM_SIZE:
                    throw new RuntimeException('Exceeded filesize limit.');
                default:
                    throw new RuntimeException('Unknown errors.');
            }
        
            // You should also check filesize here. 
            if ($_FILES['file']['size'] > 10000000) {
                throw new RuntimeException('Exceeded filesize limit.');
            }
        
            // DO NOT TRUST $_FILES['file']['mime'] VALUE !!
            // Check MIME Type by yourself.
            $finfo = new finfo(FILEINFO_MIME_TYPE);
            if (false === $ext = array_search(
                $finfo->file($_FILES['file']['tmp_name']),
                array(
                    'jpg' => 'image/jpeg',
                    'png' => 'image/png',
                    'gif' => 'image/gif',
                    'pdf' => 'application/pdf'
                ),
                true
            )) {
                throw new RuntimeException('Invalid file format.');
            }
        
            $filedir = sprintf('files/invoices/%s', sha1_file($_FILES['file']['tmp_name']));
            $filename = sprintf('%s.%s', $_FILES['file']['name'], $ext);
            $filepath = sprintf('%s/%s', $filedir, $filename);
            if (!is_dir($_SERVER['DOCUMENT_ROOT'] . '/' . $filedir)) {
                mkdir($_SERVER['DOCUMENT_ROOT'] . '/' . $filedir);
            }
            // You should name it uniquely.
            // DO NOT USE $_FILES['file']['name'] WITHOUT ANY VALIDATION !!
            // On this example, obtain safe unique name from its binary data.
            if (!move_uploaded_file(
                $_FILES['file']['tmp_name'],
                $_SERVER['DOCUMENT_ROOT'] . '/' . $filepath
            )) {
                throw new RuntimeException('Failed to move uploaded file.');
            }

            $response = [
                'success' => true,
                'url' => $modx->getOption('site_url') . $filepath
            ];
            break;
    }
} catch (RuntimeException $e) {
    $response = [
        'success' => false,
        'message' => $e->getMessage()
    ];
}

if (is_array($response)) {
    $response = json_encode($response);
}

@session_write_close();
exit($response);
