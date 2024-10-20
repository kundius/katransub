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
}

if (is_array($response)) {
    $response = json_encode($response);
}

@session_write_close();
exit($response);
