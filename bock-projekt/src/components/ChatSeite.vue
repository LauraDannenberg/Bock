
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
        { id: 1, name: 'Pauline Musterfrau', newMessage: true, profilbild: 'Yoga.png'},
        { id: 2, name: 'Max Musterman', newMessage: false, profilbild: 'Stift.png'},
        { id: 3, name: 'Chris Musterperson', newMessage: false, profilbild: 'Stift.png'},
        { id: 4, name: 'Dieter Bohlen', newMessage: false, profilbild: 'Yoga.png'}
      ]
    };
  },
  methods: {
    goToChatDetail(id){
      this.$router.push({ name: 'Pauline Musterfrau', params: { id }});
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
