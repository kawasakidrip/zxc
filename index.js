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
  // END
}