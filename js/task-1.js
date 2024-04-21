const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  const categoryItemsCount = item.querySelectorAll("ul > li").length;
  const titleText = categoryTitle.textContent;
  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
