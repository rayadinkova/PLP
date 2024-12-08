import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: {
      women: [],
      men: [],
      kids: [],
    },
    trendingProducts: [],
  }),
  actions: {
    async fetchData() {
      try {
        const response = await fetch("/data.json"); 
        const data = await response.json();

        const womenCategories = data.products
          .filter((product) => product.categories.includes("women"))
          .map((product) => ({
            name: product.name.dk,
            image: product.images[0] || null, 
          }));

        const trendingProducts = data.products.slice(0, 4).map((product) => ({
          id: product.id,
          image: product.images[0] || null, 
        }));

        this.categories = {
          women: womenCategories, 
        };

        this.trendingProducts = trendingProducts;
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
  },
});
