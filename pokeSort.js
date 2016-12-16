module.exports = {

pokeSort: function(array, sortBy) {
  let properties = []
  let sortedPokeObjects = []
  for (var i = 0; i < array.length; i++) {
    properties.push(array[i][sortBy])
  }
  if (sortBy === 'weight' || sortBy === 'id') {
    properties.sort(function(a, b) {
      return a - b
    })
  } else {
    properties.sort()
  }
  for (var j = 0; j < properties.length; j++) {
    for (var k = 0; k < array.length; k++) {
      if (array[k][sortBy] === properties[j]) {
        sortedPokeObjects.push(array.splice(k, 1)[0])
      }
    }
  }
  return sortedPokeObjects
},

pokeArray: [{
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
}
