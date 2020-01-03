<template>
  <div class="item">
    <img :src="product.image" />
    <p>{{ product.name }}</p>
    <p>${{ product.price }}</p>
    <p>{{ product.description }}</p>
    <button v-on:click="addItem(product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["product"],
  methods: {
    addItem: function(product) {
      this.$store.commit("addToCart", product);
    }
  }
};
</script>

<style>
.item {
  min-width: 30%;
  margin: 10px;
}
.item > img {
  max-width: 30%;
  height: auto;
}
</style>
