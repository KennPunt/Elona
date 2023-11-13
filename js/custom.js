document.addEventListener('DOMContentLoaded', function() {
    let tiltify = new Tiltify(
      document.querySelectorAll(".tilt"), {
        max: 30,
        perspective: 1000,
        speed: 300
      }
    );
    console.log('test');
  });