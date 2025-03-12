
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  console.log(findMatching(drivers, 'Bobby')); // Output: [ 'Bobby', 'Bobby' ]

  
  function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.startsWith(letters))
  }
  console.log(fuzzyMatch(drivers,'S'))

  function matchName(drivers,name){
    return drivers.filter(driver => driver.name === name)


  }
  const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  console.log(matchName(drivers,'Bobby'))