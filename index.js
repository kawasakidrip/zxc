import _ from 'lodash'

export default function solution(content){
  // BEGIN
    const rows = content.split('\n');
    const data = rows.slice(1, -1).map((row) => 
    row.split(',').slice(0, 18).map(el => el.trim())
  )
  
  console.log(`Count: ${data.length}`);
  
  // 2
  
  const cities = data.map((row) => row[7]);
  const citySort = cities.sort()
  const unique = citySort.filter((item, i, ar) => ar.indexOf(item) === i);
  //const uniqCities = _.uniq(citySort).join(', ');
  
  console.log(`Cities: ${unique.join(', ')}`)
  
  // 3
  
  const hamidity = data.map((row) => row[3]);
  
  const maxHamidity = Math.max(...hamidity)
  const minHamidity = Math.min(...hamidity)
  
  const topHamidity = (String(maxHamidity))
  const lowHamidity = (String(minHamidity))
  
  console.log(`Humidity: Min: ${lowHamidity}, Max: ${topHamidity}`)
  
  // 4
  
  const date = data.map((row) => row[0]);
  const temp = data.map((row) => row[1]);
  
  const maxTemp = Math.max(...temp)
  const warmCity = cities[temp.indexOf(String(maxTemp))]
  const warmDate = date[temp.indexOf(String(maxTemp))]
  
  console.log(`HottestDay: ${warmDate} ${warmCity}`)

  // 5

  const temps = data.reduce((acc, value) => {
    const city = value;
    if (acc[city[7]]) {
      acc[city[7]].push(city[1]);
      return acc;
    } else {
      acc[city[7]] = [city[1]];
      return acc;
    }
  }, {});
  const averageTemps = Object.entries(temps).map(item => [item[0], item[1].reduce((acc, value) => Number(value) + acc, 0) / item.length]);
  const maxAverageTemp = [...averageTemps].sort((a, b) => b[1] - a[1]);
  console.log(`HottestCity: ${maxAverageTemp[0][0]}`);

  // END
}