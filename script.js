/***********************
 * Slideshow: Extras Page
 ***********************/
const images = [
  "images/gym1.jpg",
  "images/gym2.jpg",
  "images/gym3.jpg"
];

let currentSlide = 0;

function showNextSlide() {
  const slide = document.getElementById("slide");
  if (slide) {
    currentSlide = (currentSlide + 1) % images.length;
    slide.src = images[currentSlide];
  }
}

setInterval(showNextSlide, 3000); // Rotate every 3 seconds

/***********************
 * Rotating Testimonials
 ***********************/
const quotes = [
  '"This gym changed my life!" – Alex M.',
  '"Clean and friendly staff!" – Jamie R.',
  '"Best place for group workouts." – Chris T.',
  '"Affordable and effective plans." – Dana P.',
  '"Love the atmosphere!" – Malik W.'
];

let quoteIndex = 0;

function rotateTestimonials() {
  const testimonial = document.getElementById("testimonial");
  if (testimonial) {
    testimonial.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }
}

setInterval(rotateTestimonials, 4000); // Change quote every 4 seconds

/***********************
 * Form Validation: Membership Page
 ***********************/
function validateForm() {
  const requiredFields = [
    "fullname", "email", "phone", "address", "dob",
    "plan", "card", "expiry", "cvv"
  ];

  for (let i = 0; i < requiredFields.length; i++) {
    const field = document.getElementById(requiredFields[i]);
    if (!field || field.value.trim() === "") {
      alert("Please complete all required fields.");
      field.focus();
      return false;
    }
  }

  const card = document.getElementById("card").value;
  if (card.length !== 16 || isNaN(card)) {
    alert("Please enter a valid 16-digit card number.");
    return false;
  }

  const cvv = document.getElementById("cvv").value;
  if (cvv.length !== 3 || isNaN(cvv)) {
    alert("Please enter a valid 3-digit CVV.");
    return false;
  }

  const terms = document.getElementById("terms");
  if (!terms.checked) {
    alert("You must agree to the terms and conditions.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
