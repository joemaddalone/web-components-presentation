const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {
      display: flex;
      height: 50px;
    }
    button {
      outline: 0;
      border:0;
      background-color: #eee;
      font-family: monospace;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size:1.4rem;
      width: 33%;
    }
    .active {
      background-color: red;
      color: #fff;
    }
  </style>
  <div>
    <button id="people" class="active">People</button>
    <button id="starships">Ships</button>
    <button id="planets">Planets</button>
  </div>
`;

export default window.customElements.define(
  "toolbar-tag",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      });
    }
    connectedCallback() {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          this.setActive(e.target.id, this.shadowRoot);
        });
      });
    }

    setActive(id, shadow) {
      document
        .getElementById(this.getAttribute("target"))
        .setAttribute("url", `https://swapi.tech/api/${id}/?format=json`);
      this.shadowRoot
        .querySelectorAll("button")
        .forEach((btn) => btn.classList.remove("active"));
      this.shadowRoot.getElementById(id).classList.add("active");
    }
  }
);
