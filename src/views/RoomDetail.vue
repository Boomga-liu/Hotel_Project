<template>
  <div class="room-detail row g-0">
    <loading :active.sync="isLoading"></loading>
    <div class="col-md-5">
      <Swiper :RoomImages="roomDetail.imageUrl" />
    </div>
    <div class="col-md-7 py-3 px-4">
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <h2 class="mb-0 text-center-custom">{{ roomDetail.name }}</h2>
        </div>
        <div class="col-md-6">
          <div class="mx-auto text-center-custom">
            <P
              class="mb-1"
            >CheckIn 時間: {{ roomDetail.checkInAndOut.checkInEarly }} ~ {{ roomDetail.checkInAndOut.checkInLate}}</P>
            <P class="mb-0">CheckOut 時間: {{ roomDetail.checkInAndOut.checkOut}}</P>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-10">
          <ul
            class="list-unstyled mb-0 d-flex align-items-center justify-content-around flex-wrap flex-md-nowrap icon-list"
          >
            <li>
              <p class="mb-1">平日(一 ~ 四): {{ roomDetail.normalDayPrice | currency }}</p>
              <p class="mb-0">假日(五 ~ 日): {{ roomDetail.holidayPrice | currency }}</p>
            </li>
            <li>
              <p class="mb-0" v-if="roomDetail.descriptionShort.Bed[0] === 'Single'">
                <img src="@/assets/images/single-bed.png" alt="single-bed-icon" />
                <span>單人床</span>
              </p>
              <p class="mb-0" v-else>
                <img src="@/assets/images/bed.png" alt="single-bed-icon" />
                <span>雙人床</span>
              </p>
            </li>
            <li>
              <p class="mb-0">
                <img src="@/assets/images/user.png" alt="person-icon" />
                <span>人數x {{roomDetail.descriptionShort.GuestMax}}</span>
              </p>
            </li>
            <li>
              <p class="mb-0">
                <img src="@/assets/images/bathing.png" alt="bath-icon" />
                <span>衛浴x {{roomDetail.descriptionShort['Private-Bath']}}</span>
              </p>
            </li>
            <li>
              <p class="mb-0">
                <img src="@/assets/images/size.png" alt="size-icon" />
                <span>{{roomDetail.descriptionShort.Footage}} ㎡</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="row h-custom">
        <div class="col-md-8 mt-5">
          <div class="border border-1 border-dark w-sm mb-2"></div>
          <p class="mb-3 mb-md-0 lh-lg h-auto">{{roomDetail.description}}</p>
        </div>
        <div class="col-md-4">
          <div class="p-3 bg-dark d-flex flex-column flex-wrap rounded-4 text-white amenities">
            <span v-if="roomDetail.amenities['Wi-Fi']">
              <i class="fas fa-check-circle"></i>
              Wifi
            </span>
            <del v-else>Wifi</del>
            <span v-if="roomDetail.amenities.Breakfast">
              <i class="fas fa-check-circle"></i>
              早餐
            </span>
            <del v-else>早餐</del>
            <span v-if="roomDetail.amenities.Television">
              <i class="fas fa-check-circle"></i>
              電視
            </span>
            <del v-else>電視</del>
            <span v-if="roomDetail.amenities['Air-Conditioner']">
              <i class="fas fa-check-circle"></i>
              空調
            </span>
            <del v-else>空調</del>
            <span v-if="roomDetail.amenities.Refrigerator">
              <i class="fas fa-check-circle"></i>
              冰箱
            </span>
            <del v-else>冰箱</del>
            <span v-if="!roomDetail.amenities['Somke-Free']">
              <i class="fas fa-check-circle"></i>
              禁止吸煙
            </span>
            <del v-else>禁止吸煙</del>
            <span v-if="roomDetail.amenities['Pet-Friendly']">
              <i class="fas fa-check-circle"></i>
              寵物攜帶
            </span>
            <del v-else>寵物攜帶</del>
            <span v-if="roomDetail.amenities['Child-Friendly']">
              <i class="fas fa-check-circle"></i>
              適合兒童
            </span>
            <del v-else>適合兒童</del>
            <span v-if="roomDetail.amenities['Room-Service']">
              <i class="fas fa-check-circle"></i>
              客房服務
            </span>
            <del v-else>客房服務</del>
            <span v-if="roomDetail.amenities['Mini Bar']">
              <i class="fas fa-check-circle"></i>
              Mini Bar
            </span>
            <del v-else>Mini Bar</del>
            <span v-if="roomDetail.amenities.Sofa">
              <i class="fas fa-check-circle"></i>
              沙發
            </span>
            <del v-else>沙發</del>
            <span v-if="roomDetail.amenities['Great-View']">
              <i class="fas fa-check-circle"></i>
              漂亮視野
            </span>
            <del v-else>漂亮視野</del>
          </div>
        </div>
        <span class="line"></span>
      </div>
      <div class="row mt-2">
        <div class="col-md-4 d-flex flex-column justify-content-around mb-5 mb-md-0">
          <h4 class="mb-3">訂房時間</h4>
          <v-date-picker v-model="range" :min-date="new Date()" is-range>
            <template v-slot="{ inputValue, inputEvents }">
              <div class="mb-3">
                <label class="mb-1" for="checkInDay">入住日期：</label>
                <input
                  :value="inputValue.start"
                  v-on="inputEvents.start"
                  class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300 w-100"
                  id="checkInDay"
                />
              </div>
              <div>
                <label class="mb-1" for="checkOutDay">退房日期：</label>
                <input
                  :value="inputValue.end"
                  v-on="inputEvents.end"
                  class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300 w-100"
                  id="checkOutDay"
                />
              </div>
            </template>
          </v-date-picker>
        </div>
        <div class="col-md-5 d-flex flex-column mb-5 mb-md-0">
          <div class="mx-md-auto">
            <h4 class="mb-3">留下聯絡資訊，立即預約</h4>
            <div class="mb-3 d-flex flex-column">
              <label for="name" class="mb-1">姓名：</label>
              <input
                type="text"
                id="name"
                class="border rounded px-2 py-1"
                v-model="guest.guestName"
              />
            </div>
            <div class="d-flex flex-column">
              <label for="phone" class="mb-1">電話：</label>
              <input
                type="number"
                id="phone"
                class="border rounded px-2 py-1"
                v-model="guest.guestPhone"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mt-auto">
          <div class="bg-dark white-outline-bg mx-auto">
            <button
              class="btn btn-dark btn-lg border border-white white-outline"
              @click="goCheckOut"
            >我想預約</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from '@/components/Swiper.vue'
export default {
  data () {
    return {
      range: {
        start: new Date(),
        end: new Date(),
        dateRange: ''
      },
      isLoading: false,
      roomId: '',
      roomDetail: {
        checkInAndOut: {},
        descriptionShort: {
          Bed: []
        },
        amenities: {}
      },
      guest: {
        guestName: '',
        guestPhone: ''
      },
      isPhoneCheck: ''
    }
  },
  methods: {
    getRoomDetail (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/room/${id}`
      const headers = {
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`
      }
      vm.isLoading = true
      vm.$http.get(url, { headers }).then(response => {
        if (response.data.success) {
          vm.roomDetail = response.data.room[0]
          vm.bed = response.data.room[0].descriptionShort.Bed[0]
          vm.isLoading = false
        }
      })
    },
    goCheckOut () {
      this.checkLessNinety()
      this.isPhoneCheck = this.phoneCheck(this.guest.guestPhone)
      if (this.range.dateRange < 1 || (!this.guest.guestName && !this.isPhoneCheck)) {
        this.$bus.$emit('message:push', '請重新選擇日期，和確認姓名、電話', 'danger', 'warning')
      } else if (this.range.dateRange >= 90) {
        this.$bus.$emit('message:push', '訂房天數不得大於 90 天', 'danger', 'warning')
      } else if (!this.guest.guestName || !this.isPhoneCheck) {
        this.$bus.$emit('message:push', '請確認姓名、電話', 'danger', 'warning')
      } else if ((this.range.start).getDate() === (new Date()).getDate()) {
        this.$bus.$emit('message:push', '當天日期不能選擇，請重新選擇日期', 'danger', 'warning')
      } else {
        sessionStorage.setItem('roomDetail', JSON.stringify(this.roomDetail))
        sessionStorage.setItem('range', JSON.stringify(this.range))
        sessionStorage.setItem('guestData', JSON.stringify(this.guest))
        this.$store.dispatch('addAllData')
        this.$router.push('/checkout')
      }
    },
    phoneCheck (phone) {
      const regex = /^(09)[0-9]{8}$/
      if (!regex.test(phone)) {
        return false
      } else {
        return true
      }
    },
    checkLessNinety () {
      this.range.dateRange = parseInt((this.range.end.getTime() - this.range.start.getTime()) / (1000 * 60 * 60 * 24))
    }
  },
  components: {
    Swiper
  },
  created () {
    this.roomId = this.$route.params.roomId
    this.getRoomDetail(this.roomId)
  }
}
</script>
