<?php
session_start();
require 'db.php';

// Ensure the user is logged in and is a donor
if (!isset($_SESSION['user_id']) || $_SESSION['user_type'] !== 'donor') {
    header('Location: login.php');
    exit();
}

// Fetch donor-specific data
$stmt = $pdo->prepare("SELECT * FROM donors WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$donor = $stmt->fetch();

echo "<h1>Welcome, {$_SESSION['username']}!</h1>";
echo "<p>Blood Type: {$donor['blood_type']}</p>";
echo "<p>Medical Status: {$donor['medical_status']}</p>";

// Fetch donation history
$stmt = $pdo->prepare("SELECT * FROM donation_history WHERE donor_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$donations = $stmt->fetchAll();

echo "<h2>Donation History</h2>";
if ($donations) {
    echo "<ul>";
    foreach ($donations as $donation) {
        echo "<li>Donation Date: {$donation['donation_date']}</li>";
    }
    echo "</ul>";
} else {
    echo "<p>No donation history available.</p>";
}
?>