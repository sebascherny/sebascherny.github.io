class ReusableProjectElement extends HTMLElement {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="projectDescriptionDiv">
            <h1 style="text-align: center;" class="title-font">${this.attributes.projectName.value}</h1>
            <br />
            <div>
                <img src="${this.attributes.logo.value}"
                style="width: 60%; position:relative; left: 20%;" />
            </div>
            <div style="display:flex; margin-top: 2%">
            <img style="width: 49%; margin-right: 2%" src="${this.attributes.image1.value}" />
            <img style="width: 49%;" src="${this.attributes.image2.value}" />
            </div>
            <br />
            <label style="text-align: left; color: white;">
                ${this.attributes.description.value}
                <br />
                <br />
                Tech stack:
                <br />
                <label>Frontend</label>: ${this.attributes.frontend.value}
                <br />
                Backend: ${this.attributes.backend.value}
                <br />
                ${this.attributes.frameworks != null ? 'Libraries/Frameworks: ' + this.attributes.frameworks.value + '<br />' : ''}
                Database: ${this.attributes.database.value}
                <br />
                Duration: ${this.attributes.duration.value}
            </label>
        </div>
        <div>
        </div>
        `;
    }
}

customElements.define('custom-project', ReusableProjectElement);