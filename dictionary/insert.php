<?php
    include 'header.php';
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
<p class="headline">insert a new word into the database</p>
<form action="insert.php" method="POST" class="insert-form">
    <input type="text" name="german-word" id="german-word" placeholder="german word">
    <input type="text" name="english-word" id="english-word" placeholder="english word">
    <button type="submit" name="insert-button">submit</button>
</form>

<?php

if(isset($_POST["insert-button"])){

    $germanWord = mysqli_real_escape_string($conn, $_POST["german-word"]);
    $englishWord = mysqli_real_escape_string($conn, $_POST["english-word"]);
    $sql = "INSERT INTO translation_eng (german_word, english_word) VALUES ('$germanWord', '$englishWord');";
    mysqli_query($conn, $sql);

    $num = mysqli_affected_rows($conn);
    if($num>0){
        echo "<p class='success insert-form'>you have added a new word successfully!</p>";
    } else {
        echo "<p class='failure insert-form'>there has been a mistake thus no words added!</p>";
    }
}
?>
<script>
    document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))
</script>
