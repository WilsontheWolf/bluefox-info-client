# BlueFox Info Client
A node module for sending stats for 
the (upcoming) BlueFox panel.

## Running
First install the module using yarn or
npm
```bash
yarn add bluefox-info
# or
npm install bluefox-info
```

## Usage
### Sending
To send use the send method. It takes an array
or string.
```js
const bluefox = require('bluefox-info');

bluefox.send(['hello', 'world']);
```
### Getting
To get use the get method. It returns an promise 
with an array.
or string.
```js
const bluefox = require('bluefox-info');

bluefox.get().then(result => {
    console.log(result)
});
```