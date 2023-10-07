var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let & const
var seraQuePode = '?';
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
    console.log(acao);
}
var cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
var segredo = "externo!";
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        var def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
var saudacao = function () { return console.log("Olá!"); };
saudacao();
var falarCom = function (pessoa) { return console.log('Ola ' + pessoa); };
falarCom('João');
// this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' })
// normalComThisEspecial()
// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial()
// Parâmetros padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(5);
// Rest & Spread
var numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Fernanda'];
var turmaB = __spreadArray(__spreadArray(['Fernando'], turmaA, true), ['Miguel', 'Lorena'], false);
console.log(turmaB);
function retornarArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray.apply(void 0, numbers));
// Rest & Spread (Tupla)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    // console.log(Array.isArray(params))
    console.log("2) " + params[0] + " " + params[1] + " " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
// Destructuring (array)
var caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor);
console.log(ano);
// Destructuring (objeto)
var item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
var nomeItem = item.nome;
var precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
var n = item.nome, p = item.preco, w = item.caracteristicas.w;
console.log(n);
console.log(p);
console.log(w);
var usuarioID = 'SuporteCod3r';
var notificacoes = '19';
// const boasVindas = 'Boas vindas ' + usuarioID + 
//      'Notificações: ' + notificacoes
var boasVindas = "\nBoas vindas " + usuarioID + ",\nNotifica\u00E7\u00F5es: " + (parseInt(notificacoes) > 9 ? '+9' : notificacoes) + "\n";
console.log(boasVindas);
console.log("" + (1 + 1) * 30);
console.log("Motor: " + caracteristicas[0]);
// Desafios
// Exercicio 1
var dobro = function (valor) {
    return valor * 2;
};
var dobro2 = function (valor) { return valor * 2; };
console.log(dobro(10));
// Exercicio 2
var dizerOla = function (nome) {
    if (nome === undefined) {
        nome = 'Pessoa';
    }
    console.log('Olá, ' + nome);
};
var dizerOla2 = function (nome) {
    console.log("Ol\u00E1, " + nome);
};
dizerOla("");
dizerOla('Anna');
// Exercicio 3
var nums = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log(Math.min.apply(Math, nums));
// Exercicio 4
var array = __spreadArray([55, 20], nums, true);
// Adicionar todos os elementos de "nums" em array
console.log(array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4];
// var nota1 = notas[0]
// var nota2 = notas[1]
// var nota3 = notas[2]
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
// Exercicio 6
var cientista = { primeiroNome: 'Will', expeciencia: 12 };
// var primeiroNome = cientista.primeiroNome
// var expeciencia = cientista.expeciencia
var primeiroNome = cientista.primeiroNome, expeciencia = cientista.expeciencia;
console.log(primeiroNome, expeciencia);
