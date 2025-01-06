document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    pesquisarTicket();
});

document.getElementById("numeroTicket").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede a submissão do formulário
        pesquisarTicket();
    }
});

function pesquisarTicket() {
    var numero = document.getElementById("numeroTicket").value;
    if (numero !== "") {
        var url = "https://centraldeti.institutomollitiam.org.br/front/ticket.form.php?id=" + numero;
        window.open(url, "_blank");
        document.getElementById("numeroTicket").value = ""; // Limpar o campo de entrada
        return false; // Impede a submissão do formulário
    } else {
        alert("Por favor, insira um número de ticket.");
        return false; // Impede a submissão do formulário
    }
}

// Função para abrir o link com base na seleção e redefinir o dropdown
function abrirLink(menu, valor) {
    var urls = {
        'sisEduc': {
            'Saquarema': 'https://homologa.siseducsaquarema.org.br/',
            'Arraial': 'https://homologacao.siseducarraial.org.br/',
            'São Gonçalo': 'https://hml.siseducsg.org.br/',
            'Guapimirim': 'https://homologacao.educaguapi.org.br/',
            'COUNI - Graduação': 'https://homologacao.conexaosaquarema.org.br/',
            'COUNI - Pós': 'https://pos-hml.conexaouniversitaria.org.br/'
        },
        'ged': {
            'Saquarema': 'https://hmlged.siseducsaquarema.org.br/',
            'Arraial': 'https://hmlged.siseducarraial.org.br/',
            'São Gonçalo': 'https://hmlged.siseducsg.org.br/',
            'Guapi - Educ': 'https://hmlged.educaguapi.org.br/',
            'Guapi - Adm': 'https://hmlged.gedguapimirim.org.br/',
            'Maricá': 'https://hml.gedsmemarica.org.br/'
        },
        'matricula': {
            'Saquarema': 'https://homologa.siseducsaquarema.org.br/siseduc/Matriculaonline_inscricao',
            'Arraial': 'https://homologacao.siseducarraial.org.br/siseduc/Matriculaonline_inscricao',
            'São Gonçalo': 'https://hml.siseducsg.org.br/siseduc/prematricula',
            'Guapimirim': 'https://homologacao.educaguapi.org.br/siseduc/Matriculaonline_inscricao',
            'CIUG': 'https://hml.siseducsg.org.br/siseduc/Mat_prematriculaciug/'
        },
        'portalAluno': {
            'Saquarema': 'https://hml-portaldoaluno.siseducsaquarema.org.br/',
            'Arraial': '-',
            'São Gonçalo': '-',
            'Guapimirim': '-'
        }
    };

    // Verifica se o valor da seleção é válido e se existe um link
    if (urls[menu] && urls[menu][valor]) {
        window.open(urls[menu][valor], "_blank");
    }

    // Resetar o select para a opção padrão
    document.getElementById(menu).value = "";
}
