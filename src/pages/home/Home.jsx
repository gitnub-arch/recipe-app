import React from 'react'
import './Home.css'
import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/recipeList/RecipeList';

const Home = () => {
  const {data, error, isPending} = useFetch('/recipes');
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Home;

