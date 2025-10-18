document.addEventListener('DOMContentLoaded', () => {
    const subjectNav = document.getElementById('subject-nav');
    const fileViewerArea = document.getElementById('file-viewer-area');
    const contentViewer = document.getElementById('content-viewer');
    const backButton = document.getElementById('back-button');
    const fileListContainer = document.getElementById('file-list');
    const fileSubjectTitle = document.getElementById('file-subject-title');

    const files = {
        db: {
            title: 'Base de Datos',
            items: `
                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/ModeloRelacional(EzequielBequis).pdf" class="file-link">ModeloRelacional(EzequielBequis).pdf</a>
                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/NotasTomadasEn Clase(LeandroAmaya).txt" class="file-link">NotasTomadasEn Clase(LeandroAmaya).txt</a>
                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/ResumenDeAlgebraRelacional-by DannaGarcia.pdf" class="file-link">ResumenDeAlgebraRelacional-by DannaGarcia.pdf</a>
                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/teoria/1ModeloEntidad-RelacionLeandroAmaya.pdf" class="file-link">teoria/1ModeloEntidad-RelacionLeandroAmaya.pdf</a>
                <a href="primer-anio/segundo-cuatrimestre/base-de-datos/teoria/2Modelo_RelacionalLeandro Amaya.pdf" class="file-link">teoria/2Modelo_RelacionalLeandro Amaya.pdf</a>
            `
        },
        lab: {
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
        web: {
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
    };

    subjectNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-button')) {
            const subject = e.target.dataset.subject;
            if (files[subject]) {
                fileSubjectTitle.textContent = files[subject].title;
                fileListContainer.innerHTML = files[subject].items;
                subjectNav.classList.add('hidden');
                fileViewerArea.classList.remove('hidden');
            }
        }
    });

    backButton.addEventListener('click', () => {
        fileViewerArea.classList.add('hidden');
        subjectNav.classList.remove('hidden');
    });

    fileListContainer.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('file-link')) {
            const allLinks = fileListContainer.querySelectorAll('.file-link');
            allLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
            
            const filePath = e.target.getAttribute('href');
            contentViewer.innerHTML = `<embed id="file-embed" src="${filePath}" />`;
        }
    });
});