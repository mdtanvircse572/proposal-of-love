// JavaScript code for the "No" button functionality and image switching
let no = document.querySelector('#no');
let yes = document.getElementById('yes');
let sayNoContainer = document.getElementById('sayNoContainer');
let sayYesContainer = document.getElementById('sayYesContainer');
let secondImg = document.getElementById('secondImg');

let fontSize = 1;

// Function that runs when "No" button is clicked
function sayNo() {
    let displayImage = document.getElementById('fastImg');

    // Switches images in sequence based on the current displayed image
    if (displayImage.src.match('no/img_7.gif')) {
        displayImage.src = 'no/img_1.gif';
    } else if (displayImage.src.match('no/img_1.gif')) {
        displayImage.src = 'no/img_2.gif';
    } else if (displayImage.src.match('no/img_2.gif')) {
        displayImage.src = 'no/img_3.gif';
    } else if (displayImage.src.match('no/img_3.gif')) {
        displayImage.src = 'no/img_4.gif';
    } else if (displayImage.src.match('no/img_4.gif')) {
        displayImage.src = 'no/img_5.gif';
    } else if (displayImage.src.match('no/img_5.gif')) {
        displayImage.src = 'no/img_6.gif';
    } else if (displayImage.src.match('no/img_6.gif')) {
        displayImage.src = 'no/img_8.gif';
    } else if (displayImage.src.match('no/img_8.gif')) {
        displayImage.src = 'no/img_9.gif';
    } else if (displayImage.src.match('no/img_9.gif')) {
        displayImage.src = 'no/img_10.gif';
    } else if (displayImage.src.match('no/img_10.gif')) {
        displayImage.src = 'no/img_11.gif';
    } else if (displayImage.src.match('no/img_11.gif')) {
        displayImage.src = 'no/img_12.gif';
    } else {
        displayImage.src = 'no/img_7.gif';
    }

    // Changes the text of the "No" button in sequence
    if (no.innerText == 'No') {
        no.textContent = 'Oh no! are you sure?';
    } else if (no.innerText == 'Oh no! are you sure?') {
        no.textContent = 'Are you really sure?';
    } else if (no.innerText == 'Are you really sure?') {
        no.textContent = 'Are you really sure, huh?';
    } else if (no.innerText == 'Are you really sure, huh?') {
        no.textContent = 'Are you positive?';
    } else if (no.innerText == 'Are you positive?') {
        no.textContent = 'Say yes, please.';
    } else if (no.innerText == 'Say yes, please.') {
        no.textContent = 'Just think about it';
    } else if (no.innerText == 'Just think about it') {
        no.textContent = 'I will be very sad';
    } else if (no.innerText == 'I will be very sad') {
        no.textContent = "Okay, I'll stop asking...";
    } else if (no.innerText == "Okay, I'll stop asking...") {
        no.textContent = 'Just kidding, PLEASE SAY YES';
    } else if (no.innerText == 'Just kidding, PLEASE SAY YES') {
        no.textContent = 'You are breaking my heart :(';
    } else if (no.innerText == 'You are breaking my heart :(') {
        no.textContent = 'NO... I already said yes';
    } else {
        no.textContent = 'No';
    }

    // Increase the font size and adjust margin for the "Yes" button
    fontSize = fontSize + 0.5;
    yes.style.fontSize = `${fontSize}rem`;
    yes.style.marginRight = '20px';

    // Send a WhatsApp message when "No" is clicked
    window.open(`https://wa.me/01315667373?text=I%20don't%20love%20you!`, '_blank');
}

// Function that runs when "Yes" button is clicked
function sayYes() {
    let yesImages = ['yes/img_15.gif', 'yes/img_14.gif', 'yes/img_13.gif'];
    sayNoContainer.style.display = 'none'; // Hide the No container
    sayYesContainer.style.display = 'flex'; // Show the Yes container

    // Send a WhatsApp message when "Yes" is clicked
    window.open(`https://wa.me/+8801315667373?text=I%20love%20you!`, '_blank');

    // Randomly change the image in the "Yes" container every 800ms
    setInterval(() => {
        let random = Math.floor(Math.random() * 3);
        secondImg.src = yesImages[random];
    }, 800);
}
