import { NextResponse} from "next/server";

async function fetchCoins () {
    const response = await fetch ('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', {
    
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': '696c5d501cmsh4af1d54b5963c82p171ac6jsn7bdb630c6d94',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
	})
    const coins = await response.json();
    return coins;
}

export async function GET(request) {
    const coins = await fetchCoins();

    const { searchParams } = new URL(request.url); 
    console.log(request.url);
   
    const query = searchParams.get('query');
    console.log(searchParams.get('query'));
   
    const filteredCoins = coins.data.coins.filter((coin) => {
        return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
    });
        return NextResponse.json(filteredCoins);
   
}