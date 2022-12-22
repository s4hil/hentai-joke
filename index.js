var usbDetect = require('usb-detection');
const sound = require("sound-play");



function playAddSound(){
    const path = require("path");
    const filePath = path.join(__dirname, "/audio/add.mp3");
    sound.play(filePath);
    console.log("Thing inserted!")
}

function playRemoveSound(){
    const path = require("path");
    const filePath = path.join(__dirname, "/audio/remove.mp3");
    sound.play(filePath);
    console.log("Thing removed!")
}

usbDetect.startMonitoring();

usbDetect.on('add', function(device) {
        console.log('add', device);
        playAddSound();
    });
usbDetect.on('add:vid', function(device) {
    console.log('add', device); 
    playAddSound();
});
usbDetect.on('add:vid:pid', function(device) {
    console.log('add', device); 
    playAddSound();
});

usbDetect.on('remove', function(device) {
    console.log('remove', device);
    playRemoveSound();
});
usbDetect.on('remove:vid', function(device) {
    console.log('remove', device); 
    playRemoveSound();
});
usbDetect.on('remove:vid:pid', function(device) {
    console.log('remove', device); 
    playRemoveSound();
});




