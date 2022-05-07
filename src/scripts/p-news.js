const fetchInventory = () => {
  fetch("/Columbus-Ghanaian-SDA-Website/news/src/inventory.json")
    .then((response) => response.json())
    .then((data) => populate(data));
};

/**
 *
 * @param {object} data inventory.json object
 */
const populate = (data) => {
  // Containers
  const announceContainer = document.getElementById("cg-news-announcements");
  const eventsContainer = document.getElementById("cg-news-events");

  // Objects
  const announcements = data.announcements;
  const events = data.events;

  if (announcements === []) {
    // If articles exists
    announcements.forEach((info) => {
      announceContainer.appendChild(createArticleLink(info.title, info.date, info.source));
    });
  } else {
    announceContainer.appendChild(createNoInfo());
  }

  events.forEach((info) => {
    eventsContainer.appendChild(createArticleLink(info.title, info.date, info.source));
  });
};

/**
 *
 * @param {string} title article title
 * @param {string} location article URL location
 * @returns {element}
 */
const createArticleLink = (title, date, location) => {
  const link = document.createElement("a");
  link.className = "cg-link-btn light";
  link.style.display = "block";
  link.href = `./read.html?n=${location}`;
  link.innerHTML = `<div style="font-weight: bold; margin-bottom: 5px;">${title}</div> <div style="color: var(--cg-accent-p)">${date}</div>`;

  return link;
};

const createNoInfo = () => {
  const info = document.createElement("p");
  info.textContent = "No news for this category.";

  return info;
};

fetchInventory();
