/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Juarez', 5, false, 'Javascript', -0];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(arg){
	return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function myFunction(arr, index){
	return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var fiveValues = ['Juarez', {a: 2}, true, [1,3,5], 60.5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(fiveValues, 0));
console.log(myFunction(fiveValues, 1));
console.log(myFunction(fiveValues, 2));
console.log(myFunction(fiveValues, 3));
console.log(myFunction(fiveValues, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
	var allBooks = {
		'Como ser um Front End': {
			quantidadePaginas: 300,
			autor: 'John Resig e Bear Bibeault',
			editora: 'Novatec'
		},
		'Aprendendo Javascript na Prática': {
			quantidadePaginas: 600,
			autor: 'Fernando Daciuk',
			editora: 'Casa do Código'
		},
		'Quero ser um desenvolvedor': {
			quantidadePaginas: 900,
			autor: 'Erick A. Meyer',
			editora: 'Bookman'
		}
	};

	if(!bookName){
		return allBooks;
	}

	return allBooks[bookName];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Como ser um Front End tem ' + book('Como ser um Front End').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O livro ' + bookName + ' tem ' + book(bookName).autor + ' páginas!');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + ' páginas!');
