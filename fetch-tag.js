export default window.customElements.define(
  "fetch-tag",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["url"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
    render() {
      fetch(this.getAttribute("url"))
        .then((response) => response.json())
        .then((data) => {
          this.firstElementChild.setAttribute(
            "json",
            JSON.stringify(data.results)
          );
        });
    }
  }
);
