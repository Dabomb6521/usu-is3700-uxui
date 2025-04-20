// Path to your PDF file
const pdfUrl = 'assets/Brayden Corbridge Resume mar 2024.pdf';

// Get the container where the PDF will be rendered
const container = document.getElementById('pdf-viewer');

// Load the PDF using PDF.js
const loadingTask = pdfjsLib.getDocument(pdfUrl);
loadingTask.promise.then(pdf => {
    // Render the first page of the PDF
    pdf.getPage(1).then(page => {
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        container.appendChild(canvas);

        // Render the page into the canvas
        page.render({
            canvasContext: context,
            viewport: viewport
        });
    });
}).catch(error => {
    console.error('Error loading PDF:', error);
    container.innerHTML = '<p>Failed to load PDF. Please try again later.</p>';
});