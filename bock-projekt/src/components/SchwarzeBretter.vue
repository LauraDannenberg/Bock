<template>
    <div class="Boards">
        <Header title="Boards"/>
        <Linie />
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
        <NavBar />
    </div>    
</template>

<script>
import Header from './HeaderComponent.vue';
import NavBar from '../components/NavBar.vue';
import Linie from './LineComponent.vue';

export default {
  name: 'ChatSeite',
  components: {
    Header,
    NavBar,
    Linie
  },
};
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
    nav {
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
    box-shadow: 0 -2px 10px #ccc;
  }
</style>