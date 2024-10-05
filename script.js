// Initial setup
let chatbot = document.getElementById('chatbot');
let selectedService = '';
let dimensions = '';
let totalCost = 0;

// Start the quoting process when a service is selected from the service buttons
function startQuote(service) {
    selectedService = service;
    document.getElementById('services').style.display = 'none';
    document.getElementById('quote').style.display = 'block';

    // Start the chatbot interaction after a service is selected
    chatbot.innerHTML = `
        <p>You selected: ${service}. Please enter the dimensions (length x width in meters):</p>
        <input type="text" id="dimensions" placeholder="Enter dimensions (e.g., 10x20)">
        <button onclick="calculateQuote()">Get Quote</button>
    `;

    // Show chatbot for interaction
    chatbot.style.display = 'block';
}

// Function to calculate the quote based on the service and dimensions entered
function calculateQuote() {
    dimensions = document.getElementById('dimensions').value;
    const [length, width] = dimensions.split('x').map(Number);

    // Pricing logic for different services
    switch (selectedService) {
        case 'Roof Cleaning':
            totalCost = length * width * 7; // Price per square meter for roof cleaning
            break;
        case 'Driveway Cleaning':
            totalCost = length * width * 5; // Price per square meter for driveway cleaning
            break;
        case 'Deck Cleaning':
            totalCost = length * width * 4; // Price per square meter for deck cleaning
            break;
        case 'Graffiti Removal':
            totalCost = length * width * 6; // Price per square meter for graffiti removal
            break;
        default:
            totalCost = 0;
    }

    // Display the quote result
    chatbot.innerHTML = `
        <p>Your estimated cost for ${selectedService} is $${totalCost.toFixed(2)}. Would you like to book this service?</p>
        <button onclick="bookService()">Yes</button>
        <button onclick="resetChat()">No</button>
    `;
}

// Function to handle booking process
function bookService() {
    chatbot.innerHTML = `
        <p>Please provide your details to confirm the booking:</p>
        <input type="text" id="name" placeholder="Your Name">
        <input type="text" id="phone" placeholder="Your Phone Number">
        <input type="text" id="address" placeholder="Your Address">
        <button onclick="confirmBooking()">Confirm Booking</button>
    `;
}

// Function to confirm the booking and display a confirmation message
function confirmBooking() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    chatbot.innerHTML = `
        <p>Thank you, ${name}! Your booking for ${selectedService} is confirmed.</p>
        <p>We'll contact you shortly at ${phone} and will service your location at ${address}.</p>
    `;
}

// Function to reset the chatbot and start over
function resetChat() {
    chatbot.innerHTML = `
        <p>Welcome to Huon Valley Pressure Washing! How can we assist you today? Please select a service:</p>
        <button onclick="startQuote('Roof Cleaning')">Roof Cleaning</button>
        <button onclick="startQuote('Driveway Cleaning')">Driveway Cleaning</button>
        <button onclick="startQuote('Deck Cleaning')">Deck Cleaning</button>
        <button onclick="startQuote('Graffiti Removal')">Graffiti Removal</button>
    `;

    // Reset the services and quote sections
    document.getElementById('services').style.display = 'block';
    document.getElementById('quote').style.display = 'none';

    // Hide chatbot interaction
    chatbot.style.display = 'none';
}