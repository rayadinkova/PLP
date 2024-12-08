<template>
  <div class="absolute w-full bg-white top-16 left-0 border-t border-gray-300">
    <div class="grid grid-cols-2 p-6">
      <!-- Left Side: Categories -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Shop by Product</h2>
        <ul>
          <li class="mb-4">
            <span class="text-red-500 font-bold">Sale</span>
          </li>
          <li class="mb-4 font-bold">Nyheder</li>
          <li
            v-for="category in categories"
            :key="category.name"
            class="flex items-center space-x-3 mb-6"
          >
            <img
              :src="category.image || '/placeholder.jpg'"
              alt="Category image"
              class="w-12 h-12 rounded-full"
            />
            <span class="text-sm font-medium">{{ category.name }}</span>
          </li>
        </ul>
      </div>

      <!-- Right Side: Promotions -->
      <div>
        <h2 class="text-xl font-medium mb-4">Udsalg</h2>
        <img
          src="https://via.placeholder.com/300"
          alt="Promotion"
          class="mb-6 w-full rounded promotion-image"
        />
        <h2 class="text-xl font-medium mb-4">Trending</h2>
        <div class="grid grid-cols-4 gap-4">
          <img
            v-for="product in trendingProducts"
            :src="product.image || '/placeholder.jpg'"
            :key="product.id"
            alt="Trending product"
            class="w-20 h-20 rounded object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    trendingProducts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.grid-cols-2 {
  column-gap: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 1.5rem;
}
.flex.items-center.space-x-3 {
  align-items: center;
}
.grid-cols-4 img {
  object-fit: cover;
  border-radius: 5px;
}
.promotion-image {
  height: 350px;
  object-fit: cover;
}
</style>
