function ping(req, res) {
    return res.json({ ping: 'pong' });
}

module.exports = {
    ping
};