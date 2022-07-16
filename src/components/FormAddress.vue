<template>
  <!-- part delivery-address -->
  <div class="part delivery-address">
    <h3>寄送地址</h3>
    <form action="" class="a-form">
      <div class="form-row d-flex">
        <div class="form-group gender-and-name">
          <div class="form-group gender">
            <label class="form-group__label">稱謂: </label>
            <select name="gender" v-model="user.gender">
              <option value="">--Please select gender--</option>
              <option
                v-for="gender in genders"
                :key="gender.id"
                :value="gender.id"
              >
                {{ gender.title }}
              </option>
            </select>
          </div>
          <div class="form-group name">
            <label class="form-group__label">姓名：</label>
            <input v-model="user.name" type="text" placeholder="請輸入姓名" />
          </div>
        </div>

        <div class="form-group phone">
          <label class="form-group__label">電話： </label>
          <input v-model="user.tel" type="text" placeholder="請輸入電話" />
        </div>
        <div class="form-group email">
          <label class="form-group__label">e-mail： </label>
          <input
            v-model="user.email"
            type="text"
            placeholder="請輸入電子信箱"
          />
        </div>
        <div class="form-group city">
          <label class="form-group__label">縣市: </label>
          <select name="city" v-model="user.city">
            <option value="">--Please select city--</option>
            <option v-for="city in cities" :key="city.id" :value="city.value">
              {{ city.name }}
            </option>
          </select>
        </div>
        <div class="form-group address">
          <label class="form-group__label">地址： </label>
          <input v-model="user.address" type="text" placeholder="請輸入地址" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
const dummyData = {
  genders: [
    {
      id: 1,
      title: "男士",
    },
    {
      id: 2,
      title: "女士",
    },
    {
      id: 3,
      title: "保密",
    },
  ],
  cities: [
    {
      id: "1",
      name: "基隆市",
      value: "Keelung City",
    },
    {
      id: "2",
      name: "新北市",
      value: "New Taipei City",
    },
    {
      id: "3",
      name: "台北市",
      value: "Taipei City",
    },
    {
      id: "4",
      name: "桃園市",
      value: "Taoyuan City",
    },
    {
      id: "5",
      name: "新竹縣",
      value: "Hsinchu County",
    },
    {
      id: "6",
      name: "新竹市",
      value: "Hsinchu City",
    },
    {
      id: "7",
      name: "苗栗市",
      value: "Miaoli City",
    },
    {
      id: "8",
      name: "苗栗縣",
      value: "Miaoli County",
    },
    {
      id: "9",
      name: "臺中市",
      value: "Taichung City",
    },
    {
      id: "10",
      name: "彰化縣",
      value: "Changhua County",
    },
    {
      id: "11",
      name: "彰化市",
      value: "Changhua City",
    },
    {
      id: "12",
      name: "南投市",
      value: "Nantou City",
    },
    {
      id: "13",
      name: "南投縣",
      value: "Nantou County",
    },
    {
      id: "14",
      name: "雲林縣",
      value: "Yunlin County",
    },
    {
      id: "15",
      name: "嘉義縣",
      value: "Chiayi County",
    },
    {
      id: "16",
      name: "臺南市",
      value: "Tainan City",
    },
    {
      id: "17",
      name: "高雄市",
      value: "Kaohsiung City",
    },
    {
      id: "18",
      name: "屏東縣",
      value: "Pingtung County",
    },
    {
      id: "19",
      name: "屏東市",
      value: "Pingtung City",
    },
    {
      id: "20",
      name: "宜蘭縣",
      value: "Yilan County",
    },
    {
      id: "21",
      name: "宜蘭市",
      value: "Yilan City",
    },
    {
      id: "22",
      name: "花蓮縣",
      value: "Hualien County",
    },
    {
      id: "23",
      name: "花蓮市",
      value: "Hualien  City",
    },
    {
      id: "24",
      name: "臺東市",
      value: "Taitung City",
    },
    {
      id: "25",
      name: "臺東縣",
      value: "Taitung County",
    },
    {
      id: "26",
      name: "澎湖縣",
      value: "Penghu County",
    },
    {
      id: "27",
      name: "綠島",
      value: "Green Island",
    },
    {
      id: "28",
      name: "蘭嶼",
      value: "Orchid Island",
    },
    {
      id: "29",
      name: "金門縣",
      value: "Kinmen County",
    },
    {
      id: "30",
      name: "馬祖",
      value: "Matsu",
    },
    {
      id: "31",
      name: "連江縣",
      value: "Lienchiang County",
    },
  ],
};
export default {
  name: "FormAddress",
  data() {
    return {
      user: {
        name: "",
        gender: "",
        tel: "",
        email: "",
        city: "",
        address: "",
      },
      genders: [],
      cities: [],
    };
  },
  created() {
    this.fetchPayInformation();
  },
  methods: {
    fetchPayInformation() {
      this.genders = dummyData.genders;
      this.cities = dummyData.cities;
    },
  },
};
</script>