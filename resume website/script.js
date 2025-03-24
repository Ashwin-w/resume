function generateResume() {
  // Get basic information
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const linkedin = document.getElementById('linkedin').value;
  const summary = document.getElementById('summary').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;

  // Get project links
  const project1Title = document.getElementById('project1-title').value;
  const project1Link = document.getElementById('project1-link').value;
  const project2Title = document.getElementById('project2-title').value;
  const project2Link = document.getElementById('project2-link').value;

  // Create PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Set theme colors
  doc.setDrawColor(67, 97, 238); // Primary color
  doc.setFillColor(67, 97, 238);
  doc.rect(0, 0, 210, 20, 'F'); // Header bar
  
  // Add name and contact info
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text(name, 15, 15);
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  let contactY = 25;
  doc.text(`Email: ${email} | Phone: ${phone}`, 15, contactY);
  
  if (linkedin) {
    contactY += 5;
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('LinkedIn: ' + linkedin, 15, contactY, { url: linkedin });
    doc.setTextColor(0, 0, 0);
  }

  // Add sections
  addSection(doc, 'Professional Summary', summary, 35);
  addSection(doc, 'Work Experience', experience, 35);
  addSection(doc, 'Education', education, 35);
  addSection(doc, 'Skills', skills, 35);

  // Add projects if they exist
  if (project1Title || project2Title) {
    let projectsText = '';
    if (project1Title && project1Link) {
      projectsText += `${project1Title}: ${project1Link}\n`;
    }
    if (project2Title && project2Link) {
      projectsText += `${project2Title}: ${project2Link}\n`;
    }
    addSection(doc, 'Projects & Links', projectsText, 35);
  }

  // Save PDF
  doc.save(`${name.replace(/\s+/g, '_')}_Resume.pdf`);
}

function addSection(doc, title, content, startY) {
  doc.setFontSize(14);
  doc.setTextColor(67, 97, 238); // Primary color
  doc.text(title, 15, startY);
  
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  
  // Split content into lines and add to PDF
  const lines = doc.splitTextToSize(content, 180);
  doc.text(lines, 15, startY + 5);
  
  return startY + (lines.length * 5) + 10;
}
