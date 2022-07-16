<template>
  <section class="left-information">
    <Stepper :nowStep="nowStep" :totalStep="totalStep" :steps="steps" />

    <section class="form-panel">
      <router-view @shipping-Method="handleShippingMethod" />
    </section>

    <ControlButton
      :nowStep="nowStep"
      :totalStep="totalStep"
      :steps="steps"
      @nextStep="handleStep"
      @prevStep="handleStep"
    />
  </section>
</template>

<script>
import Stepper from "./Stepper.vue";
import ControlButton from "./ControlButton.vue";

const dummyData = {
  nowStep: 1,
  totalStep: [1, 2, 3],
  steps: [
    {
      step: 1,
      description: "寄送地址",
    },
    {
      step: 2,
      description: "運送方式",
    },
    {
      step: 3,
      description: "付款資訊",
    },
  ],
  shippingFee: 0,
};
export default {
  components: {
    Stepper,
    ControlButton,
  },
  data() {
    return {
      nowStep: 1,
      totalStep: null,
      steps: [],
      shippingFee: "",
    };
  },
  created() {
    this.fetchStepper();
  },
  methods: {
    fetchStepper() {
      const { nowStep, totalStep, steps, shippingFee } = dummyData;
      this.nowStep = nowStep;
      this.totalStep = totalStep;
      this.steps = steps;
      this.shippingFee = shippingFee;
    },
    handleStep(payload) {
      const stepPayload = payload;

      if (stepPayload.nowStep < 3 && stepPayload.value === "nextStep") {
        this.nowStep += 1;
      } else if (stepPayload.nowStep > 1 && stepPayload.value === "prevStep") {
        this.nowStep -= 1;
      }
      this.handleFormStep();
    },
    handleFormStep() {
      if (this.nowStep === 1) {
        this.$router.push({ name: "form-address" });
      } else if (this.nowStep === 2) {
        this.$router.push({ name: "form-shipping" });
      } else if (this.nowStep === 3) {
        this.$router.push({ name: "form-payment" });
      }
    },
    handleShippingMethod(shippingFee) {
      this.shippingFee = shippingFee;
      this.$emit("shipping-Method", shippingFee);
    },
  },
};
</script>