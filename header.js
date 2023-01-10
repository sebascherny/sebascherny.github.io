class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallbkac() {
        this.innerHTML = `<div>
        <p>AAASDASDASD</p>
    </div>`;
    }
}

customElements.define('header-comp', Header);