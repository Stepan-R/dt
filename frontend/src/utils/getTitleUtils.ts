export const getTitle = (country: string | undefined, ingredient: string | undefined, category: string | undefined) => {
  if (country) {
    return `Filtered by ${country} country`;
  } else if (ingredient) {
    return `Filtered by ${ingredient} ingredient`;
  } else if (category) {
    return `Filtered by ${category} category`;
  } return 'Here is all the recipes'
}