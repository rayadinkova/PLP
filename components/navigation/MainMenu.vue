<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="flex justify-around border-b border-gray-300 py-4">
      <span
        v-for="option in menuOptions"
        :key="option.id"
        class="cursor-pointer text-lg font-medium"
        :class="{
          'font-bold border-b-2 border-black': activeTab === option.id,
        }"
        @click="selectTab(option.id)"
      >
        {{ option.name.dk }}
      </span>
    </nav>

    <!-- Main Menu -->
    <div v-if="activeTab" class="menu-container">
      <h2 class="menu-title">Shop by Product</h2>
      <div class="categories-grid">
        <div
          v-for="category in orderedCategories"
          :key="category.id"
          class="category-item"
        >
          <img
            :src="category.image"
            alt="Category Image"
            class="category-image"
          />
          <span class="category-name">{{ category.name }}</span>
        </div>
      </div>
    </div>

    <!-- Menu Tab -->
    <MenuTab
      v-if="activeTab"
      :categories="categoriesStore.categories[activeTab]"
      :trendingProducts="categoriesStore.trendingProducts"
      :tabName="activeTab"
    />
  </div>
</template>

<script>
import MenuTab from "./MenuTab.vue";
import { useCategoriesStore } from "~/store/categories.js";

export default {
  components: { MenuTab },
  setup() {
    const categoriesStore = useCategoriesStore();

    // Fetching categories data on component mount
    categoriesStore.fetchData();

    return { categoriesStore };
  },
  data() {
    return {
      menuOptions: [
        { id: "women", name: { dk: "Kvinder", en: "Women" } },
        { id: "men", name: { dk: "Mænd", en: "Men" } },
        { id: "kids", name: { dk: "Børn", en: "Kids" } },
      ],
      activeTab: null,
      orderedCategories: [
        {
          id: "cardigans",
          name: "Cardigans",
          image: "/assets/images/cardigans.jpg",
        },
        { id: "coats", name: "Coats", image: "/assets/images/coats.jpg" },
        { id: "jackets", name: "Jackets", image: "/assets/images/jackets.jpg" },
        {
          id: "pullovers",
          name: "Pullovers",
          image: "/assets/images/pullovers.jpg",
        },
        {
          id: "sweaters",
          name: "Sweaters",
          image: "/assets/images/sweaters.jpg",
        },
        { id: "shirts", name: "Shirts", image: "/assets/images/shirts.jpg" },
        { id: "tops", name: "Tops", image: "/assets/images/tops.jpg" },
        { id: "jeans", name: "Jeans", image: "/assets/images/jeans.jpg" },
        { id: "pants", name: "Pants", image: "/assets/images/pants.jpg" },
        {
          id: "leggings",
          name: "Leggings",
          image: "/assets/images/leggings.jpg",
        },
        { id: "shorts", name: "Shorts", image: "/assets/images/shorts.jpg" },
        { id: "skirts", name: "Skirt", image: "/assets/images/skirts.jpg" },
        {
          id: "midiSkirts",
          name: "Midi Skirt",
          image: "/assets/images/midi-skirts.jpg",
        },
        { id: "tights", name: "Tights", image: "/assets/images/tights.jpg" },
      ],
    };
  },
  methods: {
    selectTab(tabId) {
      this.activeTab = this.activeTab === tabId ? null : tabId;
    },
  },
};
</script>

<style scoped>
.cursor-pointer:hover {
  color: #000;
}

.menu-container {
  padding: 1rem;
}

.menu-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.category-item {
  display: flex;
  align-items: center;
}

.category-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
}

.category-name {
  font-size: 1rem;
}
</style>
