<?php
    include 'header.php'
?>
<i class="fas fa-bars fa-2x menu-btn"></i>
<nav>
    <div class="links">
        <ul class="main-menu">
            <li><a href="index.php">Home</a></li>
            <li><a href="insert.php">Insert word</a></li>
            <li><a href="database.php">Database</a></li>
        </ul>
    </div>
    <form action="search.php" method="POST" class="nav-bar">
        <input type="text" name="search" id="search" placeholder="search...">
        <button type="submit" name="search-button">search</button>
    </form>
</nav>

<?php

$sql = "SELECT * FROM translation_eng ORDER BY german_word ASC;";
$result = mysqli_query($conn, $sql);
$queryResult = mysqli_num_rows($result);

echo "<h1 class='headline'>"."there are ".$queryResult." results!"."<br>"."</h1>";


if($queryResult > 0){
    while($row = mysqli_fetch_assoc($result)){
        echo "<div class='database'>
            <p>".$row['german_word']." – ".$row['english_word']."</p>
            </div>";
    }
} else {
    echo "your database is empty!";
}

?>

<script>
    document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))
</script>
