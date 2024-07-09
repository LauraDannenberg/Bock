<template>
  <div>
    <div class="chat-list">
      <div v-for="chat in chats" :key="chat.id" class="chat-item" @click="goToChatDetail(chat.id)">
        <div class="avatar">
          <img class="img-fluid" :src="require(`@/assets/${chat.profilbild}`)" alt="">
        </div>
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
        {
          id: 1,
          name: 'Chat 1',
          profilbild: 'Lupe.png',
          newMessage: false//true
        },
        {
          id: 2,
          name: 'Chat 2',
          profilbild: 'Lupe.png',
          newMessage: false
        },
        {
          id: 3,
          name: 'Chat 3',
          profilbild: 'Lupe.png',
          newMessage: false//true
        },
        {
          id: 4,
          name: 'Chat 4',
          profilbild: 'Lupe.png',
          newMessage: false
        }
      ]
    };
  },
  methods: {
    goToChatDetail(id) {
      this.$router.push({ name: 'ChatDetail', params: { id } });
    }
  }
};
</script>

<style scoped>
.chat-list {
  padding: 20px;
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
  cursor: pointer;
}

.avatar {
  width: 5vh;
  height: 5vh;
  background-color: #ffffff;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar img {
  margin-left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
