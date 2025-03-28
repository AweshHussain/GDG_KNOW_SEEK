function toggleProfileDropdown() {
    document.getElementById("profileDropdown").classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.profile img')) {
        var dropdowns = document.getElementsByClassName("profile-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
  // Get both videos
  let video1 = document.getElementById("video1");


  // When first video ends, start the second video
  video1.addEventListener("ended", function() {
      video1.style.display = "none";  // Hide first video
  });