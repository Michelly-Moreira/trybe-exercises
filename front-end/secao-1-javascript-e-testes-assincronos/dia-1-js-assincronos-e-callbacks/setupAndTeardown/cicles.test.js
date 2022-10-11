// cicles.test.js
/* 
let cities = [];

const addCity = (city) => {
  cities.push(city);
  //return cities;
};
 //console.log(addCity('Campinas'))
const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
  //return cities;
};
//console.log(removeCity('Campinas'))
// A função addCity, adiciona cidades ao array, e removeCity, remove cidades desse array.
 
beforeEach(() => {
  cities = [...cities, 'Pindamonhangaba'];
  //return cities
});
//console.log(beforeEach(cities))
// roda antes de cada um dos testes para definir suas configurações. Por isso, a cidade Pindamonhangaba é adicionada ao array cities antes de cada teste. Etapa: setup

afterEach(() => {
  cities = [];
  //return cities;
});  */
// afterEach é executada após cada teste. Para evitar que o que é feito em um teste “vaze” para o outro. Podendo limpar nosso array ao final de cada teste usando o afterEach. Etapa: Teardown
 

//Etapa de testes, realizada abaixo:
/* test('Testa a função addCity', () => {
  expect.assertions(4);
  addCity('Campinas');
  addCity('Goiania');
  addCity('Recife');
  expect(cities).toHaveLength(3);
  expect(cities).toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
});

test('Testa a função removeCity', () => {
  expect.assertions(4);
  removeCity('Campinas');
  expect(cities).toHaveLength(2);
  expect(cities).not.toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
}); */

/* Testando beforeEach, precisa desativar os testes realizados acima.
test('Testa a função addCity utilizando o beforeEach', () => {
  expect.assertions(5);
  addCity('Campinas');
  addCity('Goiania');
  addCity('Recife');
  expect(cities).toHaveLength(4);
  expect(cities).toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
  expect(cities).toContain('Pindamonhangaba');
});

test('Testa a função removeCity utilizando o beforeEach', () => {
  expect.assertions(5);
  removeCity('Campinas');
  expect(cities).toHaveLength(4);
  expect(cities).not.toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
  expect(cities).toContain('Pindamonhangaba');
  console.log(cities);
}); */
/* 
Realizando o teardown, testando o afterEach, precisa desativar os testes acima.
test('Testa a função addCity utilizando o afterEach', () => {
  expect.assertions(5);
  addCity('Campinas');
  addCity('Goiania');
  addCity('Recife');
  expect(cities).toHaveLength(4);
  expect(cities).toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
  expect(cities).toContain('Pindamonhangaba');
});

test('Testa a função removeCity utilizando o afterEach', () => {
  expect.assertions(2);
  removeCity('Pindamonhangaba');
  expect(cities).toHaveLength(0);
  expect(cities).not.toContain('Pindamonhangaba');
}); */


/* Utilizando BEFOREEACH e AFTEREACH junto com DESCRIBE
Tenho um bloco de describe agrupando os testes e o beforeEach ou afterEach estão dentro desse describe, ele rodará apenas dentro dos testes que estão nesse describe, ou seja, como há o segundo describe, aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.
// cicles.test.js
 let cities = [];

 const addCity = (city) => {
 cities.push(city);
 };

 const removeCity = (city) => {
 cities = cities.filter((eachCity) => eachCity !== city);
 };

describe('Agrupa o primeiro bloco de testes', () => {
  beforeEach(() => {
    cities = [...cities, 'Pindamonhangaba'];
  });

  afterEach(() => {
    cities = [];
  });

  test('Testa a função addCity dentro do primeiro bloco de testes', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Pindamonhangaba');
  });

  test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).toHaveLength(0);
    expect(cities).not.toContain('Pindamonhangaba');
  });
});

describe('Agrupa o segundo bloco de testes', () => {
  beforeEach(() => {
    cities = [...cities, 'Tangamandapio'];
  });

  afterEach(() => {
    cities = [];
  });

  test('Testa a função addCity dentro do segundo bloco de testes', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Tangamandapio');
  });

  test('Testa a função removeCity dentro do segundo bloco de testes', () => {
    expect.assertions(3);
    removeCity('Tangamandapio');
    expect(cities).toHaveLength(0);
    expect(cities).not.toContain('Tangamandapio');
    expect(cities).not.toContain('Pindamonhangaba');
  });
}); */