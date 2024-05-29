<template>
    <div class="Boards">
        <div id="oben">
            <img src="../assets/logo3.png" class="logo" alt="Logo" style="justify-self: left;">
            <h3 style="justify-self: center;">Boards</h3>
            <img src="../assets/logo3.png" class="logo" alt="Logo" style="visibility: hidden;">
        </div>
        <div id="line">

        </div>
        <div id="mitte">
            <h3 style="justify-self: center;">Hobby | Fachbereich</h3>

            <div class="board-group">
                <div class="board-group">
                    Test Nachricht
                </div>
                <div class="board-group">
                    - Test Benutzer
                </div>

            </div>

        </div>
        <div id="unten">
            <img class="navi" src="../assets/Männchen.png"> 
            <img class="navi" src="../assets/Boards.png">
            <img class="navi" src="../assets/Lupe.png">
            <img class="navi" src="../assets/Chat.png">
        </div>
    </div>    
</template>

<script>
</script>

<style>
    #oben{
        display: flex;
        height:20vh;
        justify-content: space-between;
        align-items: center;
        background-color: var(--tertiary-color);
        font-family: cursive;
        font-size: 6vh;
    }
    #mitte{
        display: flex;
        justify-content: center;
        font-family: sans-serif;
        height:70vh;
        top: 20vh;
        background-color: var(--primary-color);
        margin: 0%;
    }
    #unten{
        display: flex;
        height:10vh;
        top:90vh;
        justify-content: space-between;
        align-items: center;
        background-color: var(--tertiary-color);
    }
    #line{
        height:1vh;
        background-color: #0f5c2f;
    }
    .navi{
        height: auto;
        max-height: 90%;
    }
    .board-group{
        justify-self: center;
    }
</style>