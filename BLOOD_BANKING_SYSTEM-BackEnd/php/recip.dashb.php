<?php
session_start();

// Ensure the user is logged in and is a recipient
if (!isset($_SESSION['user_id']) || $_SESSION['user_type'] !== 'recipient') {
    header('Location: login.php');
    exit();
}

echo "<h1>Welcome, {$_SESSION['username']}!</h1>";
echo "<p>Recipient Dashboard</p>";
?>