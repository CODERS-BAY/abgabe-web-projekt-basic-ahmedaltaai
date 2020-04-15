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
<div class="headline">
    <p>welcome to the modest dictionary</p>
</div>

<script>
    document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))
</script>
</body>
</html>