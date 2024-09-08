class Header extends HTMLElement {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="headerDiv">
            <div id="navigationDiv">
                <div id="nameHeaderDiv">
                    <h2 class="title-font" id="nameHeader">
                        <a class="title-font" id="nameHeaderLink" href="index">
                            Sebastian
                        </a>
                    </h2>
                </div>
                <div id="headerButtonsDiv">
                    <a class="headerButton" href="index#latest-projects">work</a>
                    <a class="headerButton" href="index#services">services</a>
                    <a class="headerButton" href="about">about</a>
                    <a class="headerButton" href="contact">contact</a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('custom-header', Header);