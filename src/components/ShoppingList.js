const plantList = [
  {
    name: "monstera",
    category: "classique",
    id: "1ed",
    isBestSale: false,
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: "2ab",
    isBestSale: true,
  },
  {
    name: "pothos argenté",
    category: "classique",
    id: "3sd",
    isBestSale: true,
  },
  {
    name: "yucca",
    category: "classique",
    id: "4kk",
    isBestSale: false,
  },
  {
    name: "olivier",
    category: "extérieur",
    id: "5pl",
    isBestSale: false,
  },
  {
    name: "géranium",
    category: "extérieur",
    id: "6uo",
    isBestSale: true,
  },
  {
    name: "basilique",
    category: "extérieur",
    id: "7ie",
    isBestSale: true,
  },
  {
    name: "aloe",
    category: "plante grasse",
    id: "8fp",
    isBestSale: false,
  },
  {
    name: "succulente",
    category: "plante grasse",
    id: "9vn",
    isBestSale: true,
  },
];

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>
            {plant.name}
            {plant.isBestSale === true ? <span>🔥</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
