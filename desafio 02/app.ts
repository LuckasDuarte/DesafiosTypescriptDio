enum Profissao {
    'atriz',
    'Padeiro',
}

interface cadastro {
    nome: String,
    idade: Number,
    profissao: Profissao,
}

let pessoa1: cadastro = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.atriz,
}

let pessoa2: cadastro = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
}


let pessoa3: cadastro = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.atriz,
};

let pessoa4: cadastro = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
};