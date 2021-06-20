export function GetUserName(userInput) {

    const userName = userInput;
    localStorage.setItem("userName", userName);
    return localStorage.userName;
}

export function RecipeList(recipeList) {
    localStorage.setItem("recipes", JSON.stringify(recipeList));
    return localStorage.recipes;
}