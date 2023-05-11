const WebSocket = require('ws');
const wsClients = require('@models/WsClients');
const SocketServer = require('ws').Server;

module.exports = (server) => {
    const wsServer = new SocketServer({ server });

    wsServer.on('connection', async (ws, req) => {
        if (req.url === '/logs') {
            wsClients.add(ws);

            ws.on('error', () => {
                ws.close();
            });

            ws.on('close', () => {
                wsClients.remove(ws);
            });
        }
    });
};