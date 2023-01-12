class ReusableProjectElement extends HTMLElement {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="presentationDiv">
            <h1 class="title-font">${this.attributes.projectName.value}</h1>
            <br />
            <img src="${this.attributes.image1.value}" />
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