<template>
  <!-- part payment-information  -->
  <div class="part payment-information">
    <h3>付款資訊</h3>
    <form action="" class="a-form">
      <div class="form-row d-flex">
        <div class="form-group card-owner">
          <label for="" class="form-group__label">持卡人姓名： </label>
          <input
            type="text"
            v-model="payInformation.cardName"
            placeholder="John Doe"
          />
        </div>
        <div class="form-group card-number">
          <label for="" class="form-group__label">卡號 </label>
          <input
            type="text"
            v-model="payInformation.cardNumber"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div class="form-group card-date">
          <label for="" class="form-group__label">有效期限：</label>
          <input
            type="text"
            v-model="payInformation.effectiveDate"
            placeholder="MM/YY"
          />
        </div>
        <div class="form-group card-code">
          <label for="" class="form-group__label">CVC/CCV： </label>
          <input type="text" v-model="payInformation.cvc" placeholder="123" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormPayment",
  data() {
    return {
      payInformation: {
        cardName: "",
        cardNumber: "",
        effectiveDate: "",
        cvc: "",
      },
    };
  },
};
</script>