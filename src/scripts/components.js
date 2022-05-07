customElements.define(
  "cg-header",
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <header>
        <div class="cg-header-alert">
          Join us <a href="/Columbus-Ghanaian-SDA-Website/where-to-start/">in person at Saturday at 9:00AM</a> or via
          <a href="/Columbus-Ghanaian-SDA-Website/live">Livestream at 10:30AM</a>
        </div>

        <div class="cg-max-container" style="padding: 10px 0">
          <div class="cg-navigation-cont">
            <a class="cg-home-icon header-icon" href="./../">
              <svg
                aria-label="Home"
                title="Home"
                width="60px"
                height="60px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 210 210"
              >
                <defs>
                  <path id="a" d="M0 210h210V0H0z" />
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#2f3542"
                    d="M106.924 171.313c0 .54.62.543.731 0 .824-3.998 2.075-6.663 4.03-9.25l-4.397.003c-.201 0-.364.162-.364.363v8.884zm31.611-55.503c.05 5.78-1.61 10.747-12.15 21.297l-8.336 8.338c-3.794 3.797-7.205 7.264-9.222 10.73h8.233l.974-.975 11.96-11.984c9.96-9.97 11.349-20.516 9.223-27.395-.181-.584-.687-.623-.682-.01zm-10.496 35.265l-9.99 10.008c-6.047 6.053-11.125 11.269-11.125 16.973l.006 1.588c0 .43.536.499.7.048 1.868-5.107 8.106-10.557 19.548-8.625 0 0 49.849 8.622 50.267 8.659.487.043.728-.437.414-.81-.189-.225-23.2-23.258-23.2-23.258l-26.62-4.583zm-36.062 10.988a.364.364 0 0 1-.364-.364v-5.163c0-.202.163-.364.364-.364l8.724.002c.201 0 .364-.163.364-.364-.023-4.637-3.515-7.788-17.508-5.35l-30.215 5.198s-23.012 23.033-23.2 23.258c-.315.373-.074.853.413.81.42-.037 50.267-8.66 50.267-8.66 11.443-1.931 17.681 3.52 19.548 8.626.164.45.701.383.701-.048l.001-17.218c0-.2-.163-.363-.364-.363h-8.731zm-13.928-72.16c-9.96 9.969-11.349 20.516-9.222 27.395.18.584.686.623.68.01-.05-5.78 1.612-10.746 12.151-21.296l22.721-22.735c6.047-6.054 11.125-11.27 11.125-16.973v-8.897c0-.542-.62-.544-.732 0-1.494 7.26-4.395 10.125-10.378 16.113L78.05 89.902zm37.477-26.933c0-.54-.62-.543-.732 0-1.494 7.261-4.388 10.17-10.37 16.16L80.56 102.993c-11.58 11.592-13.584 22.81-7.694 30.02.393.481.815.192.56-.388-3.895-8.819 5.443-18.17 9.889-22.62L104.401 88.9c6.047-6.053 11.125-11.269 11.125-16.973V62.97zm-34.311 55.008c-11.581 11.592-6.256 22.787.5 25.87.592.27.828-.211.374-.603-5.416-4.699-3.772-12.6 3.04-19.418l19.248-19.267c6.047-6.053 11.124-11.268 11.124-16.972v-8.896c0-.54-.62-.543-.73 0-1.495 7.259-4.39 10.112-10.373 16.1l-23.183 23.186zm25.688 37.771c0 .541.62.543.73 0 1.496-7.259 4.39-10.17 10.372-16.158l9.479-9.468c11.58-11.59 13.583-22.809 7.693-30.018-.393-.481-.815-.193-.558.387 3.893 8.819-5.444 18.169-9.89 22.62l-6.701 6.709c-6.048 6.052-11.125 11.267-11.125 16.971v8.957zm11.128-31.822c-5.983 5.988-8.879 8.841-10.373 16.101-.112.544-.731.542-.731 0v-8.896c0-5.703 5.077-10.92 11.125-16.972l4.862-4.868c6.813-6.82 8.457-14.719 3.04-19.418-.453-.392-.217-.874.376-.603 6.755 3.082 12.08 14.277.498 25.87l-8.797 8.786zM174.395 163.348c.496 0 .792-.277.792-.678 0-.447-.248-.64-.801-.64h-.468v1.318h.477zm-1.2-1.927h1.22c1.039 0 1.506.41 1.506 1.231 0 .6-.363.934-.744 1.087l1.107 1.85h-.82l-.955-1.65h-.59v1.65h-.725v-4.168zm4.262 2.079c0-1.65-1.231-2.995-2.957-2.995-1.726 0-2.966 1.25-2.966 2.995 0 1.65 1.24 2.995 2.966 2.995 1.632 0 2.957-1.25 2.957-2.995zm-6.457 0c0-2.03 1.47-3.5 3.5-3.5 1.936 0 3.5 1.47 3.5 3.5 0 2.032-1.468 3.5-3.5 3.5-2.03 0-3.5-1.468-3.5-3.5z"
                  />
                </g>
              </svg>
            </a>

            <nav class="mobile-no-show">
              <ul>
                <li>
                  <a class="cg-nav-button" href="/Columbus-Ghanaian-SDA-Website/about/">Who are we?</a>
                </li>

                <li>
                  <a class="cg-nav-button" href="#">Ministries <i style="font-size: 12px" aria-hidden="true" class="fa-solid fa-chevron-down"></i></a>
                  <div class="submenu">
                    <a href="#">Our Team</a>
                    <a href="#">Youth</a>
                  </div>
                </li>

                <li>
                  <a class="cg-nav-button" href="#">Resources <i style="font-size: 12px" aria-hidden="true" class="fa-solid fa-chevron-down"></i></a>
                  <div class="submenu">
                    <a href="/Columbus-Ghanaian-SDA-Website/live/">Live / Videos</a>
                    <a href="/Columbus-Ghanaian-SDA-Website/news/">News</a>
                  </div>
                </li>

                <li>
                  <a class="cg-nav-button" href="#">Connect <i style="font-size: 12px" aria-hidden="true" class="fa-solid fa-chevron-down"></i></a>
                  <div class="submenu">
                    <a href="/Columbus-Ghanaian-SDA-Website/where-to-start/">Where To Start?</a>
                    <a href="/Columbus-Ghanaian-SDA-Website/contact-us/">Contact Us</a>
                  </div>
                </li>

                <li>
                  <a class="cg-nav-button" href="/Columbus-Ghanaian-SDA-Website/giving/">Giving</a>
                </li>
              </ul>
            </nav>

            <div class="desktop-no-show" style="width: 100%">
              <div class="cg-home-icon-cont">
                <button title="Menu" class="cg-home-icon header-icon" onclick="toggleNavigation(true)">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      `;
    }
  }
);

customElements.define(
  "cg-mobile-navigation",
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <nav id="cg-mobile-navigation" class="cg-mobile-navigation desktop-no-show" style="display: none !important">
      <div class="cg-max-container">
        <div style="margin-bottom: 20px; margin-top: 20px">
          <button
            style="background-color: var(--cg-outline); border: none; padding: 10px; border-radius: 5px"
            title="Close"
            class="cg-mobile-nav-close"
            onclick="toggleNavigation(false);"
          >
            <i class="fas fa-xmark" style="font-size: 1.7em"></i>
          </button>
        </div>

        <div style="border-bottom: 1px solid var(--cg-outline); padding-bottom: 10px">
          <h2 style="font-size: 1.3em; display: inline-block">Columbus Ghanaian SDA</h2>
          <a class="cg-link-btn" style="display: block" href="/Columbus-Ghanaian-SDA-Website/">Home</a>
        </div>

        <div style="border-bottom: 1px solid var(--cg-outline); padding-bottom: 10px">
          <h2 style="font-size: 1.3em; display: inline-block">Our Ministries</h2>
          <a class="cg-link-btn" style="display: block" href="#">Our Team</a>
          <a class="cg-link-btn" style="display: block" href="#">Youth</a>
        </div>

        <div style="border-bottom: 1px solid var(--cg-outline); padding-bottom: 10px">
          <h2 style="font-size: 1.3em; display: inline-block">Our Resources</h2>
          <a class="cg-link-btn" style="display: block" href="/Columbus-Ghanaian-SDA-Website/live/">Live / Videos</a>
          <a class="cg-link-btn" style="display: block" href="/Columbus-Ghanaian-SDA-Website/news/">News</a>
        </div>

        <div style="border-bottom: 1px solid var(--cg-outline); padding-bottom: 10px">
          <h2 style="font-size: 1.3em; display: inline-block">Let's Connect</h2>
          <a class="cg-link-btn" style="display: block" href="/Columbus-Ghanaian-SDA-Website/where-to-start/">Where To Start?</a>
          <a class="cg-link-btn" style="display: block" href="/Columbus-Ghanaian-SDA-Website/contact-us/">Contact Us</a>
        </div>

        <div style="border-bottom: 1px solid var(--cg-outline); padding-top: 10px; padding-bottom: 10px">
          <a class="cg-link-btn" style="display: block" href="/Columbus-Ghanaian-SDA-Website/giving/">Giving</a>
        </div>
      </div>
    </nav>
      `;
    }
  }
);

customElements.define(
  "cg-footer",
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <footer style="position: relative; z-index: 2">
        <div class="cg-max-container cg-footer-section grid-to-block">
          <div>
          <a href="/">
          
            <svg
              aria-label="Home"
              title="Home"
              width="60px"
              height="60px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 210 210"
            >
              <defs>
                <path id="a" d="M0 210h210V0H0z" />
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#ffaf53"
                  d="M106.924 171.313c0 .54.62.543.731 0 .824-3.998 2.075-6.663 4.03-9.25l-4.397.003c-.201 0-.364.162-.364.363v8.884zm31.611-55.503c.05 5.78-1.61 10.747-12.15 21.297l-8.336 8.338c-3.794 3.797-7.205 7.264-9.222 10.73h8.233l.974-.975 11.96-11.984c9.96-9.97 11.349-20.516 9.223-27.395-.181-.584-.687-.623-.682-.01zm-10.496 35.265l-9.99 10.008c-6.047 6.053-11.125 11.269-11.125 16.973l.006 1.588c0 .43.536.499.7.048 1.868-5.107 8.106-10.557 19.548-8.625 0 0 49.849 8.622 50.267 8.659.487.043.728-.437.414-.81-.189-.225-23.2-23.258-23.2-23.258l-26.62-4.583zm-36.062 10.988a.364.364 0 0 1-.364-.364v-5.163c0-.202.163-.364.364-.364l8.724.002c.201 0 .364-.163.364-.364-.023-4.637-3.515-7.788-17.508-5.35l-30.215 5.198s-23.012 23.033-23.2 23.258c-.315.373-.074.853.413.81.42-.037 50.267-8.66 50.267-8.66 11.443-1.931 17.681 3.52 19.548 8.626.164.45.701.383.701-.048l.001-17.218c0-.2-.163-.363-.364-.363h-8.731zm-13.928-72.16c-9.96 9.969-11.349 20.516-9.222 27.395.18.584.686.623.68.01-.05-5.78 1.612-10.746 12.151-21.296l22.721-22.735c6.047-6.054 11.125-11.27 11.125-16.973v-8.897c0-.542-.62-.544-.732 0-1.494 7.26-4.395 10.125-10.378 16.113L78.05 89.902zm37.477-26.933c0-.54-.62-.543-.732 0-1.494 7.261-4.388 10.17-10.37 16.16L80.56 102.993c-11.58 11.592-13.584 22.81-7.694 30.02.393.481.815.192.56-.388-3.895-8.819 5.443-18.17 9.889-22.62L104.401 88.9c6.047-6.053 11.125-11.269 11.125-16.973V62.97zm-34.311 55.008c-11.581 11.592-6.256 22.787.5 25.87.592.27.828-.211.374-.603-5.416-4.699-3.772-12.6 3.04-19.418l19.248-19.267c6.047-6.053 11.124-11.268 11.124-16.972v-8.896c0-.54-.62-.543-.73 0-1.495 7.259-4.39 10.112-10.373 16.1l-23.183 23.186zm25.688 37.771c0 .541.62.543.73 0 1.496-7.259 4.39-10.17 10.372-16.158l9.479-9.468c11.58-11.59 13.583-22.809 7.693-30.018-.393-.481-.815-.193-.558.387 3.893 8.819-5.444 18.169-9.89 22.62l-6.701 6.709c-6.048 6.052-11.125 11.267-11.125 16.971v8.957zm11.128-31.822c-5.983 5.988-8.879 8.841-10.373 16.101-.112.544-.731.542-.731 0v-8.896c0-5.703 5.077-10.92 11.125-16.972l4.862-4.868c6.813-6.82 8.457-14.719 3.04-19.418-.453-.392-.217-.874.376-.603 6.755 3.082 12.08 14.277.498 25.87l-8.797 8.786zM174.395 163.348c.496 0 .792-.277.792-.678 0-.447-.248-.64-.801-.64h-.468v1.318h.477zm-1.2-1.927h1.22c1.039 0 1.506.41 1.506 1.231 0 .6-.363.934-.744 1.087l1.107 1.85h-.82l-.955-1.65h-.59v1.65h-.725v-4.168zm4.262 2.079c0-1.65-1.231-2.995-2.957-2.995-1.726 0-2.966 1.25-2.966 2.995 0 1.65 1.24 2.995 2.966 2.995 1.632 0 2.957-1.25 2.957-2.995zm-6.457 0c0-2.03 1.47-3.5 3.5-3.5 1.936 0 3.5 1.47 3.5 3.5 0 2.032-1.468 3.5-3.5 3.5-2.03 0-3.5-1.468-3.5-3.5z"
                />
              </g>
            </svg>
            </a>
          </div>
  
          <div>
            <p style="margin-top: 0">
              3191 Thornapple Drive<br />
              Columbus, OH 43231
            </p>
  
            <a href="tel:+1-614-471-5231">614-471-5231 </a><br />
            <a href="/Columbus-Ghanaian-SDA-Website/contact-us/" style="font-weight: bold">Contact Us</a><br />
          </div>
  
          <div>
            <a href="/Columbus-Ghanaian-SDA-Website/about/">Who Are We?</a><br />
            <a href="/Columbus-Ghanaian-SDA-Website/where-to-start/">Where To Start</a><br />
          </div>
  
          <div>
            <a href="#">Our Team</a><br />
            <a href="#">Youth</a><br />
            <a href="/Columbus-Ghanaian-SDA-Website/giving/">Giving</a><br />
          </div>
  
          <div>
            <a href="/Columbus-Ghanaian-SDA-Website/news/">News</a><br />
            <a href="/Columbus-Ghanaian-SDA-Website/live/">Livestreams</a><br />
          </div>
  
          <div>
            <a href="https://web.facebook.com/CGHSDA/?ref=br_rs" target="_blank" style="font-size: 1.5em" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a><br />
            <a href="#" target="_blank" style="font-size: 1.5em" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><br />
            <a href="https://wa.me/17187908897" target="_blank" style="font-size: 1.5em" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a><br />
            <a href="https://www.youtube.com/channel/UCdUXsPwWlmT-Qspgqe0_W-g" target="_blank" style="font-size: 1.5em" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a><br />
          </div>
        </div>
      </footer>
        `;
    }
  }
);

customElements.define(
  "cg-sda-logo",
  class extends HTMLElement {
    constructor() {
      super();

      const color = this.getAttribute("color") ? this.getAttribute("color") : "#2f3542";
      const width = this.getAttribute("width") ? this.getAttribute("width") : "60px";
      const height = this.getAttribute("height") ? this.getAttribute("height") : "60px";

      this.innerHTML = `
      <svg
      aria-label="SDA Logo"
      title="SDA Logo"
      width="${width}"
      height="${height}"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210 210"
    >
      <defs>
        <path id="a" d="M0 210h210V0H0z" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path
          fill="${color}"
          d="M106.924 171.313c0 .54.62.543.731 0 .824-3.998 2.075-6.663 4.03-9.25l-4.397.003c-.201 0-.364.162-.364.363v8.884zm31.611-55.503c.05 5.78-1.61 10.747-12.15 21.297l-8.336 8.338c-3.794 3.797-7.205 7.264-9.222 10.73h8.233l.974-.975 11.96-11.984c9.96-9.97 11.349-20.516 9.223-27.395-.181-.584-.687-.623-.682-.01zm-10.496 35.265l-9.99 10.008c-6.047 6.053-11.125 11.269-11.125 16.973l.006 1.588c0 .43.536.499.7.048 1.868-5.107 8.106-10.557 19.548-8.625 0 0 49.849 8.622 50.267 8.659.487.043.728-.437.414-.81-.189-.225-23.2-23.258-23.2-23.258l-26.62-4.583zm-36.062 10.988a.364.364 0 0 1-.364-.364v-5.163c0-.202.163-.364.364-.364l8.724.002c.201 0 .364-.163.364-.364-.023-4.637-3.515-7.788-17.508-5.35l-30.215 5.198s-23.012 23.033-23.2 23.258c-.315.373-.074.853.413.81.42-.037 50.267-8.66 50.267-8.66 11.443-1.931 17.681 3.52 19.548 8.626.164.45.701.383.701-.048l.001-17.218c0-.2-.163-.363-.364-.363h-8.731zm-13.928-72.16c-9.96 9.969-11.349 20.516-9.222 27.395.18.584.686.623.68.01-.05-5.78 1.612-10.746 12.151-21.296l22.721-22.735c6.047-6.054 11.125-11.27 11.125-16.973v-8.897c0-.542-.62-.544-.732 0-1.494 7.26-4.395 10.125-10.378 16.113L78.05 89.902zm37.477-26.933c0-.54-.62-.543-.732 0-1.494 7.261-4.388 10.17-10.37 16.16L80.56 102.993c-11.58 11.592-13.584 22.81-7.694 30.02.393.481.815.192.56-.388-3.895-8.819 5.443-18.17 9.889-22.62L104.401 88.9c6.047-6.053 11.125-11.269 11.125-16.973V62.97zm-34.311 55.008c-11.581 11.592-6.256 22.787.5 25.87.592.27.828-.211.374-.603-5.416-4.699-3.772-12.6 3.04-19.418l19.248-19.267c6.047-6.053 11.124-11.268 11.124-16.972v-8.896c0-.54-.62-.543-.73 0-1.495 7.259-4.39 10.112-10.373 16.1l-23.183 23.186zm25.688 37.771c0 .541.62.543.73 0 1.496-7.259 4.39-10.17 10.372-16.158l9.479-9.468c11.58-11.59 13.583-22.809 7.693-30.018-.393-.481-.815-.193-.558.387 3.893 8.819-5.444 18.169-9.89 22.62l-6.701 6.709c-6.048 6.052-11.125 11.267-11.125 16.971v8.957zm11.128-31.822c-5.983 5.988-8.879 8.841-10.373 16.101-.112.544-.731.542-.731 0v-8.896c0-5.703 5.077-10.92 11.125-16.972l4.862-4.868c6.813-6.82 8.457-14.719 3.04-19.418-.453-.392-.217-.874.376-.603 6.755 3.082 12.08 14.277.498 25.87l-8.797 8.786zM174.395 163.348c.496 0 .792-.277.792-.678 0-.447-.248-.64-.801-.64h-.468v1.318h.477zm-1.2-1.927h1.22c1.039 0 1.506.41 1.506 1.231 0 .6-.363.934-.744 1.087l1.107 1.85h-.82l-.955-1.65h-.59v1.65h-.725v-4.168zm4.262 2.079c0-1.65-1.231-2.995-2.957-2.995-1.726 0-2.966 1.25-2.966 2.995 0 1.65 1.24 2.995 2.966 2.995 1.632 0 2.957-1.25 2.957-2.995zm-6.457 0c0-2.03 1.47-3.5 3.5-3.5 1.936 0 3.5 1.47 3.5 3.5 0 2.032-1.468 3.5-3.5 3.5-2.03 0-3.5-1.468-3.5-3.5z"
        />
      </g>
    </svg>`;
    }
  }
);
