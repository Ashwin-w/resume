function generateResume() {
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const summary = document.getElementById('summary').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;

  // Create a new PDF instance
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add content to the PDF
  doc.setFontSize(18);
  doc.text(name, 10, 20);
  doc.setFontSize(12);
  doc.text(`Email: ${email} | Phone: ${phone}`, 10, 30);

  doc.setFontSize(14);
  doc.text("Professional Summary", 10, 40);
  doc.setFontSize(12);
  doc.text(summary, 10, 50);

  doc.setFontSize(14);
  doc.text("Work Experience", 10, 70);
  doc.setFontSize(12);
  doc.text(experience, 10, 80);

  doc.setFontSize(14);
  doc.text("Education", 10, 100);
  doc.setFontSize(12);
  doc.text(education, 10, 110);

  doc.setFontSize(14);
  doc.text("Skills", 10, 130);
  doc.setFontSize(12);
  doc.text(skills, 10, 140);

  // Save the PDF
  doc.save(`${name}_Resume.pdf`);
}