/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Get the modals and images
var modal1 = document.getElementById("modalProject1");
var modal2 = document.getElementById("modalProject2");
var modal3 = document.getElementById("modalProject3");
var modal4 = document.getElementById("modalProject4");
var modal5 = document.getElementById("modalProject5");
var modal6 = document.getElementById("modalProject6");

var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var project4 = document.getElementById("project4");
var project5 = document.getElementById("project5");
var project6 = document.getElementById("project6");

// When the user clicks an image, open the corresponding modal
project1.onclick = function() {
  modal1.style.display = "block";
}

project2.onclick = function() {
  modal2.style.display = "block";
}

project3.onclick = function() {
  modal3.style.display = "block";
}

project4.onclick = function() {
  modal4.style.display = "block";
}

project5.onclick = function() {
  modal5.style.display = "block";
}

project6.onclick = function() {
  modal6.style.display = "block";
}

// Get all close buttons
var closeButtons = document.getElementsByClassName("close");

// Close the modal when the user clicks on the close button
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
    var modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "none";
  }
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}
const titles = [
  "DevOps Engineer",
  "Software Engineer",
  "Tech Enthusiast",
  "Cloud Architect"
];

let titleIndex = 0; // Index to track the current title
let charIndex = 0; // Index to track the character being typed
let currentTitle = ""; // Current title being typed
let isDeleting = false; // Flag to check if deleting

function animateTitle() {
  const animatedTitleElement = document.querySelector('.animated-title');

  // Check if we are deleting the text
  if (isDeleting) {
      currentTitle = titles[titleIndex].substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
      }
  } else {
      currentTitle = titles[titleIndex].substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === titles[titleIndex].length) {
          isDeleting = true;
      }
  }

  animatedTitleElement.textContent = currentTitle;

  // Set the typing speed and delete speed
  const typingSpeed = isDeleting ? 100 : 200;
  
  setTimeout(animateTitle, typingSpeed);
}

// Start the animation
animateTitle();
// JavaScript to handle the form submission
document.getElementById("submit").addEventListener("click", function () {
  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate form fields
  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Create a professional subject and body
  const subject = `Request to Connect: Inquiry from ${name}`;
  const body = `
Dear Pradip,

I hope this message finds you well. My name is ${name}, and I am reaching out to express my interest in connecting with you. Below are the details of my inquiry:

Name: ${name}
Email: ${email}

Message:
${message}

I look forward to hearing from you and discussing further opportunities to connect. Please feel free to reach out to me via email.

Best regards,
${name}
  `.trim();

  // Generate the mailto link
  const mailtoLink = `mailto:prb5928@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the mailto link
  window.location.href = mailtoLink;
});


