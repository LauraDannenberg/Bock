const WebSocket = require('ws');
const url = require('url');
//const { writeToDB, getFromDB, getID } = require('./db'); // Adjust the path as necessary

const server = new WebSocket.Server({ port: 4000 });
const chatRooms = {}; // Store clients by chat ID

server.on('connection', async (ws, req) => {
  const params = url.parse(req.url, true);
  const chatId = params.query.chatId;
  const username = params.query.username;

  if (!chatId || !username) {
    ws.close(1008, 'Chat ID and username are required');
    return;
  }

  if (!chatRooms[chatId]) {
    chatRooms[chatId] = new Set();
  }

  chatRooms[chatId].add({ ws, username });

  console.log(`${username} connected to chat ${chatId}`);

  // Load previous messages
  /*
  const messages = await getFromDB(`chat-${chatId}`, 0);
  if (messages) {
    messages.forEach(message => {
      ws.send(JSON.stringify(message));
    });
  }
    */

  ws.on('message', async (message) => {
    console.log(`${username} in ${chatId}: ${message}`);
    const messageData = { username, message };

    //const messageId = await getID(`chat-${chatId}`);
    //await writeToDB(`chat-${chatId}`, messageId, messageData);

    chatRooms[chatId].forEach(client => {
      if (client.ws.readyState === WebSocket.OPEN) {
        client.ws.send(JSON.stringify(messageData));
      }
    });
  });

  ws.on('close', () => {
    console.log(`${username} disconnected from chat ${chatId}`);
    chatRooms[chatId].forEach(client => {
      if (client.ws === ws) {
        chatRooms[chatId].delete(client);
      }
    });

    // Clean up the chat room if empty
    if (chatRooms[chatId].size === 0) {
      delete chatRooms[chatId];
    }
  });
});

console.log('WebSocket server is running on ws://localhost:4000');