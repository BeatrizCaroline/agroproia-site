// Validação simples do formulário
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  feedback.style.display = 'none';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value;
  const message = form.message.value.trim();
  const consent = form.consent.checked;

  let ok = true;
  const showErr = (id, msg) => document.getElementById(id).textContent = msg;

  showErr('err-name',''); showErr('err-email',''); showErr('err-subject','');
  showErr('err-message',''); showErr('err-consent','');

  if(!name) { showErr('err-name','Informe o nome.'); ok = false; }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { showErr('err-email','E-mail inválido.'); ok = false; }
  if(!subject) { showErr('err-subject','Selecione o assunto.'); ok = false; }
  if(message.length < 10) { showErr('err-message','Mensagem muito curta.'); ok = false; }
  if(!consent) { showErr('err-consent','Aceite necessário.'); ok = false; }

  if(!ok){
    feedback.style.display = 'block';
    feedback.style.background = '#fff3f3';
    feedback.style.color = '#880d15';
    feedback.textContent = 'Corrija os erros e tente novamente.';
    return;
  }

  feedback.style.display = 'block';
  feedback.style.background = 'rgba(178,228,171,0.8)';
  feedback.style.color = '#1a5a1a';
  feedback.textContent = 'Mensagem enviada com sucesso!';
  form.reset();
});