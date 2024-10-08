class CustomFooter extends HTMLElement {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        // Add https://kit.fontawesome.com/e17930e95a.js to the head of the document if this is displayed
        this.innerHTML = `
        <footer style="display: none;" class="footer-distributed">
            <div class="footer-left">
                <p class="footer-company-name">© 2023 Sebastian Cherny</p>
            </div>
            <div class="footer-center">
            </div>

            <div class="footer-right">

                <div class="footer-icons">

                    <a href="https://www.linkedin.com/in/sebascherny/"
                    target="blank"
                    ><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.github.com/sebascherny/"
                    target="blank"><i class="fa fa-github"></i></a>

                </div>

            </div>

        </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);


