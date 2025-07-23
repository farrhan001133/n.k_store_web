AOS.init();

function openModal(title, imgSrc, desc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalImage').src = imgSrc;
  document.getElementById('modalDesc').innerText = desc;

  // Apna WhatsApp number daalo
  const whatsappNumber = '917877607030'; 
  const message = encodeURIComponent(`Hi, I'm interested in: ${title}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  document.getElementById('whatsappBtn').href = whatsappLink;

  document.getElementById('productModal').style.display = "block";
}

function closeModal() {
  document.getElementById('productModal').style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById('productModal');
  if (event.target == modal) {
    closeModal();
  }
}



