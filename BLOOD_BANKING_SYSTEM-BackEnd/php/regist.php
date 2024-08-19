<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $user_type = $_POST['user_type'];

    // Donor-specific data
    $blood_type = $_POST['blood_type'] ?? null;
    $medical_status = $_POST['medical_status'] ?? null;

    // Validate user input
    if (empty($username) || empty($password) || empty($user_type)) {
        echo "All fields are required.";
    } elseif (!in_array($user_type, ['donor', 'recipient'])) {
        echo "Invalid user type.";
    } else {
        try {
            // Insert user into the database
            $pdo->beginTransaction();

            $stmt = $pdo->prepare("INSERT INTO users (username, password, user_type) VALUES (?, ?, ?)");
            $stmt->execute([$username, $password, $user_type]);
            $user_id = $pdo->lastInsertId();

            if ($user_type === 'donor') {
                // Insert donor-specific information
                $stmt = $pdo->prepare("INSERT INTO donors (user_id, blood_type, medical_status) VALUES (?, ?, ?)");
                $stmt->execute([$user_id, $blood_type, $medical_status]);
            }

            $pdo->commit();

            // Redirect to different pages based on user type
            if ($user_type === 'donor') {
                header('Location: donor_dashboard.php');
            } else {
                header('Location: recipient_dashboard.php');
            }
            exit();
        } catch (PDOException $e) {
            $pdo->rollBack();
            if ($e->getCode() == 23000) {
                echo "Username already exists.";
            } else {
                echo "Error: " . $e->getMessage();
            }
        }
    }
}
?>