import { createContext, useContext } from "react";

const FoodContext = createContext({
  searchData: () => {},
  filterFood: (type) => {},
  filteredData: [
    {
      image: "url",
      name: "name",
      price: 1,
      text: "text",
      type: "type",
    },
  ],
  selected: "All",
  loading: false,
  error: false,
  BASE_URL: "abc.com",
});

export const FoodProvider = FoodContext.Provider;

export const useFood = () => {
  return useContext(FoodContext);
};
