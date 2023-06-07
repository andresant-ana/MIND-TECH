function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const pais = document.getElementById('pais').value;
    const topico = document.getElementById('topico').value;
    const aceite = document.getElementById('aceite').checked;
    const mensagem = document.getElementById('mensagem').value;
  
    let erro = '';
  
    if (!validarCampoTexto(nome)) {
        erro += 'O campo Nome deve ter pelo menos 2 letras e não deve permitir números.\n';
    }
  
    if (!validarCampoTexto(sobrenome)) {
        erro += 'O campo Sobrenome deve ter pelo menos 2 letras e não deve permitir números.\n';
    }
  
    if (!validarEmail(email)) {
        erro += 'O campo Email deve ser preenchido corretamente.\n';
    }
  
    if (!validarTelefone(telefone)) {
        erro += 'O campo Telefone deve ser preenchido corretamente.\n';
    }
  
    if (!validarCampoTexto(cidade)) {
        erro += 'O campo Cidade deve ter pelo menos 2 letras e não deve permitir números.\n';
    }
  
    if (!validarCampoTexto(pais)) {
        erro += 'O campo País deve ter pelo menos 2 letras e não deve permitir números.\n';
    }
  
    if (!validarCampoTexto(estado, 2, 2)) {
        erro += 'O campo Estado deve ter exatamente 2 letras e não deve permitir números.\n';
    }
  
    if (topico === '') {
        erro += 'Selecione um Tópico da mensagem.\n';
    }
  
    if (!aceite) {
        erro += 'Você deve aceitar os termos de uso.\n';
    }
  
    if (mensagem.length < 4 || mensagem.length > 900) {
        erro += 'O campo Mensagem deve ter pelo menos 4 caracteres e no máximo 900 caracteres.\n';
    }
  
    if (erro !== '') {
        alert(erro);
        return false;
    }
  
    alert('Mensagem enviada com sucesso! A Mind Tech irá responder em até 48h.');
        return true;
    }
  
    function validarCampoTexto(campo, min = 2, max = undefined) {
        const regex = new RegExp(`^[A-Za-zÀ-ÿ\\s]{${min},${max || ''}}$`);
        return regex.test(campo);
    }

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function validarTelefone(telefone) {
        const regex = /^\d{10,11}$/;
        return regex.test(telefone);
    }
  