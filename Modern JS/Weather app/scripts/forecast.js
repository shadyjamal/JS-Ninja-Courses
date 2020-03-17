class Forecast{
    constructor()
    {
        this.key = 'DkhhlAf0OlQ1UvCDaK10MWJlsQZqX6LN';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updatecity(city){
        const citydets = await this.getcity(city);
        const weather = await this.getweather(citydets.Key);
        return {
            citydets,
            weather
        };
    }
    async getcity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURL + query);
        if (response.status != 200)
        {
            throw Error('Could not fetch the data')
        }
        const data = await response.json();
        return data[0];
    }
    async  getweather(ckey){
        const query = `${ckey}?apikey=${this.key}`;
        const response = await fetch(this.weatherURL+query);
        if (response.status != 200)
        {
            throw Error('Could not fetch the data')
        }
        const data = await response.json();
        return data[0];
    }
}