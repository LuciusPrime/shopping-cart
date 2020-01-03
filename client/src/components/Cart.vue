<template>
  <div class="cart">
    <button v-on:click="isCartOpen = !isCartOpen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
      >
        <path
          d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"
        />
        <text v-if="itemCount" x="8" y="13">{{ itemCount }}</text>
      </svg>
    </button>
    <div v-show="isCartOpen" class="product-wrapper">
      <h3>Cart</h3>
      <p v-show="cart.length < 1">There are no items in your cart</p>
      <div v-for="product in cart" class="cart-item" :key="product.name">
        <span class="cart-name">{{ product.name }}</span>
        <span class="cart-quantity">Quantity:{{ product.quantity }}</span>
        <span class="cart-price">${{ product.price }}</span>
        <span></span>
        <span class="cart-buttons">
          <button v-on:click="addItem(product)">
            Add More
          </button>
          <button v-on:click="deleteProduct(product.id)">
            Remove from Cart
          </button>
        </span>
      </div>
      <p v-show="cart.length > 0" class="cart-total">
        <span>Total:</span><span>${{ cartTotal }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "cart",
  computed: {
    ...mapState(["cart"]),
    itemCount() {
      return this.$store.state.itemCount;
    },
    cartTotal() {
      if (!this.cart) {
        return 0;
      }
      return this.cart.reduce(function(total, value) {
        return total + Number(value.price * value.quantity);
      }, 0);
    }
  },
  data() {
    return { isCartOpen: false };
  },
  methods: {
    deleteProduct(id) {
      this.$store.commit("deleteFromCart", id);
    },
    addItem: function(product) {
      this.$store.commit("addToCart", product);
    }
  }
};
</script>
<style>
.cart {
  min-width: 200px;
  position: fixed;
  right: 0;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.cart-remove {
  flex-basis: 100%;
}
.cart > button {
  height: 55px;
  margin-top: 15px;
  position: absolute;
  right: 0;
  border: none;
  background: none;
}
.product-wrapper {
  margin-top: 80px;
  height: 100vh;
  background: #ccc;
  padding: 10px 20px;
  color: #333;
}
.cart-total {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid #333;
}
.cart-buttons {
  flex-basis: 100%;
}
.cart-buttons buttons {
  padding: 5px;
  border-radius: 3px;
  margin-top: 5px;
}
.cart-quantity {
  flex: 1;
}
.cart-name {
  min-width: 50%;
}
</style>
