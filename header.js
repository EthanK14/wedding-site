// Load the shared hero and navigation, then connect the menu button.
async function loadHeader() {
  const container = document.getElementById("site-header");

  try {
    const response = await fetch("header.html");
    if (!response.ok) {
      throw new Error(`Header request failed: ${response.status}`);
    }

    container.innerHTML = await response.text();

    const button = container.querySelector(".hamburger");
    const links = container.querySelector("#myLinks");

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      links.style.display = isOpen ? "none" : "block";
      button.classList.toggle("open", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  } catch (error) {
    console.error("Unable to load the shared header.", error);
    const homeLink = document.createElement("a");
    homeLink.href = "index.html";
    homeLink.textContent = "Home";
    container.replaceChildren("Navigation could not be loaded. ", homeLink);
  }
}

loadHeader();
