// O código abaixo mapeia as tags em index.html que serão usadas nesse script

const buttonConverter = document.querySelector("button");
const valueForConversion = document.querySelector("#value-for-conversion");
const inicialValue = document.querySelector("#value-of-conversion-first");
const finalValue = document.querySelector("#value-of-conversion-second");
const secondSelect = document.querySelector("#target-money");
const secondImage = document.querySelector("#second-image");
const finalCurrencyName = document.querySelector("#final-currency-name");

// O código abaixo refere-se às variáveis que serão utilizadas durante o código.

let selectedCurrency = "USD";
let selectedValueOfCurrency = 5.21;
let DollarCurrency = 5.21;
let CountryLanguageSimbol = "en-US"

// A função abaixo converte o valor da moeda de origem(real) para a moeda final(que nesse caso, podem varias entre Dólar, Euro e Bitcoin).

const converter = () => {
    //O código abaixo resgata o valor inicial a ser convertido. Logo após realiza a conversão limitando o resultado à duas casas decimais.
  const inicialCurrency = valueForConversion.value;
  const conversion = (
    valueForConversion.value / selectedValueOfCurrency
  ).toFixed(2);

// O código abaixo formata em Real, o valor inicial .

  inicialValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inicialCurrency);

  // O código abaixa formata de acordo com as regras internacionais, o valor convertido à moeda final.
  finalValue.innerHTML = new Intl.NumberFormat(CountryLanguageSimbol, {
    style: "currency",
    currency: `${selectedCurrency}`,
  }).format(conversion);
};

// O código abaixo Realiza a troca de moeda, nome da moeda, taxa de conversão, simbolo/bandeira da moeda, descrição da moeda e código da moeda.

const selectCurrency = (event) => {
  selectedCurrency = event.target.value;

  if (selectedCurrency === "USD") {
    finalCurrencyName.textContent = `Dólar Americano`;
    selectedValueOfCurrency = 5.21;
    secondImage.src = "./assets/USD.png";
    secondImage.alt = "Bandeira dos Estados Unidos"
    CountryLanguageSimbol = "en-US"
  }
  if (selectedCurrency === "EUR") {
    finalCurrencyName.textContent = `Euro`;
    selectedValueOfCurrency = 5.07;
    secondImage.src = "./assets/EUR.png";
    secondImage.alt = "Simbolo do Euro"
    CountryLanguageSimbol = "de-DE"
  }
  if (selectedCurrency === "BTC") {
    finalCurrencyName.textContent = `Bitcoin`;
    selectedValueOfCurrency = 101901.82;
    secondImage.src = "./assets/BITCOIN.png";
    secondImage.alt= "Simbolo do Bitcoin"
    CountryLanguageSimbol = "pt-BR"
  }
//O código abaixo chama a outra função, atualizandos os valores convertidos em tempo real.
  converter()
};

// O código abaixo é responsável por informar na ocasião de eventos ocorrerem. Por exempli o primeiro é responsável pelo evento click no elemento buttonConverter. Ele chamará a função converter, assim que houver o click, e essa por sua vez será responsável pela conversão.

buttonConverter.addEventListener("click", converter);

secondSelect.addEventListener("change", selectCurrency);
