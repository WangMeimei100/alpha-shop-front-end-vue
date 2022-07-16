<template>
  <section
    class="
      control-button
      d-flex
      justify-content-between
      align-items-center
      mt-6
      pt-6
    "
  >
    <button
      @click.stop.prevent="prevStep"
      :class="['control-button__previous ', { 'd-none': nowStep === 1 }]"
    >
      <i class="fa-solid fa-arrow-left-long"> </i>上一步
    </button>
    <button @click.stop.prevent="nextStep" class="control-button__next">
      {{ nowStep === 3 ? "確認下單" : "下一步" }}
      <i class="fa-solid fa-arrow-right-long"> </i>
    </button>
  </section>
</template>

<script>
export default {
  name: "ControlButton",
  props: {
    nowStep: {
      type: Number,
      required: true,
    },
    totalStep: {
      type: Array,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
  methods: {
    nextStep() {
      this.$emit("nextStep", {
        nowStep: this.nowStep,
        value: "nextStep",
      });
    },
    prevStep() {
      this.$emit("prevStep", {
        nowStep: this.nowStep,
        value: "prevStep",
      });
    },
  },
};
</script>