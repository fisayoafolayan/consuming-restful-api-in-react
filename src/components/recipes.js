import React from 'react'

const Recipes = ({recipes}) => {
    return (
        <div>
            <center><h1>Random Cocktail</h1></center>
            { recipes.map((recipe) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{recipe.strDrink}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{recipe.strCategory}, ID: {recipe.idDrink}</h6>
                        <p class="card-text">{recipe.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default Recipes;