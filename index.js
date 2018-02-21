var recipes = {
  meal: "",
  ingredient: ""
}

function updateObjectWithKeyAndValue(recipes, meal, ingredient) {
  return Object.assign({},recipes,{[meal]:ingredient})
  
}

