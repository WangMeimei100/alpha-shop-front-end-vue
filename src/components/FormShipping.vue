<template>
  <!-- part shipping-method -->
  <div class="part shipping-method">
    <h3>運送方式</h3>
    <form action="" class="a-form">
      <div class="form-row">
        <div
          :class="[
            'form-group standard',
            { 'shipping-active': shippingFee !== '500' }
          ]"
        >
          <label for="standard" class="form-group__label px-5 h-100">
            <input
              type="radio"
              name="shipping"
              id="standard"
              value="0"
              v-model="shippingFee"
            />
            <div class="d-flex justify-content-between w-100">
              <div class="transport">
                <span class="transport__method"> 標準運送 </span>
                <span class="transport__time"> 約3~7個工作天 </span>
              </div>
              <div class="fee">免費</div>
            </div>
          </label>
        </div>
        <div
          :class="[
            'form-group dhl',
            { 'shipping-active': shippingFee === '500' },
          ]"
        >
          <label for="DHL" class="form-group__label px-5 h-100">
            <input
              type="radio"
              name="shipping"
              id="DHL"
              value="500"
              v-model="shippingFee"
            />
            <div class="d-flex justify-content-between w-100">
              <div class="transport">
                <span class="transport__method"> DHL運送 </span>
                <span class="transport__time"> 48小時內送達 </span>
              </div>
              <div class="fee">$500</div>
            </div>
          </label>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormShipping",
  data() {
    return {
      shippingFee: 0,
    };
  },
  watch: {
    shippingFee: {
      handler: function (shippingFee) {
        this.$emit("shipping-Method", shippingFee);
      },
      deep: true,
    },
  },
};
</script>