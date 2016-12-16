const expect = require('chai').expect
var areaCalc = require('./areaCalc.js')
var pokemon = require('./pokeSort.js')

var pokeFunction = pokemon.pokeSort

describe('areaCalc', function() {

    it('should return area of a triangle', function() {
        expect(areaCalc(11, 10, 10)).to.equal(45.934055993347684)
    })

    it('should return 0 if 0 is in paramters', function() {
        expect(areaCalc(0.25, 0.75, 0.5)).to.equal(0)
        expect(areaCalc(0, 0, 0)).to.deep.equal(0)
    })
})

describe('pokemon.pokeSort', function() {

    it('should sort array by name', function() {
      var arr = [{
        id: 4,
        name: 'charmander',
        weight: 12.3
      }, {
        id: 1,
        name: 'bulbasaur',
        weight: 22.4
      }, {
        id: 7,
        name: 'squirtle',
        weight: 17.9
      }, {
        id: 144,
        name: 'articuno',
        weight: 60.2
      }]
        expect(pokeFunction(arr, 'name')).to.deep.equal(
            [{
                id: 144,
                name: 'articuno',
                weight: 60.2
            }, {
                id: 1,
                name: 'bulbasaur',
                weight: 22.4
            }, {
                id: 4,
                name: 'charmander',
                weight: 12.3
            }, {
                id: 7,
                name: 'squirtle',
                weight: 17.9
            }])
    })

    it('should sort array by weight', function() {
      var arr = [{
        id: 4,
        name: 'charmander',
        weight: 12.3
      }, {
        id: 1,
        name: 'bulbasaur',
        weight: 22.4
      }, {
        id: 7,
        name: 'squirtle',
        weight: 17.9
      }, {
        id: 144,
        name: 'articuno',
        weight: 60.2
      }]
        expect(pokeFunction(arr, 'weight')).to.deep.equal(
            [{
                id: 4,
                name: 'charmander',
                weight: 12.3
            }, {
                id: 7,
                name: 'squirtle',
                weight: 17.9
            }, {
                id: 1,
                name: 'bulbasaur',
                weight: 22.4
            }, {
                id: 144,
                name: 'articuno',
                weight: 60.2
            }])
    })

    it('should sort array by id', function() {
      var arr = [{
        id: 4,
        name: 'charmander',
        weight: 12.3
      }, {
        id: 1,
        name: 'bulbasaur',
        weight: 22.4
      }, {
        id: 7,
        name: 'squirtle',
        weight: 17.9
      }, {
        id: 144,
        name: 'articuno',
        weight: 60.2
      }]
        expect(pokeFunction(arr, 'id')).to.deep.equal(
            [{
                id: 1,
                name: 'bulbasaur',
                weight: 22.4
            }, {
                id: 4,
                name: 'charmander',
                weight: 12.3
            }, {
                id: 7,
                name: 'squirtle',
                weight: 17.9
            }, {
                id: 144,
                name: 'articuno',
                weight: 60.2
            }])
    });
})
