document.querySelector('.flyer').addEventListener('mousemove', (e) => {
    const flyer = e.currentTarget;
    const rect = flyer.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
  
    flyer.style.transform = `rotateY(${x / 50}deg) rotateX(${y / -50}deg)`;
  });
  
  document.querySelector('.flyer').addEventListener('mouseleave', (e) => {
    e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
  // Function to open the modal
function openModal(imgElement) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  
  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Add click listeners to all images
const galleryImages = document.querySelectorAll(".image-grid img");
galleryImages.forEach(img => img.addEventListener("click", () => openModal(img)));

