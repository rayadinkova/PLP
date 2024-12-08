<template>
  <div class="side-menu overflow-y-scroll h-full">
    <h2 class="font-bold text-xl mb-4">Nyheder</h2>
    <ul class="space-y-2">
      <li
        v-for="item in menuItems"
        :key="item"
        class="cursor-pointer hover:text-red-500"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        "Sale",
        "Cardigans",
        "Coats",
        "Jackets",
        "Pullovers",
        "Sweaters",
        "Shirts",
        "Tops",
        "T-Shirts",
        "Tank Tops",
        "Dresses",
        "Singlets",
        "Jeans",
        "Pants",
        "Leggings",
      ],
    };
  },
};
</script>

<style scoped>
.side-menu {
  padding: 1rem;
  border-right: 1px solid #ddd;
}
</style>
