/**
 *
 * @param {string} key
 * @returns {string} value of key
 */
const getQueryParam = (key) => {
  const results = new RegExp("[?&]" + key + "=([^&#]*)").exec(window.location.href);

  if (results === null) {
    return null;
  } else {
    return decodeURI(results[1]) || 0;
  }
};

const fetchDocument = () => {
  fetch(`/Columbus-Ghanaian-SDA-Website/news/src/data/${getQueryParam("n")}.json`)
    .then((response) => response.json())
    .then((data) => createDocument(data))
    .catch((error) => {
      document.getElementById("cg-read-pop-thumbnail").style.display = "none";

      createDocument({
        information: {
          type: "Error",
          title: "Can not load document properly",
          description: "There was an error while loading document",
        },

        body: [
          {
            theme: "accent",
            content: [
              {
                type: "h2",
                text: "Troubleshooting",
              },
              {
                type: "p",
                text: "Check the URL for misspellings and errors",
              },
              {
                type: "p",
                text: error,
              },
            ],
          },
        ],
      });
    });
};

const createDocument = (data) => {
  console.log(data);
  const sectionContainer = document.getElementById("cg-read-pop-section");
  const newsInformation = data.information;
  const newsBody = data.body;

  // Breadcrumb and title
  document.title = `${newsInformation.title} | News - Columbus Ghanaian SDA`;
  document.getElementById("cg-read-pop-bc").textContent = newsInformation.title;
  document.getElementById("cg-read-pop-title").textContent = newsInformation.title;

  // Header Information
  document.getElementById("cg-read-pop-description").textContent = newsInformation.description;
  document.getElementById("cg-read-pop-date").textContent = newsInformation.date;

  if (newsInformation && newsInformation.thumbnail) {
    document.getElementById(
      "cg-read-pop-thumbnail"
    ).src = `/Columbus-Ghanaian-SDA-Website/news/src/data/files/${newsInformation.thumbnail}`;
  } else {
    document.getElementById("cg-read-pop-thumbnail").style.display = "none";
  }
  /**
   *
   * @param {number} index Section Index
   * @param {string} theme Section Theme ("accent" | "dark" | null (light) )
   * @returns {element}
   */
  const createSection = (index, theme) => {
    // Parent Container
    const parentContainer = document.createElement("section");

    parentContainer.style.background =
      theme === "accent" ? "var(--cg-accent-f)" : theme === "dark" ? "var(--cg-bg-invert)" : "var(--cg-bg-primary)";
    parentContainer.style.color =
      theme === "accent" ? "var(--cg-text)" : theme === "dark" ? "#f5f6fa" : "var(--cg-text)";

    // Child Container
    const childContainer = document.createElement("div");
    childContainer.className = "cg-max-container";
    childContainer.setAttribute("data-section", index);

    parentContainer.appendChild(childContainer);
    return parentContainer;
  };

  /**
   *
   * @param {object} element
   * @returns {element}
   */
  const createElement = (element) => {
    let ele;

    switch (element.type) {
      case "h2":
        ele = document.createElement("h2");
        ele.textContent = element.text;
        break;

      case "h3":
        ele = document.createElement("h3");
        ele.textContent = element.text;
        break;

      case "p":
        ele = document.createElement("p");
        ele.textContent = element.text;
        break;

      default:
        ele = document.createElement("p");
        ele.textContent = `Can not create ${element.type}.`;
    }

    return ele;
  };

  newsBody.forEach((section, sectionIndex) => {
    let createdSection = createSection(sectionIndex, section.theme);
    sectionContainer.appendChild(createdSection);

    section.content.forEach((element) => {
      const createdElement = createElement(element);
      createdSection.querySelector("div").appendChild(createdElement);
    });
  });
};

fetchDocument();
