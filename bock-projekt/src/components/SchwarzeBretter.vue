<template>
    <div class="Boards">
        <div class=" rechts">
            <router-link to="/App/Boards/Boardcreate">
              <button type="submit" >
                <img :width="35" :src="require('../assets/Stift.png')">
              </button>
            </router-link>
        </div>
        <div id="mitte">
            <div class="board-group">
                <h3>
                    <div class="selected">Hobby </div>
                    | 
                    <div class="notSelected">  <router-link to="/App/Boards/Fachbereich">Fachbereich</router-link>
                    
                    </div>
                </h3>
                <div class="boards">
                    <div v-for="b in boards" :key="b.id" class="board-item">
                        <h2 class="board-name">{{ b.name }}</h2>
                        <div class="nachrichten">
                            <div v-for="m in message" :key="m.id" class="board-item message">
                            
                            <div class="m-details">
                            <p class="m-name">- {{ m.name }}</p>
                            <p v-if="m.newMessage" class="new-message">{{ m.text}}</p>
                        </div>
                    </div>
                    <img src="../assets/Pfeil.jpg" @click="toggleBoard(b.id)" id="pfeil">
                            <div v-if="b.expanded"> 
                                <div class="nachrichten">
                                    <div v-for="m in moreMessages" :key="m.id" class="board-item message">
                            
                                        <div class="m-details">
                                            <p class="m-name">- {{ m.name }}</p>
                                            <p v-if="m.newMessage" class="new-message">{{ m.text}}</p>
                                        </div>
                                    </div>
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
                { id: 1, name: 'Pauline Musterfrau', newMessage: true, text: 'Was ist eigentlich der Plural von Campus?' },
                { id: 2, name: 'Max Musterman', newMessage: true, text: 'Freue mich schon auf die Yogastunde heute am Campus!' }
            ],
            boards: [
                { id: 0, name: 'Yoga'},
                { id: 1, name: 'Kickboxen'}
            ],
            moreMessages: [
                { id: 0, name: 'Chris Musterperson', newMessage: true, text: 'Brauch ich bestimmtes Equiment?'},
                { id: 1, name: 'Dieter Bohlen', newMessage: true, text: 'Kennt ihr schon CoinMaster?'}
            ] 
        };
    },
    
    methods: {
        toggleBoard(index) {
            this.boards[index].expanded = !this.boards[index].expanded;
        },
    },

};
</script>

<style>
#pfeil{
    max-width: 15vw;
    max-height: 2vw;
    margin-left: 45%;
    margin-top: 3%;
}
h3{
    text-align: center;
}
    .m-name{
        /* text-align: right;*/
        color: grey;
    }
    .boards{
        padding: 20px;
        background-color: var(--primary-color);
        height: max-content;
        width: 70vw;
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
        outline: 0.3vh green solid;
    }
    .message{
        border-color: black; 
        box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);   
    }

    .board-name{
        text-align: center;
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
    
    .selected{
        color: var(--secondary-color);
    }

    .selected, .notSelected{
        margin: 0 0.5rem;
        cursor: pointer;
    }

    h3{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    button{
        margin: 15px 15px 0 0;
        background-color: white;
        border: none;
        border-radius: 10px;
        box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);
        cursor: pointer;
    }
</style>