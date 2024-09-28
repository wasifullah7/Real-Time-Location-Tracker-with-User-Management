This project is a real-time location tracking application that allows users to share and visualize their current locations on a map. Built with a focus on user interactivity, this application enables users to update their names, track distances traveled, and ping their current locations. The real-time updates are facilitated using WebSocket technology, ensuring seamless communication between clients and the server. The map is powered by the Leaflet library, which provides an intuitive interface for viewing user positions.

Features

Real-Time Location Sharing: Users can see each other’s locations in real-time.

Distance Tracking: Calculates and displays the distance traveled by each user.

User Name Management: Users can update their names, which are reflected on the map.

Ping Location Button: Allows users to manually update and share their current location.

Modal Interface: Easy-to-use modal for updating user information.

Technologies Used

Node.js: Backend server for handling WebSocket connections and HTTP requests.

Express.js: Web framework for building the server-side application.

Socket.IO: Library for real-time web applications, enabling bi-directional communication between clients and the server.

Leaflet.js: JavaScript library for interactive maps, used to display user locations.

EJS: Template engine for rendering HTML views.

Installation

Clone the repository: git clone <repository-url>

Navigate into the project directory: cd <project-directory>

Install dependencies: npm install

Start the server: npm start or npm run dev

Open your browser and go to http://localhost:3000.

Contributing

Contributions are welcome! Feel free to open issues, submit pull requests, or suggest new features.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
