// Function to open the adoption form and prefill the pet's name
function openAdoptForm(petName) {
    document.getElementById('pet').value = petName;
    window.scrollTo(0, document.getElementById('adopt-form').offsetTop);
  }
  
  // Form submission logic
  function submitForm(event) {
    event.preventDefault();  // Prevent default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pet = document.getElementById('pet').value;
    const message = document.getElementById('message').value;
  
    // Simple form submission simulation
    alert(`Thank you for your application, ${name}! We will contact you shortly regarding the adoption of ${pet}.`);
  
    // Clear the form fields
    document.getElementById('form').reset();
  }
  
