<template>
    <div class="chat-container">
      <div class="chat-messages" ref="chatMessages">
        <div v-if="chatNeue" class="message other-side">
          <p>Hey hast du das Relegationsspiel Düsseldorf gegen Bochum in Düsseldorf gesehen? </p>
        </div>
        <div v-if="chatNeue" class="message">
          <p>Ja das war mega, selten so ein spannendes Spiel gesehen </p>
        </div>
        <div v-if="chatNeue" class="message other-side">
          <p>Jaaa und zum Glück mit einem Happy End </p>
        </div>
        <div v-if="chatNeue" class="message">
          <p>Ja das auf jeden Fall, zum Glück nächstes Jahr wieder erste Liga </p>
        </div>
        <div v-if="chatNeue" class="message other-side">
          <p>Jaaa</p>
        </div>

        <div v-for="(message, index) in chatMessages" :key="index" class="message">
          <p>{{ message }}</p>
        </div>
      </div>
  
      <div class="message-input">
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Nachricht eingeben...">
        <button @click="sendMessage">Senden</button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'ChatDetail',
    data() {
      return {
        chatId: this.$route.params.id,
        chatNeue: this.$route.query.newMessage === 'true',
        chatMessages: [],
        newMessage: ''
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.chatMessages.push(this.newMessage.trim());
          this.newMessage = '';
        }
      }
    }
  };
  </script>
  
<style>
    .chat-container{
        width: 100%;
    }

    .chat-messages {
        max-height: 60vh;
        max-width: 100%;
    }
    
    .message {
        background-color: #f2f2f2;
        padding: 10px;
        max-width: 50vh;
        border-radius: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: auto;
        box-shadow: none;
    }
    
    .message-input {
        position: absolute;
        bottom: 10vh;
        left: 0;
        height: 8vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e8e8e8;
        }
    .message-input input[type="text"] {

        flex: 1;
        padding: 10px;
        margin-right: 10px;
    }

    .other-side {
        background-color: #dcf8c6;
        max-width: 50vh;
        margin-left: auto;
        margin-right: 2vh;
    }
    
    .message-input button {
        padding: 10px 20px;
        margin-top: 0;
        background-color: #00c853;
        color: white;
        cursor: pointer;
        box-shadow: none;
    }
</style>