export function GetUserName(userInput) {
    const userName = userInput;
    localStorage.setItem("userName", userName);
    return localStorage.userName;
}

export function RecipeList(recipeList) {
    localStorage.setItem("recipes", JSON.stringify(recipeList));
    return localStorage.recipes;
}


let recipeList = [];
let recipesJson = localStorage.getItem("recipes");
if (recipesJson != null) {
    recipeList = JSON.parse(recipesJson);
}
recipeList.push(recipe);

RecipeList(recipeList);