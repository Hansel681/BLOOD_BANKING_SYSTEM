async function includeHTML(elementId, file) {
  const response = await fetch(file);
  const htmlContent = await response.text();
  document.getElementById(elementId).innerHTML = htmlContent;
}
includeHTML('kelly','/pages/kelly_page.html');
includeHTML('pride','/pages/pride_page.html');

