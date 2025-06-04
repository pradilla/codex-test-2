document.getElementById('dataForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const errorSpan = document.getElementById('error');
  const resultPre = document.getElementById('result');
  const email = emailInput.value.trim();
  if(!email.endsWith('@infracommerce.lat')) {
    errorSpan.textContent = 'Email must end with @infracommerce.lat';
    resultPre.textContent = '';
    return;
  }
  errorSpan.textContent = '';
  try {
    const response = await fetch('https://n8n.ifc-tech.lat/webhook/cencosud-sameday-check');
    if(!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    resultPre.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    resultPre.textContent = 'Error: ' + err.message;
  }
});
