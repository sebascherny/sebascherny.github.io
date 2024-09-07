document.addEventListener('DOMContentLoaded', function () {
    const projectId = window.location.pathname.split('/').pop().replace('.html', '');

    const data = projectJson;
    if (data != undefined) {
        const mainElement = document.querySelector('main');

        if (mainElement) {
            const mainContent = `
                    <section id="logo">
                        <div id="logoTopDiv">
                            <img src="${data.logo_source}" id="logoTop" alt="logo for ${data.project_title}" />
                        </div>
                    </section>
                    <section id="summary">
                        <div id="projectDiv">
                            <h2>${data.project_title}</h2>
                            <p>
                                ${data.project_summary}
                            </p>
                        </div>
                    </section>
                    <section id="overview">
                        <div id="overviewDiv">
                            <div id="overviewText">
                                <h3>Overview</h3>
                                <p>${data.project_overview_paragraphs[0]}</p>
                                ${data.project_overview_paragraphs.length > 1 ? data.project_overview_paragraphs.map(
                                    (paragraph, index) => {
                                        if (index > 0) {
                                            return `<p style="margin-top: 28px !important;">${paragraph}</p>`;
                                        } else {
                                            return ``;
                                        }
                                    }
                                ).reduce((partialSum, a) => partialSum + a, ``) : ``
                                }
                            </div>
                            <div id="techStack">
                                ${data.tech_stack.map(
                                    (title_and_description, index) => {
                                        let ret = ``;
                                        if (index < data.tech_stack.length - 1) {
                                            ret = `<p class="techStackTitle">${title_and_description[0]}</p>
                                                    <p class="techStackDescription">${title_and_description[1]}</p>
                                                `;
                                        } else {
                                            ret = `<p class="techStackTitle">${title_and_description[0]}</p>
                                                    <p class="techStackDescription" style="margin-bottom: 0px;">${title_and_description[1]}</p>`;
                                        }
                                        return ret
                                    }
                                ).reduce((partialSum, a) => partialSum + a, ``)}
                            </div>
                        </div>
                    </section>
                    ${
                        data.project_images && data.project_images.length > 0 ? `
                            <section id="images">
                                <div id="lastImagesDiv">
                                    <img id="imgLeft" src="${data.project_images[0]}" />
                                    <img id="imgRight" src="${data.project_images[1]}" />
                                </div>
                            </section>` : ``
                    }
                    
                    <br />
                `;
            mainElement.innerHTML = mainContent;
        }
    } else {
        console.log('Error loading project data for', projectId);
    }
});