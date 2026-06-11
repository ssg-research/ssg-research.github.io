// Mobile navbar toggle — replaces the Bootstrap collapse plugin.
// The existing .navbar-toggler / #navbarNav markup and classes are kept so
// Bootstrap's CSS still styles the collapsed and expanded states; this only
// supplies the show/hide behaviour the plugin used to provide.
document.querySelector(".navbar-toggler")?.addEventListener("click", function () {
  document.getElementById("navbarNav")?.classList.toggle("show");
});
