// Menu toggle
function toggleOpen() {
   // Display section1 and section2
   document.getElementById("section1").style.display = "block";
   document.getElementById("section2").style.display = "flex";
   // Hide the open button and show the close button
   document.getElementById("open").style.display = "none";
   document.getElementById("close").style.display = "block";
}

function toggleClose() {
   // Hide section1 and section2
   document.getElementById("section1").style.display = "none";
   document.getElementById("section2").style.display = "none";
   // Hide the close button and show the open button
   document.getElementById("open").style.display = "block";
   document.getElementById("close").style.display = "none";
}
// Login handler function 
function loginHander(e) {
   e.preventDefault(); // Prevents form submission
   const userName = "admin@admin.com";
   const pwd = 123456;
   const name = document.getElementById("email").value;
   let password = parseInt(document.getElementById("pwd").value);
   if (name === userName && password === pwd) {
       alert("Login successful");
   } else {
       alert("Incorrect email or password");
   }
   // Reset input fields after submission
   document.getElementById("email").value = "";
   document.getElementById("pwd").value = "";
}
document.addEventListener('DOMContentLoaded', function() {
   const slides = document.querySelector('.slides');
   const prevBtn = document.querySelector('.prev');
   const nextBtn = document.querySelector('.next');
   let slidesToShow = 4;
   // let slideWidth = 400; 
   // Function to show slides
   function showSlide(index, count) {
       if (index < 0) {
           index = 0;
       } else if (index > slides.children.length - slidesToShow) {
           index = slides.children.length - slidesToShow;
           console.log("bbbb", index);
       }
       let countb = count * 300;
       slides.style.transform = `translateX(${-index * countb+10}px)`;
       index = 0
       // count=0
   }
   let count = 1
   let currentIndex = 0;
   // Event listener for next button
   nextBtn.addEventListener('click', function() {
       if (count > 16) {
           count = 0
           currentIndex = 0;
       }
       showSlide(currentIndex + 1, count++);
   });
   // Event listener for previous button
   prevBtn.addEventListener('click', function() {
       if (currentIndex <= 0) {
           prevBtn.setAttribute('disabled', 'true');
       }
       prevBtn.removeAttribute('disabled');
       showSlide(currentIndex - 1, count >= 0 ? 0 : count--);
   })
   // Initial setup
   // Update slide width and adjust slides on window resize
   window.addEventListener('resize', function() {
       //   calculateSlideWidth();
       showSlide(currentIndex);
   });
});