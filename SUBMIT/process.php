<?php
 // Database configuration
  $host = 'localhost';
   $db = 'user_system'; 
   $user = 'root';
    $pass = ''; 
    $charset = 'utf8mb4';
     $dsn = "mysql:host=$host;dbname=$db;charset=$charset"; 
     $options = [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, 
     PDO::ATTR_EMULATE_PREPARES => false, ]; $message = "";
      // Process form when submitted 
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
         try { echo "THANK YOU FOR SUBMITING TO ONE OF OUR TRIPS"; $pdo = new 
         PDO($dsn, $user, $pass, $options); 
         // Prepare SQL statement
          $sql = "INSERT INTO submissions (name, email, trip, message) VALUES (?, ?, ?, ?)";
           $stmt = $pdo->prepare($sql);
            // Execute with sanitized input
             $stmt->execute([ $_POST['name'], 
             $_POST['email'], 
             $_POST['trip'], 
             $_POST['message'] ]);
              $message = "<p style='color: green;'>YOUR SUBMIT WAS SUCCESSFUL.</p>"; 
              echo $message; 
              echo "<p><a href='http://localhost/assessment/MAIN%20PAGE/index.html'>BACK TO MAIN PAGE</a>";
               } catch (\PDOException $e) { 
                $message = "<p style='color: red;'>Error:YOUR SUBMIT WAS NOT SUCCESSFUL " .
                 $e->getMessage() . "</p>"; echo $message; 
                 echo "<p><a href='http://localhost/assessment/MAIN%20PAGE/index.html'>BACK TO MAIN PAGE</a>"; 
                 } } 
                 ?>