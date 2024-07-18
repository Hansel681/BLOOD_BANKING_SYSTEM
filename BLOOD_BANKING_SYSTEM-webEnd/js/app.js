async function includeHTML(elementId, file) {
  const response = await fetch(file);
  const htmlContent = await response.text();
  document.getElementById(elementId).innerHTML = htmlContent;
}

includeHTML('hansel','/pages/hansel_page.html');
includeHTML('kelly', '/pages/kelly_page.html');
includeHTML('kelly','/pages/hilford_page.html');
includeHTML('pasky','/pages/pasky_page.html');
includeHTML('pride','/pages/pride_page.html');

