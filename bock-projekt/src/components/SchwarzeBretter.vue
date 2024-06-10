<template>
    <div class="Boards">
        <div id="mitte">
            <div class="board-group">
                <h3>Hobby | Fachbereich</h3>
                <div class="boards">
                    <div v-for="b in boards" :key="b.id" class="board-item">
                        <h2 class="board-name">{{ b.name }}</h2>
                        <div class="nachrichten">
                            <div v-for="m in message" :key="m.id" class="board-item">
                            <div class="avatar"></div>
                            <div class="m-details">
                            <p v-if="m.newMessage" class="new-message">Neue Nachricht!</p>
                            <p class="m-name">- {{ m.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    </div>    
</template>

<script>


export default {



    name: 'SchwarzeBretter',
    data() {
        return {
            message: [
                { id: 1, name: 'Pauline Musterfrau', newMessage: true },
                { id: 2, name: 'Max Musterman', newMessage: true }
            ],
            boards: [
                { id: 1, name: 'Yoga'},
                { id: 2, name: 'Kickboxen'}
            ]
        };
    }

};
</script>

<style>
    .m-name{
        justify-self: right;
    }
    .boards{
        padding: 20px;
        background-color: var(--primary-color);
        height: max-content;
        overflow-y: auto;
    }
    .nachrichten{
        padding: 20px;
        background-color: #ffffff;
        height: max-content;
        overflow-y: auto;
    }
    .board-item{
        display: flexbox;
        justify-content: center;
        background-color: white;
        padding: 10px;
        border-radius: 20px;
        margin-bottom: 10px;
        box-shadow: 2px 2px 10px #ccc;
    }
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
        height:max-content;
        top: 20vh;
        
        margin: 0%;
    }
    .navi{
        height: auto;
        max-height: 90%;
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