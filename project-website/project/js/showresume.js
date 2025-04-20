// Path to your PDF file
const pdfUrl = 'assets/Brayden Corbridge Resume mar 2024.pdf';

// Get the container where the PDF will be rendered
const container = document.getElementById('pdf-viewer');

// Load the PDF using PDF.js
const loadingTask = pdfjsLib.getDocument(pdfUrl);
loadingTask.promise.then(pdf => {
    // Function to render a specific page
    const renderPage = (pageNumber) => {
        pdf.getPage(pageNumber).then(page => {
            const viewport = page.getViewport({ scale: 1 }); // Start with scale 1
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            container.appendChild(canvas);

            // Dynamically calculate the scale based on container width
            const containerWidth = container.offsetWidth;
            const scale = containerWidth / viewport.width;

            // Get a new viewport with the calculated scale
            const scaledViewport = page.getViewport({ scale });

            // Set canvas dimensions for higher resolution
            const outputScale = window.devicePixelRatio || 1; // Use device pixel ratio for better quality
            canvas.width = Math.floor(scaledViewport.width * outputScale);
            canvas.height = Math.floor(scaledViewport.height * outputScale);
            canvas.style.width = `${scaledViewport.width}px`;
            canvas.style.height = `${scaledViewport.height}px`;

            // Scale the context for high-resolution rendering
            context.scale(outputScale, outputScale);

            // Render the page into the canvas
            page.render({
                canvasContext: context,
                viewport: scaledViewport
            });
        });
    };

    // Render all pages
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        renderPage(pageNumber);
    }

    // Re-render all pages on window resize for responsiveness
    window.addEventListener('resize', () => {
        // Clear the container and re-render all pages
        container.innerHTML = '';
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            renderPage(pageNumber);
        }
    });
}).catch(error => {
    console.error('Error loading PDF:', error);
    container.innerHTML = '<p>Failed to load PDF. Please try again later.</p>';
});