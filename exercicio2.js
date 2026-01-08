const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

// ---------------------------------------------

const imprimirEmpresas = () => {
  return companies.map((entrada) => {
    return `O nome desta empresa é ${entrada.name} e foi criada em  ${entrada.start}`;
  });
};

console.log(imprimirEmpresas());

// ---------------------------------------------

const procurarPorData = (valor = 1987) =>
  companies.filter((entrada) => entrada.start > valor);

console.log(procurarPorData());

// ---------------------------------------------

const initialValue = 0;

const soma = ages.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(soma);

// ---------------------------------------------

const { name, category } = companies[0];

console.log({ name, category });

// ---------------------------------------------

const { street } = person.address;

console.log({ street });

// ---------------------------------------------

const filtarEntreDatas = () =>
  companies.filter((entrada) => entrada.start > 1996 && entrada.start <= 2004);

console.log(filtarEntreDatas());

// ---------------------------------------------
