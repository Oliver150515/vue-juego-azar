// PARA CORRER LOS TEST SE UNA: npm run test:unit
// DOCUMENTACION: https://jestjs.io/

// NOMBRE DEL COMPONENTE
describe('example Component', () => {
  // NOMBRE DE LA PRUEBA
  test('Debe de ser mayor a 10', () => {

    //Arreglar
    let value = 5;

    // estimulo
    value = value + 5

    // EJECUCION DE LAS PRUEBAS O VALIDADORES
    expect(value).toBeGreaterThan(10)

  })

})