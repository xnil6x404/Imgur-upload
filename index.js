const axios = require('axios');
const CLIENT_ID = 'd2a85ecb5a65923';

async function uploadFromUrl(imageUrl) {
  try {
    const response = await axios.post(
      'https://api.imgur.com/3/upload',
      new URLSearchParams({
        image: imageUrl,
        type: 'url',
      }),
      {
        headers: {
          'Authorization': `Client-ID ${CLIENT_ID}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  
    if (response.status === 200) {  
      console.log('Upload successful:', response.data.data.link); // Get the Imgur link  
      return response.data.data.link;  
    } else {  
      throw new Error(`Error uploading to Imgur: ${response.statusText}`);  
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
