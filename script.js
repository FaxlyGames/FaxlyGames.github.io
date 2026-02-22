function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function showSection(id) {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.getElementById("menu").classList.remove("show");
}