<?php
$db = new mysqli('xdm360155499.my3w.com', 'xdm360155499', '159644539', 'xdm360155499_db');
$db->query('SET CHARACTER_SET_CLIENT=BINARY,CHARACTER_SET_CONNECTION=UTF8,CHARACTER_SET_RESULTS=UTF8');
$sql = 'SELECT * FROM blog_article';
$result = $db->query($sql);
$rows = [];
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}
echo json_encode($rows);