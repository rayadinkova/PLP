<template>
  <div>
    <!-- Main Menu -->
    <div class="main-menu-container">
      <MainMenu />
    </div>

    <div class="plp-container mt-4">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs my-4">
        <span>Hjem</span> &gt; <span>Kvinder</span>
      </div>

      <!-- Filters and Products Section -->
      <div class="content flex">
        <!-- Side Menu -->
        <div class="side-menu w-1/4 p-4 border-r">
          <SideMenu />
        </div>

        <!-- Main Content -->
        <div class="products w-3/4 p-4">
          <!-- Filter Bar -->
          <div
            class="filter-bar flex items-center justify-between border-b pb-4 mb-4 sticky top-0 bg-white z-10"
          >
            <FilterDropdown label="PRIS">
              <input type="range" min="0" max="1000" class="w-full" />
            </FilterDropdown>
            <DiscountToggle />
            <FilterDropdown label="STØRRELSE">
              <div class="grid grid-cols-4 gap-2">
                <button
                  v-for="size in sizes"
                  :key="size"
                  class="border px-2 py-1 rounded"
                >
                  {{ size }}
                </button>
              </div>
            </FilterDropdown>
            <FilterDropdown label="BRAND">
              <ul>
                <li v-for="brand in brands" :key="brand" class="cursor-pointer">
                  {{ brand }}
                </li>
              </ul>
            </FilterDropdown>
            <FilterDropdown label="FARVE">
              <div class="grid grid-cols-6 gap-2">
                <span
                  v-for="color in colors"
                  :key="color"
                  :style="{ backgroundColor: color }"
                  class="w-6 h-6 rounded-full border cursor-pointer"
                ></span>
              </div>
            </FilterDropdown>
            <FilterDropdown label="NYHEDER">
              <p>Recent Arrivals</p>
            </FilterDropdown>
          </div>

          <!-- Products Grid -->
          <div class="grid grid-cols-3 gap-6">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/navigation/MainMenu.vue";
import SideMenu from "@/components/navigation/SideMenu.vue";
import FilterDropdown from "@/components/plp/FilterDropdown.vue";
import DiscountToggle from "@/components/plp/DiscountToggle.vue";
import ProductCard from "@/components/plp/ProductCard.vue";

export default {
  components: {
    MainMenu,
    SideMenu,
    FilterDropdown,
    DiscountToggle,
    ProductCard,
  },
  data() {
    return {
      products: [],
      sizes: ["XS", "S", "M", "L", "XL"],
      brands: [],
      colors: ["red", "blue", "green", "yellow"],
    };
  },
  async mounted() {
    await this.loadProducts();
  },
  methods: {
    async loadProducts() {
      try {
        const response = await fetch("/data.json"); // Fetch from the public folder
        const data = await response.json();

        // Extract products and unique brands
        this.products = data.products.filter((product) =>
          product.categories.includes("women")
        );
        this.brands = [
          ...new Set(this.products.map((product) => product.brand)),
        ];
      } catch (error) {
        console.error("Error loading data.json:", error);
      }
    },
  },
};
</script>

<style scoped>
.main-menu-container {
  position: relative;
  z-index: 50; /* Ensures it's above other components */
  background-color: white; /* Prevent content from overlapping */
}

.plp-container {
  padding: 1rem 2rem;
}

.breadcrumbs {
  font-size: 0.875rem;
  color: #666;
}

.filter-bar {
  gap: 1rem;
}

.filter-bar button,
.filter-bar input,
.filter-bar .switch {
  display: inline-block;
  min-width: 100px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  padding: 0.5rem;
  background-color: white;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-bar button:hover,
.filter-bar input:hover,
.filter-bar .switch:hover {
  background-color: #f3f4f6;
}

.color-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #ddd;
}

.color-circle:hover {
  border-color: #aaa;
}
</style>
