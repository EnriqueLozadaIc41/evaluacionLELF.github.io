class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Luis Enrique Lozada Fuentes.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
