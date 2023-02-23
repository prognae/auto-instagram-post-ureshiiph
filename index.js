require('dotenv').config()
// const { IgApiClient } = require('instagram-private-api');
// const { PublishService } = require('instagram-private-api');
// const { get } = require('request-promise');

// const photoPaths = ['/path/to/photo1.jpg', '/path/to/photo2.jpg', '/path/to/photo3.jpg'];

// const postImage = async() => {
//     const ig = new IgApiClient();
//     ig.state.generateDevice(process.env.IG_USERNAME);
//     await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD)

//     const imageBuffer = await get({
//         url: 'https://res.cloudinary.com/ddk9lffn7/image/upload/v1675783791/mang-hiram-seller-pictures/amskzagnwkalefievyf0.jpg',
//         encoding: null
//     })

//     const imageBuffer2 = await get({
//         url: 'https://res.cloudinary.com/ddk9lffn7/image/upload/v1675783879/mang-hiram-seller-pictures/ckvgxgb0nh1hno7borkz.jpg',
//         encoding: null
//     })

//     await ig.publish.photo({
//         file: imageBuffer,
//         caption: 'Magaling2'
//     })
    
//     console.log('Image Uploaded')
// }

// postImage()

const postCarousel = async() => {
    const { IgApiClient } = require('instagram-private-api');
    const fs = require('fs');
    const request = require('request-promise');

    // create an instance of the Instagram Private API client
    const ig = new IgApiClient();

    // login to Instagram
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD)

    // create an array of image URLs
    const photos = [
        './images/sans2.jpg',
        './images/eris2.jpg'
      ];

    // download the images and upload them to Instagram
    const albumOptions = {
        caption: 'Your album caption',
        items: [],
      };
      
      for (const photo of photos) {        
        albumOptions.items.push({
          
            file: await fs.readFileSync(photo),
          
        });
      }
      
      const album = await ig.publish.album(albumOptions);
}

postCarousel()




