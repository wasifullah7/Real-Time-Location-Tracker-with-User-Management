if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('send-location', { latitude, longitude });
    }, (error) => {
        console.error(error);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    });
}

// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);


const markers ={};