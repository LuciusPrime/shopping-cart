<template>
  <div class="products-list">
    <div v-for="product in products" :key="product.id">
      <product :product="product" />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "products-list",
  components: { Product },
  props: ["products"]
};
</script>

<style>
.products-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  padding: 25px;
  max-width: 800px;
}
.products-list > div {
  max-width: 30%;
  min-width: 200px;
}
</style>
