<!-- src/views/ChatSeite.vue -->
<template>
  <div>

    <div class="chat-list">
      <div v-for="chat in chats" :key="chat.id" class="chat-item">
        <div class="avatar"></div>
        <div class="chat-details">
          <p class="chat-name">{{ chat.name }}</p>
          <p v-if="chat.newMessage" class="new-message">Neue Nachricht!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ChatSeite',
  data() {
    return {
      chats: [
        { id: 1, name: 'Pauline Musterfrau', newMessage: true },
        { id: 2, name: 'Max Musterman', newMessage: true },
        { id: 3, name: 'Chris Musterperson', newMessage: false },
        { id: 4, name: 'Dieter Bohlen', newMessage: false }
      ]
    };
  }
};
</script>

<style scoped>
.chat-list {
  padding: 20px;
  height: calc(100vh - 140px);
  overflow-y: visible;
}

.chat-item {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 10px #ccc;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-details {
  display: flex;
  flex-direction: column;
}

.chat-name {
  font-weight: bold;
}

.new-message {
  color: green;
  font-weight: bold;
}

#line {
  height: 1vh;
  background-color: #0f5c2f;
}
</style>
