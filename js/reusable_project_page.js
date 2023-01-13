class ReusableProjectElement extends HTMLElement {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="presentationDiv">
            <h1 class="title-font">${this.attributes.projectName.value}</h1>
            <br />
            <img src="${this.attributes.logo.value}" />
            <div style="display:flex; margin-top: 2%">
            <img style="width: 49%; margin-right: 2%" src="${this.attributes.image1.value}" />
            <img style="width: 49%;" src="${this.attributes.image2.value}" />
            </div>
            <br />
            <label>
                ${this.attributes.description.value}
                <br />
                <br />
                Tech stack:
                <br />
                Frontend: ${this.attributes.frontend.value}
                <br />
                Backend:${this.attributes.backend.value}
                <br />
                Database:${this.attributes.database.value}
                <br />
                Duration:${this.attributes.duration.value}
            </label>
        </div>
        `;
    }
}

customElements.define('custom-project', ReusableProjectElement);