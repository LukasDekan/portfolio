// IMAGE PRELOAD 
function preloadImages(imageUrls) {
    const preloadedImages = [];
    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        preloadedImages.push(img);
    });
    console.log("Images preloaded:", imageUrls);
};  
document.addEventListener('DOMContentLoaded', function () {
    // List of image paths to preload
    const imagePaths = [
        
    ];
},

    // Preload images
    preloadImages(imagePaths)
)