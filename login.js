// document.addEventListener('DOMContentLoaded', function() { 
//     var icon = document.querySelector('#togglePassword'); 
//     icon.addEventListener('click', function() { 
//       console.log('Icon clicked'); // Log when the icon is clicked 
//       var currentSrc = icon.getAttribute('src'); 
//       console.log('Current src:', currentSrc); // Log current src 
//       if (currentSrc === 'eyeopen24.svg') { 
//         icon.setAttribute('src', 'eyeclose24.svg');
//       } 
//       else { icon.setAttribute('src', 'eyeopen24.svg'); 
  
//       } 
//       console.log('New src:', icon.getAttribute('src')); 
//       });
//     });

document.addEventListener('DOMContentLoaded', function() { 
  var icon = document.querySelector('#togglePassword'); 
  var input = document.querySelector('#form3Example4'); 

  icon.addEventListener('click', function() { 
      console.log('Icon clicked'); // Log when the icon is clicked 
      var currentSrc = icon.getAttribute('src'); 
      console.log('Current src:', currentSrc); // Log current src 
      if (currentSrc === 'eyeopen24.svg') { 
          icon.setAttribute('src', 'eyeclose24.svg');
          input.setAttribute('type', 'password'); // Restore type attribute to 'password'
      } else { 
          icon.setAttribute('src', 'eyeopen24.svg'); 
          input.removeAttribute('type'); // Remove type attribute
      } 
      console.log('New src:', icon.getAttribute('src')); 
  });
}); 
