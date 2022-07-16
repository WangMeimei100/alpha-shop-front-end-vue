<template>
  <section class="right-information">
    <section class="cart mb-8">
      <div class="cart-panel">
        <div class="cart__items">
          <div
            class="cart__items__item"
            v-for="item in cartItems"
            :key="item.id"
          >
            <div class="cart__items__item__image">
              <img :src="item.image" alt="" />
            </div>
            <div class="cart__items__item__information">
              <div class="cart__items__item__information__name">
                {{ item.description }}
              </div>
              <div
                class="cart__items__item__information__amount"
                data-id="${item.id}"
              >
                <button
                  @click="minusAmount(item)"
                  class="amount_btn minus cursor-pointer"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="amount">{{ item.amount }}</span>
                <button
                  @click="plusAmount(item)"
                  class="amount_btn plus cursor-pointer"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="cart__items__item__information__price">
                $<span></span>{{ item.subtotal }}
              </div>
            </div>
          </div>
        </div>
        <div class="cart-panel__shipping-fee d-flex justify-content-between">
          <span class="shipping-fee title">運費</span>
          <span class="shipping-fee title-value">{{ shippingFee | fee }}</span>
        </div>
        <div class="cart-panel__cart-total d-flex justify-content-between">
          <span class="cart-total title">小計</span>
          <span
            >$
            <span class="cart-total title-value"
              >{{ recalculateTotalAmount }}
            </span>
          </span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
const dummyData = {
  cartItems: [
    {
      id: 1,
      description: "破壞補丁修身牛仔褲",
      amount: 1,
      price: 3999,
      subtotal: 3999,
      image: require("./../assets/pictures/item1@2x.png"),
    },
    {
      id: 2,
      description: "刷色直筒牛仔褲",
      amount: 1,
      price: 1299,
      subtotal: 1299,
      image: require("./../assets/pictures/item2@2x.png"),
    },
  ],
};

export default {
  props: {
    shippingFee: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      cartItems: [],
      totalAmount: 5298,
    };
  },
  created() {
    this.fetchCartItem();
  },
  methods: {
    fetchCartItem() {
      this.cartItems = dummyData.cartItems;
    },
    minusAmount(item) {
      if (item.amount > 0) {
        item.amount -= 1;
      }
      this.recalculateItemTotal(item);
    },
    plusAmount(item) {
      item.amount += 1;
      this.recalculateItemTotal(item);
    },
    recalculateItemTotal(item) {
      item.subtotal = item.price * item.amount;
    },
  },
  computed: {
    recalculateTotalAmount() {
      let totalAmount = 0;
      this.cartItems.forEach((item) => {
        totalAmount += item.subtotal;
      });
      return totalAmount + Number(this.shippingFee);
    },
  },
  filters: {
    fee(isFree) {
      return Number(isFree) === 0 ? "免運" : "500";
    },
  },
};
</script>