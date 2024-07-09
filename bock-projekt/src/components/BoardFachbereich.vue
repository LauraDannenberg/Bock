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
                    <div class="notSelected"><router-link to="/App/Boards">Hobby</router-link></div>
                    | 
                    <div class="selected">  
                    Fachbereich
                    </div>
                </h3>
                <div class="boards">
                    <div v-for="b in boards" :key="b.id" class="board-item">
                        <h2 class="board-name">{{ b.name }}</h2>
                        <div class="nachrichten">
                            <div v-for="m in filteredMessages(b.name)" :key="m.id" class="board-item message">
                            <div class="testi">
                            <div class="m-details">
                            <p class="m-name">- {{ m.name }}</p>
                            </div>
                            
                            <p v-if="m.newMessage" class="new-message">{{ m.text}}</p>
                        </div>
                    </div><!--
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
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios';

export default {



    name: 'SchwarzeBretter',
    data() {
        return {
            message: [],
            boards: [
                { id: 0, name: 'Informatik'},
                { id: 1, name: 'Elektrotechnik'}
            ],
            moreMessages: [
                { id: 0, name: 'Chris Musterperson', newMessage: true, text: 'Brauch ich bestimmtes Equiment?'},
                { id: 1, name: 'Dieter Bohlen', newMessage: true, text: 'Kennt ihr schon CoinMaster?'}
            ] ,
        };
    },
    created() {
    this.fetchData();
    },
    watch: {
        '$route.params.id': 'fetchData'
    },
    
    methods: {
        toggleBoard(index) {
            this.boards[index].expanded = !this.boards[index].expanded;
        },
        async fetchData() {
      
            try {
                
                const response = await axios.get('http://localhost:3000/post/all');
                console.log("Data fetched successfully:", response.data);
                const data = response.data;
                data.forEach(post => {
                    this.author = post.author;
                    this.text = post.text;
                    this.board = post.board;
                    this.message.push({ name: this.author, newMessage: true, text: this.text, board : this.board});
                });

               
                // Debug-Ausgabe zur Überprüfung der Datenzuweisung
                console.log("Vorname in Komponente:", this.author);
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.response) {
                console.log("Error response data:", error.response.data);
                }
            }
            },
        filteredMessages(boardName) {
            return this.message.filter(msg => msg.board === boardName);
        }
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