class Header extends HTMLElement {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        this.innerHTML = `
        <div style="display: flex;">
            <div id="headerDiv">
                <div>
                    <h2 class="title-font" id="nameHeader">
                        <a class="title-font" id="nameHeaderLink" href="index.html">
                            Sebastian Cherny.
                        </a>
                    </h2>
                </div>
                <div id="headerButtonsDiv">
                    <a class="headerButton" href="index.html">work</a>
                    <a class="headerButton" href="about.html">about</a>
                    <a class="headerButton" href="contact.html">contact</a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('custom-header', Header);