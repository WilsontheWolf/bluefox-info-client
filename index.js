const fetch = require('node-fetch');

/**
 * Send data to the info server.
 * @param {String[]|String} data - The data to send.
 * @param {string} [port] - The port to send to. If not provided it will attempt to get it from the ENV variable.
 * @returns {Promise.<String>} The message from the server.
 * @example
 * const bluefox = require('bluefox-info');
 *
 * bluefox.send(['hello', 'world']);
 */
module.exports.send = async (data, port = process.env.BLUEFOX_PORT) => {
    if(!port) throw new Error('Unable to find port!');
    if(!Array.isArray(data)) data = [data];
    const res = await (await fetch(`http://127.0.0.1:${port}/`, { method: 'POST', body: JSON.stringify(data) })).json();
    if(res.error) throw new Error(`The server threw an error:\n${res.message}.`);
    else return res.message;
};

/**
 * Get data from the info server.
 * @param {string} [port] - The port to send to. If not provided it will attempt to get it from the ENV variable.
 * @returns {Promise.<String[]>} The message from the server.
 * @example
 * const bluefox = require('bluefox-info');
 *
 * bluefox.get().then(result => {
 *     console.log(result)
 * });
 */
module.exports.get = async (port = process.env.BLUEFOX_PORT) => {
    if (!port) throw new Error('Unable to find port!');
    const res = await fetch(`http://127.0.0.1:${port}/`);
    if (!res.ok) throw new Error(`The server returned ${res.status}.`);
    else return await res.json();
};