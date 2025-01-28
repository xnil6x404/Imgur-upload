# ytdl-cloudinary-uploader

A Node.js package to download YouTube videos and upload them to Cloudinary.

## Installation

```bash
const uploadYoutubeVideo = require('ytdl-cloudinary-uploader');

(async () => {
    const result = await uploadYoutubeVideo('https://www.youtube.com/watch?v=example');
    console.log(result);
})();```
