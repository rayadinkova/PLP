<template>
  <div>
    <h2 class="font-bold mb-4">Filters</h2>
    <FilterDropdown label="Pris">
      <div class="price-filter">
        <div class="flex justify-between mb-4">
          <input
            type="number"
            v-model="minPrice"
            class="border border-gray-300 rounded px-2 py-1 w-1/3"
            placeholder="Min"
          />
          <span class="mx-2">-</span>
          <input
            type="number"
            v-model="maxPrice"
            class="border border-gray-300 rounded px-2 py-1 w-1/3"
            placeholder="Max"
          />
        </div>
        <input
          type="range"
          class="w-full"
          :min="priceRange.min"
          :max="priceRange.max"
          v-model="currentPrice"
          @input="updatePrice"
        />
        <div class="flex justify-end mt-4">
          <button class="text-red-500 font-bold" @click="clearPriceFilter">
            Clear
          </button>
        </div>
      </div>
    </FilterDropdown>
    <DiscountToggle />
    <FilterDropdown label="Størrelse">
      <div class="grid grid-cols-4 gap-2">
        <button
          v-for="size in sizes"
          :key="size"
          class="border px-2 py-1 rounded"
          @click="applySizeFilter(size)"
        >
          {{ size }}
        </button>
      </div>
    </FilterDropdown>
    <FilterDropdown label="Brand">
      <ul>
        <li
          v-for="brand in brands"
          :key="brand"
          class="cursor-pointer"
          @click="applyBrandFilter(brand)"
        >
          {{ brand }}
        </li>
      </ul>
    </FilterDropdown>
    <FilterDropdown label="Farve">
      <div class="grid grid-cols-6 gap-2">
        <span
          v-for="color in colors"
          :key="color"
          :style="{ backgroundColor: color }"
          class="w-6 h-6 rounded-full cursor-pointer"
          @click="applyColorFilter(color)"
        ></span>
      </div>
    </FilterDropdown>
  </div>
</template>

<script>
import FilterDropdown from "./FilterDropdown.vue";
import DiscountToggle from "./DiscountToggle.vue";

export default {
  components: { FilterDropdown, DiscountToggle },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  computed: {
    brands() {
      return [...new Set(this.products.map((product) => product.brand))];
    },
  },
  data() {
    return {
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["red", "blue", "green", "yellow"],
      priceRange: { min: 0, max: 5000 },
      minPrice: 0,
      maxPrice: 5000,
      currentPrice: 0,
    };
  },
  methods: {
    applySizeFilter(size) {
      console.log("Filter by size:", size);
    },
    applyBrandFilter(brand) {
      console.log("Filter by brand:", brand);
    },
    applyColorFilter(color) {
      console.log("Filter by color:", color);
    },
    updatePrice() {
      this.minPrice = this.currentPrice;
    },
    clearPriceFilter() {
      this.minPrice = this.priceRange.min;
      this.maxPrice = this.priceRange.max;
      this.currentPrice = this.priceRange.min;
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 1.25rem;
}

.price-filter {
  display: flex;
  flex-direction: column;
}
</style>
