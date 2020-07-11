const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {
      background-color: red;
      border: 1px solid red;
      border-radius: 9px;
      width: 250px;
      margin: 10px;
      text-align: center;
    }

    h1 {
      color: #fff;
    }

    h2 {
      width: 100%;
      height: 50px;
      padding-top: 20px;
      padding-bottom: 20px;
      background-color: #fff;
    }
  </style>
  <div>
    <h1>Hi, my name is</h1>
    <h2>
      <slot></slot>
    </h2>
  </div>
`;

export default window.customElements.define(
  "name-tag",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      });
    }
    connectedCallback() {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`${name} was changed to ${newValue}`);
    }
  }
);
