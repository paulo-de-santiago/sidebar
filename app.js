const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn?.addEventListener("click", function () {
  sidebar?.classList.toggle("show-sidebar");
  //console.log(sidebar?.classList);
  /* Side bar removing and adding manually */
  /*   if (sidebar?.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar?.classList.add("show-sidebar");
  } */
});
// CSS adds the sidebar by default and then toggles it in js to remove it
closeBtn?.addEventListener("click", function () {
  sidebar?.classList.remove("show-sidebar");
});
