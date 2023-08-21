// ## Callback
// Exercício 1: Callback Básico
// Crie uma função chamada executarCallback que recebe uma função de callback como argumento e a executa.
const executarCallback = (callback) =>
  typeof callback === "function"
    ? callback()
    : "O argumento não é uma função de callback.";

const callback = () => "A função de callback foi executada!";

console.log(executarCallback(callback));

// Exercício 2: Manipulação de Array
// Crie uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada elemento do array e retornar um novo array com os elementos dobrados.
const numeros = [2, 23, 8, 4, 12, 7];
const dobrarNumeros = (numeros, callback) => numeros.map(callback);
const dobrar = (numero) => numero * 2;

console.log(dobrarNumeros(numeros, dobrar));

// Exercício 3: Filtragem com Callback
// Crie uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve retornar um novo array contendo apenas as palavras que atendem ao critério da função de callback.
const palavras = ["amor", "batom", "cinco", "pincel", "luz", "lápis"];

const filtrarPalavras = (palavras, callback) => palavras.filter(callback);
const palavraComCincoLetras = (palavra) => palavra.length === 5;

console.log(filtrarPalavras(palavras, palavraComCincoLetras));

// Exercício 4: Ordenação com Callback
// Crie uma função chamada ordenarNumeros que recebe um array de números e uma função de callback para determinar a ordem de ordenação. A função ordenarNumeros deve retornar um novo array com os números ordenados de acordo com o critério da função de callback.
const ordenarNumeros = (numeros, callback) => callback(numeros);
const ordemDaOrdenação = (numeros) => numeros.slice().sort((a, b) => a - b);

console.log(ordenarNumeros(numeros, ordemDaOrdenação));

// Exercício 5: Timer com Callback
// Crie uma função chamada executarAposTempo que recebe uma função de callback e um tempo em milissegundos. A função executarAposTempo deve agendar a execução da função de callback após o tempo especificado.
const executarAposTempo = (callback, tempoEmMilissegundos) =>
  setTimeout(callback, tempoEmMilissegundos);

const callbackComTempo = (tempoEmMilissegundos) =>
  `A função de callback foi executada após ${
    tempoEmMilissegundos / 1000
  } segundos.`;

executarAposTempo(() => console.log(callbackComTempo(2000)), 2000);

// ## Promise
// Exercício 1: Criando uma Promise Simples
// Crie uma Promise simples que retorna uma mensagem de sucesso após 2 segundos. Use a função setTimeout para simular um atraso.
const minhaPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Cheguei após 2 segundos.");
  }, 2000);
});

minhaPromise.then((mensagem) => console.log(`${mensagem}`));

// Exercício 2: Tratamento de Erro em Promise
// Crie uma Promise que simula uma operação que pode falhar. Se a operação for bem-sucedida, resolva a Promise com uma mensagem de sucesso. Caso contrário, rejeite-a com uma mensagem de erro. (Lembre-se de usar o reject)
const sucessoOuErro = (simulacao) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      simulacao
        ? resolve("Operação bem-sucedida!")
        : reject("A operação falhou.");
    }, 2000);
  });

// Exemplo de uso
sucessoOuErro(true)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });

// Exercício 4: Encadeamento de Promises
// Crie um encadeamento de Promises que realiza uma sequência de operações assíncronas. Por exemplo, faça uma requisição a uma API, processe os dados e, em seguida, realize outra operação.
const requisicaoAPI = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ resultado: "Dados da API recebidos" }), 2000)
  );

const processaDados = (dados) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ ...dados, processado: true }), 1500)
  );

const realizaOutraOperacao = (dados) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Resultado final: ${JSON.stringify(dados)}`), 1000)
  );

requisicaoAPI()
  .then((dadosAPI) => processaDados(dadosAPI))
  .then((dadosProcessados) => realizaOutraOperacao(dadosProcessados))
  .then((resultadoFinal) => console.log(resultadoFinal))
  .catch((erro) => console.error(erro));

// Exercício 1: Promessa com Atraso Aleatório
// Crie uma função que retorna uma Promise que será resolvida após um tempo aleatório entre 1 e 5 segundos. Use a função setTimeout e Math.random() para criar esse atraso variável.
const atrasoVariavel = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          `Cheguei depois de ${Math.round(
            (Math.random() * 4000 + 1000) / 1000
          )} segundos.`
        ),
      Math.round(Math.random() * 4000 + 1000)
    )
  );

atrasoVariavel()
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });

// Exercício 2: Rejeição de Promessa
// Crie uma função que retorna uma Promise que será rejeitada após um tempo aleatório entre 1 e 3 segundos.
const rejeicaoAtrasada = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        reject(
          `Rejeitada depois de ${Math.round(
            (Math.random() * 2000 + 1000) / 1000
          )} segundos.`
        ),
      Math.round(Math.random() * 2000 + 1000)
    )
  );

rejeicaoAtrasada()
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });

// ## async e await
// Exercício 1: Função Assíncrona Simples
// Crie uma função assíncrona que retorna uma mensagem após um atraso de 2 segundos.
const segundaExecutarAposTempo = async (tempoEmMilissegundos) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(segundaCallbackComTempo(tempoEmMilissegundos)),
      tempoEmMilissegundos
    )
  );

const segundaCallbackComTempo = async (tempoEmMilissegundos) =>
  `A função de callback foi executada após ${
    tempoEmMilissegundos / 1000
  } segundos.`;

(async () => console.log(await segundaExecutarAposTempo(2000)))();

// Exercício 2: Tratamento de Erros com async/await
// Crie uma função assíncrona que simula uma operação que pode falhar. Use try e catch para lidar com erros.
const sesgundaSucessoOuErro = async (simulacao) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      simulacao
        ? resolve("Operação bem-sucedida!")
        : reject("A operação falhou.");
    }, 2000);
  });

(async () => {
  try {
    console.log(await sesgundaSucessoOuErro(true));
  } catch (erro) {
    console.error(erro);
  }
})();

// Exercício 3: Encadeamento com async/await
// Crie uma série de funções assíncronas que dependem dos resultados anteriores.
const segundaRequisicaoAPI = async () => {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!resposta.ok) {
    throw new Error(
      `Erro ao buscar os dados da API. Status: ${resposta.status}`
    );
  }
  const dadosAPI = await resposta.json();
  return dadosAPI;
};

const segundaProcessaDados = async (dados) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ ...dados, processado: true }), 1500)
  );

const segundaRealizaOutraOperacao = async (dados) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Resultado final: ${JSON.stringify(dados)}`), 1000)
  );

(async () => {
  try {
    console.log(
      await segundaRealizaOutraOperacao(
        await segundaProcessaDados(await segundaRequisicaoAPI())
      )
    );
  } catch (erro) {
    console.error(erro);
  }
})();

// Exercício 5: Consumindo API com async/await
// Crie uma função que utiliza fetch com async e await para buscar dados de uma API.
const buscarDadosDaAPI = async (url) => {
  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar os dados. Status: ${resposta.status}`);
    }
    return await resposta.json();
  } catch (erro) {
    throw new Error(`Erro na busca de dados: ${erro.message}`);
  }
};

(async () => {
  try {
    console.log(
      "Dados da API:",
      await buscarDadosDaAPI("https://jsonplaceholder.typicode.com/posts/1")
    );
  } catch (erro) {
    console.error(erro);
  }
})();
