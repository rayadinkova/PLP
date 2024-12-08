<template>
  <div class="product-card border p-4 rounded shadow-sm relative">
    <img
      :src="product.images[0]"
      alt="Product"
      class="w-full h-60 object-cover"
    />

    <div class="absolute top-2 right-2 cursor-pointer" @click="toggleFavorite">
      <svg
        v-if="isFavorite"
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </div>

    <h3 class="font-bold mt-2">{{ product.brand }}</h3>
    <p class="text-gray-500">{{ product.name.dk }}</p>
    <p class="text-green-600 font-bold">{{ product.price }} kr</p>

    <span
      v-if="product.isNew"
      class="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
    >
      NYHED
    </span>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>

<style scoped>
.product-card {
  position: relative;
}

.product-card img {
  border-radius: 4px;
  height: 240px; /* Adjusted height to make the images more extended */
  object-fit: cover;
}

.product-card svg {
  transition: fill 0.3s ease;
}

.product-card svg:hover {
  fill: black;
}
</style>
