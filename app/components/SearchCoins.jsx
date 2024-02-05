'use client'
import React, { useState } from 'react';
import Link from 'next/link';


export default function SearchCoins({ getSearchResults }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/coins/search?query=${query}`);

   
      const coin = await response.json();
      console.log('Résultats de la recherche :', coin);

      getSearchResults(coin)

  };

  return (
    <div className='text-center my-20 '>
      <form onSubmit={handleSubmit}>
        <input
          className="text-blue-500 border-2 border-blue-500 rounded-full px-3 py-2 mx-2"
          type="search"
          placeholder='Rechercher un coin...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='bg-blue-500 text-white rounded-full px-3 py-2 hover:bg-black/60' type="submit">Rechercher</button>
      </form>
    </div>
  );
}
