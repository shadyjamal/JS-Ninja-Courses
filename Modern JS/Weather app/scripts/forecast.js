let key = 'DkhhlAf0OlQ1UvCDaK10MWJlsQZqX6LN';


const getweather = async(ckey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${ckey}?apikey=${key}`;

    const response = await fetch(base+query);
    if (response.status != 200)
    {
        throw Error('Could not fetch the data')
    }
    const data = await response.json();
    return data[0];
}
const getcity = async(city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    if (response.status != 200)
    {
        throw Error('Could not fetch the data')
    }
    const data = await response.json();
    return data[0];
}

// getcity('manchester').then(data => {
//         console.log('Resolved', data.Key);
//         return getweather(data.Key);
//     }).then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log('Error', err.message));