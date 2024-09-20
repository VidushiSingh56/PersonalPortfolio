
const text = document.querySelector(".text2");

const textLoad= () =>{
  setTimeout(() =>{
    text.textContent = "App Developer";
  }, 0);
  setTimeout(() =>{
    text.textContent = "UI/UX Designer";
  }, 4000);
  setTimeout(() =>{
    text.textContent = "Programmer";
  },8000);
}

textLoad();
setInterval(textLoad, 12000);


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('.navbar li a');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.navbar li a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };


// Select all navigation links
let sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar li a');

// Attach a click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        
        // Get the target section element
        const targetSection = document.getElementById(targetId);

        // Calculate the target scroll position
        const targetOffset = targetSection.offsetTop;

        // Animate scrolling to the target position

        if (targetId === 'skills') {
          // Add your custom scrolling behavior here
          // Example: scroll to the target position over a longer duration
          window.scrollTo({
              top: targetOffset+300,
              behavior: 'smooth',
              // Example duration in milliseconds
          });
        }else{window.scrollTo({
          top: targetOffset-65,
          behavior: 'smooth'
      });}
        

        // Add 'active' class to the clicked link
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});


let threshold = 50;
window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          
          let offset ;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');
          if(id === 'skills')
          {
            offset = sec.offsetTop + 280;
          }
          else{
            offset = sec.offsetTop - 100;
          }
         
          if(top >= offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('.navbar li a[href*=' + id + ']').classList.add('active');
              });

              if (top <= threshold && document.getElementById('landing')) {
                // Change the background color of the navbar
                document.querySelector('.navbar').style.transition = 'background-color 0.3s';
                document.querySelector('.navbar').style.backgroundColor = 'transparent';
            } else {
                // Reset the background color for other sections
                document.querySelector('.navbar').style.transition = 'background-color 0.3s';
                document.querySelector('.navbar').style.backgroundColor = ' #0000006e';
            }
            scrollDistance= top;
          };
          
      });
  };

  
  document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.querySelector('.main');
    const sections = document.querySelectorAll('.navbar, .landing, .home');

    function checkScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight / 2);
            
            if (isVisible) {
                section.classList.add('reveal');
            }
        });

        // Toggle background color based on the visibility of the landing section
        const landingSection = document.querySelector('.landing');
        const landingRect = landingSection.getBoundingClientRect();
        const isLandingVisible = (landingRect.top <= window.innerHeight / 2);

        if (isLandingVisible) {
            mainContainer.style.backgroundColor = 'initial'; // Change to the desired color
        } else {
            mainContainer.style.backgroundColor = 'black'; // Initial color
        }
    }

    // Initial check when the page loads
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});



    document.addEventListener('DOMContentLoaded', function () {
        // Select the target element
        const aboutSection = document.querySelector('.about');

        // Set up the Intersection Observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // If the section is in the viewport, add the 'show' class
                    aboutSection.classList.add('show');
                }
            });
        }, { threshold: 0.4 }); // Adjust the threshold based on your preference

        // Start observing the target element
        observer.observe(aboutSection);
    });




// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//     let x = e.pageX;
//     let y = e.pageY;

//     cursor.style.top = y - cursor.offsetHeight / 2 + "px";
//     cursor.style.left = x - cursor.offsetWidth / 2 + "px";
// });



const cursor = document.querySelector(".cursor");
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
const multiplier = 0.08; // Adjust this value for smoother or faster movement

document.addEventListener("mousemove", (e) => {
    const targetX = e.clientX;
    const targetY = e.clientY;

    const dx = targetX - cursorX;
    const dy = targetY - cursorY;

    cursorX += dx * multiplier;
    cursorY += dy * multiplier;

    cursor.style.top = cursorY + "px";
    cursor.style.left = cursorX + "px";
});

document.addEventListener("scroll", () => {
    cursor.style.display = "block"; // Display the cursor on scroll
});
















// const cursor = document.querySelector(".cursor");
// const textElements = document.querySelectorAll(".hover-effect");

// document.addEventListener("mousemove", (e) => {
//     let x = e.pageX;
//     let y = e.pageY;

//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
// });

// textElements.forEach((textElement) => {
//     textElement.addEventListener("mouseover", () => {
//         cursor.classList.add("hovered");
//     });

//     textElement.addEventListener("mouseout", () => {
//         cursor.classList.remove("hovered");
//     });
// });










// $(document).mousemove(function (e) {
//     $(".cursor").css({
//         left: e.pageX - 20, // Adjust as needed
//         top: e.pageY - 20  // Adjust as needed
//     });
// });



    // document.addEventListener('DOMContentLoaded', function () {
    //     Select the target element
    //     const aboutSection = document.querySelector('.about');
    
    //     Set up the Intersection Observer
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 If the section is in the viewport, add the 'show' class
    //                 aboutSection.classList.add('show');
    //             }
    //         });
    //     }, { threshold: 0.4 }); // Adjust the threshold based on your preference
    
    //     Start observing the target element
    //     observer.observe(aboutSection);
    // });
    







    document.addEventListener('DOMContentLoaded', function () {
        // Select the target element
        const projectSection = document.querySelector('.project');

        // Set up the Intersection Observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // If the section is in the viewport, add the 'show' class
                    projectSection.classList.add('show');
                }
            });
        }, { threshold: 0.4 }); // Adjust the threshold based on your preference

        // Start observing the target element
        observer.observe(projectSection);
    });
    document.addEventListener('DOMContentLoaded', function () {
        // Select the target element
        const skillsSection = document.querySelector('.skills');

        // Set up the Intersection Observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // If the section is in the viewport, add the 'show' class
                    skillsSection.classList.add('show');
                }
            });
        }, { threshold: 0.5}); // Adjust the threshold based on your preference

        // Start observing the target element
        observer.observe(skillsSection);
    });
    document.addEventListener('DOMContentLoaded', function () {
        // Select the target element
        const contactSection = document.querySelector('.contact');

        // Set up the Intersection Observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // If the section is in the viewport, add the 'show' class
                    contactSection.classList.add('show');
                }
            });
        }, { threshold: 0.4 }); // Adjust the threshold based on your preference

        // Start observing the target element
        observer.observe(contactSection);
    });



