class CustomFooter extends HTMLElement {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        this.innerHTML = `
        <footer style="display: none;" class="footer-distributed">
            <div class="footer-left">
                <p class="footer-company-name">© 2023 Sebastian Cherny</p>
            </div>
            <div class="footer-center">
            </div>

            <div class="footer-right">

                <div class="footer-icons">

                    <a href="https://www.linkedin.com/in/sebastian-cherny-a03386b0/"
                    target="blank"
                    ><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.github.com/sebacherny"
                    target="blank"><i class="fa fa-github"></i></a>

                </div>

            </div>

        </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);


