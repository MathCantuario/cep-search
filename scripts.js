function buscarCEP() {
    const cepInput = document.getElementById('cep-input').value.replace(/\D/g, '');
    
    if (cepInput.length !== 8) {
        alert('Por favor, insira um CEP válido.');
        return;
    }
    
    const url = `https://viacep.com.br/ws/${cepInput}/json/`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado.');
                return;
            }

            document.getElementById('logradouro').innerText = `Logradouro: ${data.logradouro}`;
            document.getElementById('bairro').innerText = `Bairro: ${data.bairro}`;
            document.getElementById('cidade').innerText = `Cidade: ${data.localidade}`;
            document.getElementById('estado').innerText = `Estado: ${data.uf}`;
        })
        .catch(error => {
            alert('Ocorreu um erro ao buscar o CEP. Tente novamente.');
            console.error('Erro:', error);
        });
}
