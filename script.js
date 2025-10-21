document.addEventListener('DOMContentLoaded', () => {
    const navHeader = document.getElementById('nav-header');
    const navBackButton = document.getElementById('nav-back-button');
    const navHomeButton = document.getElementById('nav-home-button');
    const navTitle = document.getElementById('nav-title');
    const navContainer = document.getElementById('nav-container');

    const fileViewerArea = document.getElementById('file-viewer-area');
    const contentViewer = document.getElementById('content-viewer');
    const backButton = document.getElementById('back-button');
    const homeButton = document.getElementById('home-button');
    const fileListContainer = document.getElementById('file-list');
    const fileSubjectTitle = document.getElementById('file-subject-title');
    const searchBar = document.getElementById('search-bar');

    const structure = {
        'primer-anio': {
            title: 'Primer Año',
            content: {
                'primer-cuatrimestre': {
                    title: 'Primer Cuatrimestre',
                    content: {
                        'matematicas1': {
                            title: 'Matemáticas 1',
                            items: `
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/3 claasificacion de relaciones-LA.txt" class="file-link">3 claasificacion de relaciones-LA.txt</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/4 funcion lineal-LA.txt" class="file-link">4 funcion lineal-LA.txt</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/5 temas final-LA.txt" class="file-link">5 temas final-LA.txt</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/examenes-LA/1 Parcial 1 mat .pdf" class="file-link">examenes-LA/1 Parcial 1 mat .pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/examenes-LA/2 Parcial 1 mat recuperatorio.pdf" class="file-link">examenes-LA/2 Parcial 1 mat recuperatorio.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/examenes-LA/3 Parcial 2 .pdf" class="file-link">examenes-LA/3 Parcial 2 .pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/examenes-LA/4 Parcial 2 recuperatorio.pdf" class="file-link">examenes-LA/4 Parcial 2 recuperatorio.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/examenes-LA/5 examen libre matematicas.pdf" class="file-link">examenes-LA/5 examen libre matematicas.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/teoria-LA/1 U1_-_LOGICA_-_TEO.pdf" class="file-link">teoria-LA/1 U1_-_LOGICA_-_TEO.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/teoria-LA/2 U1_-_LOGICA_-_TP.pdf" class="file-link">teoria-LA/2 U1_-_LOGICA_-_TP.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/teoria-LA/3 U2 - CONJUNTOS - TP.pdf" class="file-link">teoria-LA/3 U2 - CONJUNTOS - TP.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/teoria-LA/4 U2_-_CONJUNTOS_-_TEO.pdf" class="file-link">teoria-LA/4 U2_-_CONJUNTOS_-_TEO.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/teoria-LA/5 U3_-_RELACIONES_-_TEO.pdf" class="file-link">teoria-LA/5 U3_-_RELACIONES_-_TEO.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/teoria-LA/6 U3_-_RELACIONES_-_TP.pdf" class="file-link">teoria-LA/6 U3_-_RELACIONES_-_TP.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/teoria-LA/7 U4_-_FUNCIONES_-_TEO.pdf" class="file-link">teoria-LA/7 U4_-_FUNCIONES_-_TEO.pdf</a>
                                <a href="primer-anio/primer-cuatrimestre/matematicas1-LA/teoria-LA/8 U4_-_FUNCIONES_-_TP.pdf" class="file-link">teoria-LA/8 U4_-_FUNCIONES_-_TP.pdf</a>
                            `
                        }
                    }
                },
                'segundo-cuatrimestre': {
                    title: 'Segundo Cuatrimestre',
                    content: {
                        'db': {
                            title: 'Base de Datos',
                            items: `
                                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/ModeloRelacional(EzequielBequis).pdf" class="file-link">ModeloRelacional(EzequielBequis).pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/NotasTomadasEn Clase(LeandroAmaya).txt" class="file-link">NotasTomadasEn Clase(LeandroAmaya).txt</a>
                                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/ResumenDeAlgebraRelacional-by DannaGarcia.pdf" class="file-link">ResumenDeAlgebraRelacional-by DannaGarcia.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/teoria/1ModeloEntidad-RelacionLeandroAmaya.pdf" class="file-link">teoria/1ModeloEntidad-RelacionLeandroAmaya.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/teoria/2Modelo_RelacionalLeandro Amaya.pdf" class="file-link">teoria/2Modelo_RelacionalLeandro Amaya.pdf</a>
                            `
                        },
                        'lab': {
                            title: 'Laboratorio 1',
                            items: `
                                <a href="primer-anio/segundo-cuatrimestre/laboratorio-1/JAVA(EzequielBequis).pdf" class="file-link">JAVA(EzequielBequis).pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/laboratorio-1/Resumen SQL (Leandro Amaya).docx" class="file-link">Resumen SQL (Leandro Amaya).docx</a>
                                <a href="primer-anio/segundo-cuatrimestre/laboratorio-1/ResumenJDBC(LeandroAmaya).docx" class="file-link">ResumenJDBC(LeandroAmaya).docx</a>
                                <a href="primer-anio/segundo-cuatrimestre/laboratorio-1/SQL(EzequielBequis).pdf" class="file-link">SQL(EzequielBequis).pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/laboratorio-1/teoria/unidad3/1AppJavaGuia3SubrayadoLeandroAmaya.pdf" class="file-link">teoria/unidad3/1AppJavaGuia3SubrayadoLeandroAmaya.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/laboratorio-1/teoria/unidad3/3Base_de_Datos_DDL-DML-DQL.pdf" class="file-link">teoria/unidad3/3Base_de_Datos_DDL-DML-DQL.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/laboratorio-1/teoria/unidad3/42C-U2-TEO1-Bases_de_Datos_Relacionales.pdf" class="file-link">teoria/unidad3/42C-U2-TEO1-Bases_de_Datos_Relacionales.pdf</a>
                            `
                        },
                        'web': {
                            title: 'Web 1',
                            items: `
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/paradigmas-de-programacion LA.pdf" class="file-link">paradigmas-de-programacion LA.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad1html/ApuntesSobreSemanticaEnHTML-byDanna Garcia.pdf" class="file-link">Unidad1html/ApuntesSobreSemanticaEnHTML-byDanna Garcia.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad1html/ElementosSemanticosDeHtml-byDanna Garcia.md" class="file-link">Unidad1html/ElementosSemanticosDeHtml-byDanna Garcia.md</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad2CSS/ApuntesConEjemplosDeSelectoresHTML-CSS-by DannaGarcia.pdf" class="file-link">Unidad2CSS/ApuntesConEjemplosDeSelectoresHTML-CSS-by DannaGarcia.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad2CSS/ApuntesDeDiferenciaEntreFloat&Flexbox-ByDannaGarcia.pdf" class="file-link">Unidad2CSS/ApuntesDeDiferenciaEntreFloat&Flexbox-ByDannaGarcia.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad2CSS/FloatVsFlexblox-ByDannaGarcia.md" class="file-link">Unidad2CSS/FloatVsFlexblox-ByDannaGarcia.md</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad2CSS/selectores - by Danna García.md" class="file-link">Unidad2CSS/selectores - by Danna García.md</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad4javascript/6_JavaScript LA.pdf" class="file-link">Unidad4javascript/6_JavaScript LA.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad4javascript/ApunteTomadoenClaseJSFNS.txt" class="file-link">Unidad4javascript/ApunteTomadoenClaseJSFNS.txt</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad4javascript/GuiadeEstudioJSFNS.pdf" class="file-link">Unidad4javascript/GuiadeEstudioJSFNS.pdf</a>
                                <a href="primer-anio/segundo-cuatrimestre/Web-1/Unidad4javascript/ResumenJavaScriptLA.docx" class="file-link">Unidad4javascript/ResumenJavaScriptLA.docx</a>
                            `
                        }
                    }
                }
            }
        },
        'segundo-anio': {
            title: 'Segundo Año',
            content: null
        },
        'tercer-anio': {
            title: 'Tercer Año',
            content: null
        }
    };

    let navigationStack = [];

    function showWelcomeMessage() {
        contentViewer.innerHTML = `
            <div class="welcome-message">
                <h2>Comienza a estudiar usando contenido resumido</h2>
                <p>El contenido del archivo que elijas aparecerá aquí.</p>
            </div>
        `;
    }

    function showMessage(title, message) {
        navContainer.classList.add('hidden');
        navHeader.classList.add('hidden');
        fileViewerArea.classList.add('hidden');
        contentViewer.innerHTML = `
            <div class="welcome-message">
                <h2>${title}</h2>
                <p>${message}</p>
            </div>
        `;
    }

    function renderNavigation() {
        let currentLevel = structure;
        let currentTitle = "Selecciona un año";
        let path = [...navigationStack];

        let currentContext = structure;
        for (const key of path) {
            currentContext = currentContext[key].content;
        }

        let html = '';
        
        // --- INICIO DE MODIFICACIÓN 1 ---
        // El bloque `if (!currentContext)` original causaba el error.
        // Se reemplaza por este `if (currentContext)` que solo
        // intenta iterar si el contenido no es nulo.
        if (currentContext) {
            for (const key in currentContext) {
                html += `<button class="nav-button" data-key="${key}">${currentContext[key].title}</button>`;
            }
        }
        // Si currentContext es nulo (como en 2do o 3er año), html quedará vacío.
        // --- FIN DE MODIFICACIÓN 1 ---

        navContainer.innerHTML = html;

        if (navigationStack.length === 0) {
            navHeader.classList.add('hidden');
        } else {
            let titleContext = structure;
            for (let i = 0; i < navigationStack.length; i++) {
                titleContext = titleContext[navigationStack[i]];
            }
            navTitle.textContent = titleContext.title;
            navHeader.classList.remove('hidden');
        }

        navContainer.classList.remove('hidden');
        fileViewerArea.classList.add('hidden');

        // --- INICIO DE MODIFICACIÓN 2 ---
        // Se añade lógica para mostrar el mensaje "no disponible"
        // en el contentViewer SIN ocultar el navHeader.
        if (html === '' && navigationStack.length > 0) {
            contentViewer.innerHTML = `
                <div class="welcome-message">
                    <h2>${navTitle.textContent}</h2>
                    <p>Contenido aún no disponible, vuelva pronto.</p>
                </div>
            `;
        } else {
            showWelcomeMessage();
        }
        // --- FIN DE MODIFICACIÓN 2 ---
    }

    function showFiles(subjectData) {
        fileSubjectTitle.textContent = subjectData.title;
        fileListContainer.innerHTML = subjectData.items;
        navContainer.classList.add('hidden');
        navHeader.classList.add('hidden');
        fileViewerArea.classList.remove('hidden');
        showWelcomeMessage();
    }

    function goToHome() {
        navigationStack = [];
        renderNavigation();
        searchBar.value = '';
    }

    navContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-button')) {
            const key = e.target.dataset.key;
            if (!key) return;

            let currentLevel = structure;
            for (const navKey of navigationStack) {
                currentLevel = currentLevel[navKey].content;
            }
            
            const selectedItem = currentLevel[key];

            // --- INICIO DE MODIFICACIÓN 3 ---
            // Se unificó la lógica. Si es una materia (tiene .items) va a showFiles.
            // Si es una categoría (content es nulo O es un objeto),
            // simplemente navega.
            if (selectedItem.items) {
                navigationStack.push(key);
                showFiles(selectedItem);
            } else if (selectedItem.content || selectedItem.content === null) {
                navigationStack.push(key);
                renderNavigation();
                if (selectedItem.content === null) {
                    searchBar.value = '';
                }
            }
            // --- FIN DE MODIFICACIÓN 3 ---
        }
    });

    navBackButton.addEventListener('click', () => {
        navigationStack.pop();
        renderNavigation();
        searchBar.value = '';
    });

    backButton.addEventListener('click', () => {
    const query = searchBar.value.trim();

    if (query.length > 0) {
        searchBar.value = '';
        navigationStack = [];
        renderNavigation();
    } else {
        navigationStack.pop();
        renderNavigation();
    }
});

    navHomeButton.addEventListener('click', goToHome);
    homeButton.addEventListener('click', goToHome);

    fileListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('file-link')) {
            e.preventDefault();
            const allLinks = fileListContainer.querySelectorAll('.file-link');
            allLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');

            const filePath = e.target.getAttribute('href');

            if (filePath.toLowerCase().endsWith('.docx')) {
                const link = document.createElement('a');
                link.href = filePath;
                link.download = filePath.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                contentViewer.innerHTML = `
                    <div class="welcome-message">
                        <h2>Descarga iniciada</h2>
                        <p>Los archivos .docx se descargan automáticamente.</p>
                    </div>
                `;
            } else {
                contentViewer.innerHTML = `<embed id="file-embed" src="${filePath}" />`;
            }
        }
    });

    function performSearch() {
        const query = searchBar.value.toLowerCase().trim();

        if (query.length < 2) {
            navigationStack = [];
            renderNavigation();
            return;
        }

        let resultsHTML = '';
        const tempDiv = document.createElement('div');

        for (const yearKey in structure) {
            const year = structure[yearKey];
            if (!year.content) continue;

            for (const semKey in year.content) {
                const semester = year.content[semKey];
                if (!semester.content) continue;

                for (const subjKey in semester.content) {
                    const subject = semester.content[subjKey];
                    if (!subject.items) continue;

                    tempDiv.innerHTML = subject.items;
                    const links = tempDiv.querySelectorAll('.file-link');

                    links.forEach(link => {
                        if (link.textContent.toLowerCase().includes(query)) {
                            resultsHTML += `
                                <div class="search-result-item">
                                    <span class="subject-tag">${year.title} > ${semester.title} > ${subject.title}:</span>
                                    ${link.outerHTML}
                                </div>
                            `;
                        }
                    });
                }
            }
        }

        if (resultsHTML === '') {
            resultsHTML = '<p>No se encontraron archivos.</p>';
        }

        fileSubjectTitle.textContent = `Resultados para: "${query}"`;
        fileListContainer.innerHTML = resultsHTML;
        
        navContainer.classList.add('hidden');
        navHeader.classList.add('hidden');
        fileViewerArea.classList.remove('hidden');
        showWelcomeMessage();
    }

    searchBar.addEventListener('input', performSearch);

    searchBar.addEventListener('blur', () => {
        if (searchBar.value.trim() === '') {
            navigationStack = [];
            renderNavigation();
        }
    });

    searchBar.addEventListener('search', () => {
        if (searchBar.value.trim() === '') {
            navigationStack = [];
            renderNavigation();
        }
    });

    renderNavigation();
});