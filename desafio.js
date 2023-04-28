// 1
const somar = () => {
  const indice = 13;
  let soma = 0;
  let k = 0;
  while (k < indice) {
    k += 1;
    soma += k;
  }

  return soma;
};
console.log(somar()); // 91

// 2
function ehFibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    return 'Insira um número inteiro positivo';
  }
  const pertence = `${n} pertence a sequância de fibonacci.`;
  const naoPertence = `${n} não pertence a sequância de fibonacci.`;
  let primeiro = 0;
  let segundo = 1;
  while (segundo < n) {
    const ultimo = segundo;
    segundo = primeiro + segundo;
    primeiro = ultimo;
  }
  return n === primeiro || n === segundo ? pertence : naoPertence;
}
console.log(ehFibonacci(53)); // 53 não pertence a sequância de fibonacci.
console.log(ehFibonacci(233)); // 233 pertence a sequância de fibonacci.

// 3
const dados = require('./dados.json');

const faturamentos = () => {
  const mapeados = dados
    .filter((val) => val.valor !== 0)
    .map((val) => val.valor);

  const menorFaturamento = Math.min(...mapeados);
  const diaMenorFaturamento = (dadosDia) => {
    const menorDia = dadosDia
      .filter((val) => val.valor === menorFaturamento)
      .map((val) => val.dia);

    return `O dia ${menorDia} foi o dia com o menor faturamento sendo um total de R$ ${menorFaturamento}`;
  };

  const maiorFaturamento = Math.max(...mapeados);
  const diaMaiorFaturamento = (dadosDia) => {
    const maiorDia = dadosDia
      .filter((val) => val.valor === maiorFaturamento)
      .map((val) => val.dia);

    return `O dia ${maiorDia} foi o dia com o maior faturamento sendo um total de R$ ${maiorFaturamento}`;
  };

  const mediaFaturamento = mapeados
    .reduce((acc, curr) => acc + curr) / mapeados.length;

  const faturamentoSuperiorMedia = dados
    .filter((val) => val.valor > mediaFaturamento)
    .map((val) => `O dia ${val.dia} teve um faturamento de ${val.valor} foi superior a média mensal de faturamento.`)
    .join('\n');

  return `${diaMenorFaturamento(dados)}\n${diaMaiorFaturamento(dados)}\n${faturamentoSuperiorMedia}`;
};
console.log(faturamentos());

// O dia 14 foi o dia com o menor faturamento sendo um total de R$ 373.7838
// O dia 16 foi o dia com o maior faturamento sendo um total de R$ 48924.2448
// O dia 1 teve um faturamento de 22174.1664 foi superior a média mensal de faturamento.
// O dia 2 teve um faturamento de 24537.6698 foi superior a média mensal de faturamento.
// O dia 3 teve um faturamento de 26139.6134 foi superior a média mensal de faturamento.
// O dia 6 teve um faturamento de 26742.6612 foi superior a média mensal de faturamento.
// O dia 8 teve um faturamento de 42889.2258 foi superior a média mensal de faturamento.
// O dia 9 teve um faturamento de 46251.174 foi superior a média mensal de faturamento.
// O dia 16 teve um faturamento de 48924.2448 foi superior a média mensal de faturamento.
// O dia 20 teve um faturamento de 35240.1826 foi superior a média mensal de faturamento.
// O dia 21 teve um faturamento de 43829.1667 foi superior a média mensal de faturamento.
// O dia 27 teve um faturamento de 25681.8318 foi superior a média mensal de faturamento.

// 4
const percentualRepresentacao = () => {
  const faturamentoEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamentoEstado).reduce((acc, curr) => acc + curr);

  const percentualMapeado = Object.entries(faturamentoEstado).map(([estado, valor]) => {
    const percentual = ((valor / total) * 100).toFixed(2);
    return `${estado}: ${percentual}`;
  });

  return percentualMapeado.join('\n');
};
console.log(percentualRepresentacao());

// 5
const inverteString = (string) => {
  let inverter = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    inverter += string[i];
  }
  return inverter;
};
console.log(inverteString('Teste na Target Sistemas')); // sametsiS tegraT an etseT
