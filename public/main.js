document.getElementById('dataForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const errorSpan = document.getElementById('error');
  const resultTable = document.getElementById('result');
  const email = emailInput.value.trim();
  if(!email.endsWith('@infracommerce.lat')) {
    errorSpan.textContent = 'Email must end with @infracommerce.lat';
    resultTable.innerHTML = '';
    return;
  }
  errorSpan.textContent = '';
  try {
    const response = await fetch('https://n8n.ifc-tech.lat/webhook/cencosud-sameday-check');
    if(!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    renderTable(data);
  } catch (err) {
    resultTable.innerHTML = 'Error: ' + err.message;
  }
});

function renderTable(data) {
  const resultTable = document.getElementById('result');
  if (!Array.isArray(data) || data.length === 0) {
    resultTable.innerHTML = 'No results';
    return;
  }
  const headers = Object.keys(data[0]);
  let html = '<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
  html += data.map(row => '<tr>' + headers.map(h => `<td>${row[h]}</td>`).join('') + '</tr>').join('');
  html += '</tbody>';
  resultTable.innerHTML = html;
}
