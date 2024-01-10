const text = document.querySelector(".text2");

const textLoad= () =>{
  setTimeout(() =>{
    text.textContent = "Web Developer";
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
