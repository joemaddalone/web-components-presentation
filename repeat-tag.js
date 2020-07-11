export default window.customElements.define(
  "repeat-tag",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["json"];
    }
    constructor() {
      super();
      this.template = this.innerHTML;
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
    render() {
      this.innerHTML = "";
      let data = this.getAttribute("json");
      if (data) {
        JSON.parse(data).forEach((item) => {
          let template = this.template;
          Object.keys(item).forEach(function (key) {
            template = template.replace(`{${key}}`, item[key]);
          });
          this.innerHTML += template;
        });
      }
    }
  }
);
