<template>
  <main>
    <!-- 結帳區 -->
    <CheckoutArea @shipping-Method="handleShippingMethod" />

    <!-- 購物籃區 -->
    <CartArea :shippingFee="shippingFee" />
  </main>
</template>
<script>
import CheckoutArea from "./../components/CheckoutArea";
import CartArea from "./../components/CartArea";

export default {
  name: "ProductCheck",
  components: {
    CheckoutArea,
    CartArea,
  },
  data() {
    return {
      shippingFee: "",
    };
  },
  methods: {
    handleShippingMethod(shippingFee) {
      //test
      console.log("views", shippingFee);
      this.shippingFee = shippingFee;
    },
  },
};
</script>