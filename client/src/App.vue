<template>
  <div id="app">
    <header>
      <h1>Colorado Mart</h1>
      <Cart />
    </header>
    <ProductsList :products="products" />
    <footer></footer>
  </div>
</template>

<script>
import ProductsList from "./components/ProductsList.vue";
import Cart from "./components/Cart.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    ProductsList,
    Cart
  },
  data() {
    return { products: [] };
  },
  mounted() {
    axios
      .get("http://localhost:4000/products")
      .then(response => (this.products = response.data))
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
//TODO:put in seperate folder
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  width: 100%;
}
header,
footer {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 0 20px;
  background: #333;
  color: #fff;
}
header svg {
  margin-right: 30px;
  align-self: center;
  fill: #fff;
}
header svg text {
  fill: #fff;
  font-size: 12px;
}
header {
  top: 0;
}
footer {
  bottom: 0;
}
</style>
