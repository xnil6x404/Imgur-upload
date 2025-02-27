# imgur upload

A Node.js package to imgur-upload upload

## Installation

```bash
const { uploadFromUrl } = require('imgur-upload');

uploadFromUrl('https://i.imgur.com/NQMSlzX.jpeg')
  .then(link => console.log('Uploaded to Imgur:', link))
  .catch(err => console.error('Upload failed:', err));
