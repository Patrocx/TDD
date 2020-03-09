var expect = chai.expect; 

describe('Funcion suma funciona correctamente', function(){
	it('Dado a y b se suma correctamente',function(){
	    expect(suma(5,5)).to.equal(10);
    })
})
describe('Funcion resta funciona correctamente', function(){
	it('Dado a y b se resta correctamente',function(){
	    expect(resta(10,5)).to.equal(5);
    })
})