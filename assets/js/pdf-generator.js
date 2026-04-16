function generatePDF() {
  var button = document.getElementById('pdfButton');
  button.disabled = true;
  button.textContent = 'Generating...';

  var element = document.querySelector('.wrapper');
  var opt = {
    margin: 0,
    filename: 'aaron-rietschlin-resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(function () {
    button.disabled = false;
    button.textContent = 'PDF';
  });
}
