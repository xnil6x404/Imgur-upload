# imgur upload

A Node.js package to imgur upload

## Installation

```bash
const { uploadFromUrl } = require('xnil-imgur-upload');

uploadFromUrl('https://i.imgur.com/NQMSlzX.jpeg')
  .then(link => console.log('Uploaded to Imgur:', link))
  .catch(err => console.error('Upload failed:', err));
