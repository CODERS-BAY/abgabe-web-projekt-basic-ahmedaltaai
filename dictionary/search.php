<?php
    include 'header.php';
?>

<nav>
    <div class="links">
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="insert.php">Insert word</a></li>
            <li><a href="database.php">Database</a></li>
        </ul>
    </div>
    <form action="search.php" method="POST">
        <input type="text" name="search" id="search" placeholder="search...">
        <button type="submit" name="search-button">search</button>
    </form>
</nav>

<?php

if(isset($_POST['search-button'])){
    $search = mysqli_real_escape_string($conn, $_POST['search']);
    $sql = "SELECT * FROM translation_eng WHERE german_word LIKE '%$search%' OR english_word LIKE '%$search%';";
    $result = mysqli_query($conn, $sql);
    $queryResult = mysqli_num_rows($result);

    echo "<p class='headline'>"."your search results!"."</p>"."<br>";

    if($queryResult > 0){
        while($row = mysqli_fetch_assoc($result)) {
            echo "<div class='result'>
            <p>".$row['german_word']." – ".$row['english_word']."</p>
            </div>";
        }
    } else {
        echo "there are no results matching your search!";
    }
}

?>