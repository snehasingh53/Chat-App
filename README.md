# Chat App - React, Node, MySql


## Created by: Sneha Singh

<hr>

## App Functional requirenments

#### Basic functionality

A public chat room where users log in with a nickname and go straight to the chat. They will:

● send messages to the public chat room

● receive new messages in the public chat room while connected

● each user would have an random colored avatar by his message in the chat.

#### UX/UI

● The design should be responsive and fill the
available screen space (i.e. stretched layout not boxed layout).

● Tailwind css

#### Future implementation 

● see the last 10 messages (prior to the connection / entering the public chat room)

● Connect to MySql DB

● Deploy to production server



## Tech Stack

- Client: React + Tailwind
- Server: Express (Node)
- DB: MySql with ORM (Sequelize)

<hr>

## Getting Started

### Development mode

```bash
cd server-chat-app
npm run dev
```

The script above will automaticly run both client and server, using the 'concurrently' package. Alternatively you can run them seperatly by the following scripts:

- For the Client

```bash
npm run client
```

- For the Server

```bash
npm start
```

- ports

  Client: http://localhost:3005

  Server: http://localhost:3002
