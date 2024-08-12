import { Link } from 'react-router-dom'
import "./RecipeList.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeProvider';

export default function RecipeList ({ recipes }) {
  const { color, mode } = useContext(ThemeContext);

  
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method?.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`} style={{background: color}}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}