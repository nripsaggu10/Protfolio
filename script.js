function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  // Add event listener to close the menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-links') && !event.target.closest('.hamburger-icon')) {
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  });
  
  // Toggle the menu and icon classes
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}