 <!-- stepper   -->
 <template>
  <section class="stepper">
    <h3 class="stepper__title">結帳</h3>
    <div
      class="stepper__wrapper d-flex justify-content-between align-items-center"
    >
      <div
        v-for="step in steps"
        :key="step.step"
        :class="['stepper__wrapper__step', { active: step.step === nowStep }]"
      >
        <span class="stepper__wrapper__step__circle"></span>
        <span class="stepper__wrapper__step__description">{{
          step.description
        }}</span>
        <span
          v-show="step.step !== totalStep.length"
          class="stepper__wrapper__step__line"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    nowStep: {
      type: Number,
      require: true,
    },
    totalStep: {
      type: Array,
      require: true,
    },
    steps: {
      type: Array,
      require: true,
    },
  },
};
</script>