import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { cart: [], itemCount: 0 },
  mutations: {
    addToCart(state, payload) {
      const idx = state.cart.findIndex(e => e.id === payload.id);
      if (idx !== -1) {
        payload.quantity += 1;
      } else {
        state.cart.push(payload);
      }
      state.itemCount = state.cart.length;
    },
    deleteFromCart(state, id) {
      const idx = state.cart.findIndex(e => e.id === id);
      if (state.cart[idx].quantity > 1) {
        state.cart[idx].quantity -= 1;
      } else {
        state.cart.splice(
          state.cart.findIndex(e => e.id === id),
          1
        );
      }
      state.itemCount = state.cart.length;
    }
  }
});
