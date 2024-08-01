/* eslint-disable no-console */
import { createServer } from 'http';

import express from 'express';
import next, { NextApiHandler } from 'next';
import { Server } from 'socket.io';
import {exec} from 'child_process';

const appi = express();


import type {
  ClientToServer,
  ServerToClient,
} from '../common/types/socket.type';

import { SocketServer } from './SocketServer';

const port = parseInt(process.env.PORT || '3001', 10);
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

appi.get("/start-server", (req, res) => {
  exec('nodemon src/games/ballzone/server/index.ts', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting server: ${stderr}`);
      res.status(500).send('Failed to start server');
      return;
    }
    console.log(`Server started: ${stdout}`);
    res.send('Server started successfully');
  });
});

nextApp.prepare().then(async () => {
  const app = express();
  const server = createServer(app);

  // eslint-disable-next-line no-new
  new SocketServer(new Server<ClientToServer, ServerToClient>(server));

  app.all('*', (req: any, res: any) => nextHandler(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});