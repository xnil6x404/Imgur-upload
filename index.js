const ytdl = require('@distube/ytdl-core');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || 'dixnwu365',
    api_key: process.env.API_KEY || '537711188667524',
    api_secret: process.env.API_SECRET || 'OX-FdFO0kQgaEEhVkz4Xag0F6Qo'
});

async function uploadYoutubeVideo(videoUrl) {
    if (!videoUrl) {
        throw new Error('Please provide a YouTube video URL.');
    }

    try {
        const basicInfo = await ytdl.getBasicInfo(videoUrl);
        const title = basicInfo.videoDetails.title;

        const tempFilePath = path.join(__dirname, `${title.replace(/[^a-zA-Z0-9]/g, '_')}.mp4`);

        const videoStream = ytdl(videoUrl, { quality: 'highest', filter: 'audioandvideo' });
        const writeStream = fs.createWriteStream(tempFilePath);

        videoStream.pipe(writeStream);

        await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });

        const uploadResponse = await cloudinary.uploader.upload(tempFilePath, {
            resource_type: 'video',
            public_id: title.replace(/[^a-zA-Z0-9]/g, '_')
        });

        fs.unlinkSync(tempFilePath);

        return {
            title: title,
            url: uploadResponse.secure_url
        };
    } catch (error) {
        throw new Error('An error occurred while processing the video.');
    }
}

module.exports = uploadYoutubeVideo;
