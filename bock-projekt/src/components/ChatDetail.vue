<template>
  <div class="chat-container">
    <div class="chat-messages" ref="chatMessages">
      <div v-for="(message, index) in chatMessages" :key="index"
        :class="{ 'message': message.type === 'received', 'message other-side': message.type === 'sent' }">
        <p><strong>{{ message.username }}:</strong> {{ message.text }}</p>
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
      newMessage: '',
      chatMessages: [],
      ws: null,
      currentUsername: this.generateRandomUsername(),  // Generiere zufälligen Benutzernamen
    };
  },
  props: {
    id: String
  },
  methods: {
    // Methode zur Generierung eines zufälligen Benutzernamens
    generateRandomUsername() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let username = "User"
      
      //let username = 'user'
      
      //for (let i = 0; i < 8; i++) {  // 8 Zeichen lange Benutzernamen
        username += characters.charAt(Math.floor(Math.random() * characters.length));
      //}
      return username;
    },

    sendMessage() {
      if (this.newMessage.trim() === '') return;

      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        const message = this.newMessage.trim();
        this.ws.send(JSON.stringify({ text: message, chatId: this.chatId, username: this.currentUsername }));
        this.chatMessages.push({ text: message, type: 'sent', username: this.currentUsername });
        this.newMessage = '';
      } else {
        console.warn('WebSocket is not open. Please wait for the connection to be established.');
      }
    },
    receiveMessage(username, message) {
      console.log("received msg", username, message)
      console.log("i am", this.currentUsername)
      if (username !== this.currentUsername && message) {
        this.chatMessages.push({ text: message, type: 'received', username });
        /*
        try {
          // Assuming event.data is a string representing a JSON object
          const parsedData = JSON.parse(message);
          console.log("MESSAGETEST",message)
          // Check if parsedData.message is a Buffer-like object
          if (parsedData.message && parsedData.message.type === 'Buffer') {
            const messageBuffer = new Uint8Array(parsedData.message.data);
            const messageString = new TextDecoder().decode(messageBuffer);
            console.log("messagestring",messageString)
            const messageData = JSON.parse(messageString);

            const username = messageData.username;
            const message = messageData.text;
            console.log(username);
            console.log("da messag",message);
            this.chatMessages.push({ text: message.text, type: 'received', username });
          }
        } catch (e) {
          document.getElementById('messages').value += `Error parsing message: ${message}\n`;
        }
          */
      }
    },
    setupWebSocket() {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/chat/?chatId=${this.chatId}&username=${this.currentUsername}`; // Pass the chat ID and username
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        console.log('WebSocket connection established');
      };

      this.ws.onmessage = (event) => {
        if (typeof event.data === 'string') {
          try {
            console.log("eventdatastring",event.data)
            const data = JSON.parse(event.data);
            console.log(data.username)
            const dames = JSON.parse(data.message).text;
            console.log(dames);
            this.receiveMessage(data.username, dames);
          } catch (error) {
            console.error('Error parsing JSON data from WebSocket:', error);
          }
        } else if (event.data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const data = JSON.parse(e.target.result);
              this.receiveMessage(data.username, data.message);
            } catch (error) {
              console.error('Error parsing JSON data from WebSocket Blob:', error);
            }
          };
          reader.readAsText(event.data);
        } else {
          console.warn('Unsupported WebSocket message type:', event.data);
        }
      };

      this.ws.onclose = () => {
        console.log('WebSocket connection closed');
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    }
  },
  watch: {
    id(newId) {
      this.chatId = newId;
      this.setupWebSocket();
    }
  },
  created() {
    this.setupWebSocket();
  },
  beforeUnmount() {
    if (this.ws) {
      this.ws.close();
    }
  }
};
</script>

<style scoped>
.chat-container {
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
