const headers = [...document.getElementsByTagName("header")];

headers.forEach((header) => {
  const tags = header.getElementsByClassName("tag");
  const projectTag = tags[0];
  const myInfosTag = tags[1];

  const mySections = document.querySelectorAll(".showTags");
  mySections.forEach((section) => {
    if (section.dataset.value === "projects") {
      section.addEventListener("mouseenter", (e) => {
        projectTag.setAttribute("style", "display : block");
      });

      section.addEventListener("mouseleave", (e) => {
        projectTag.setAttribute("style", "display : none");
      });
    } else {
      section.addEventListener("mouseenter", (e) => {
        myInfosTag.setAttribute("style", "display : block");
      });

      section.addEventListener("mouseleave", (e) => {
        myInfosTag.setAttribute("style", "display : none");
      });
    }
  });
});

const backendDiv = document.querySelector(".backend");
const frontendDiv = document.querySelector(".frontend");

function Project(link, imageUrl, title, description, skills, period) {
  this.link = link;
  this.imageUrl = imageUrl;
  this.title = title;
  this.description = description;
  this.skills = skills;
  this.period = period;
}

