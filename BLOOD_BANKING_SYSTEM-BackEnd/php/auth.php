<?php
require 'db.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Fetch user from database
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        // Set session data
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['user_type'] = $user['user_type'];

        // Redirect to the appropriate dashboard
        if ($user['user_type'] === 'donor') {
            header('Location: donor_dashboard.php');
        } else {
            header('Location: recipient_dashboard.php');
        }
        exit();
    } else {
        echo "Invalid username or password.";
    }
}
?>