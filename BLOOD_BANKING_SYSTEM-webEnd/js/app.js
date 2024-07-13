async function includeHTML(elementId, file) {
  const response = await fetch(file);
  const htmlContent = await response.text();
  document.getElementById(elementId).innerHTML = htmlContent;
}
includeHTML('hansel','/pages/home_Pride.html');
includeHTML('kelly','/pages/kelly_page.html');
