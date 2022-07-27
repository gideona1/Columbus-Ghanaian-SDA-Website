customElements.define(
  "cg-ds-home",
  class extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = `
      <div class="cg-ds-home">
          <section>
            <div class="cg-max-container" style="margin-top: 40px">
              <ul class="breadcrumb">
                <li><a href="#" class="current">Dashboard</a></li>
              </ul>
              <h1 style="font-size: 2rem">Home</h1>
              <p class="cg-header-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut quisquam aliquid quidem expedita placeat magnam facere sit minima corrupti
                et nemo, debitis sequi velit libero nostrum fugit ipsam! Sapiente.
              </p>
              <div class="cg-ds-info-container hidden" id="cg-user-not-verified">
                <h2>Verification</h2>
                <p>Your account has not been verified yet. Access to features are limited.</p>
              </div>
            </div>
          </section>

          <section class="secondary">
            <div class="cg-max-container">
              <h2>Resources</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quo!</p>
              <div class="cg-ds-home-showcase">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div class="cg-max-container">
              <h2>Others</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quo!</p>
              <div class="cg-ds-home-showcase">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </section>

          <section class="accent-d">
            <div class="cg-max-container">
              <h2>Information</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem veniam similique. Ipsa, ex numquam expedita ut possimus iste odit
                consectetur ea, odio sunt pariatur?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa deserunt quia earum! Officia ducimus doloremque aliquid blanditiis nostrum
                suscipit aperiam rem explicabo laborum est minus magnam aspernatur placeat, quod itaque.
              </p>
            </div>
          </section>
        </div>`;
    }
  }
);

customElements.define(
  "cg-ds-manage-user",
  class extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = `
      <div class="cg-ds-manage-user">
        <section>
          <div class="cg-max-container" style="margin-top: 40px">
            <ul class="breadcrumb">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#" class="current">Manage Users</a></li>
            </ul>
            <h1 style="font-size: 2rem">Manage Users</h1>
            <p class="cg-header-description">View, verify, promote, and remove users.</p>
          </div>
        </section>

        <section class="secondary hidden" id="cg-ds-no-access">
          <div class="cg-max-container">
            <h2>No Access</h2>
            <p>Your account does not have privileges to modify other accounts</p>
            <button class="cg-link-btn light" onclick="getAllUsers()">Try again</button>
          </div>
        </section>

        <section class="secondary" id="cg-ds-user-manage">
          <div class="cg-max-container">
            <button id="cg-ds-man-refresh" class="cg-link-btn light" onclick="getAllUsers()">Refresh <i class="fa-solid fa-arrows-rotate"></i></button>
            <h2>Users</h2>
            <div id="cg-sd-man-userDisplay"></div>
          </div>
        </section>
      </div>`;
    }
  }
);

customElements.define(
  "cg-ds-man-user-display",
  class extends HTMLElement {
    constructor() {
      super();

      const name = this.getAttribute("name");
      const role = parseInt(this.getAttribute("role"));
      const verified = this.getAttribute("verified");
      const email = this.getAttribute("email");
      const id = this.getAttribute("id");

      const displayRole = role === 0 ? "Member" : role === 1 ? "Administrator" : role === 2 ? "Master" : "Unknown";
      const displayVerified = verified === "true" ? "verified" : "not verified";

      this.innerHTML = `
      <div class="cg-ds-man-user-display">
        <div class="user-information">
          <div class="user-name">${name}</div>
          <div class="user-role">${displayRole}, ${displayVerified}</div>
          <div class="user-email">${email}</div>
        </div>

        <div class="user-action">
          <button class="cg-link-btn light" style="margin-right: 5px">View</button>
          <button class="cg-link-btn light" disabled="${verified === "true" ? "true" : "false"}">${verified === "true" ? "Verified" : "Verify"}</button>
        </div>
      </div>`;
    }
  }
);
