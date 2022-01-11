<template>
  <div class="container checkout py-5">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center">
      <div class="col-md-10 ps-md-0 mb-5">
        <h4 class="text-center-custom fs-2">請確認預約資訊</h4>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-5 ps-md-0 mb-4 mb-md-0">
        <p>房間名稱：{{ roomDetail.name }}</p>
        <p>訂房日期：{{ `${startDate} ~ ${endDate}` }}</p>
        <p>
          訂房金額：{{ totalPrice | currency }}
          <span class="text-black-50">(共 {{checkDate.dateRange}} 晚)</span>
        </p>
        <p>聯絡姓名：{{ guest.guestName }}</p>
        <p class="mb-0">連絡電話：{{ guest.guestPhone }}</p>
      </div>
      <div class="col-md-5 d-flex align-items-center pe-md-0">
        <div class="row">
          <div class="col-4" v-for="(item, index) in roomDetail.imageUrl" :key="index">
            <img :src="item" class="img-cover img-shadow-sm" alt="room_image" />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center my-4">
      <div class="col-md-10 line"></div>
    </div>
    <div class="row justify-content-center">
      <div class="col-5 ps-0">
        <div class="bg-dark white-outline-bg">
          <button class="btn btn-dark btn-lg border border-white white-outline" @click="back">回上一步</button>
        </div>
      </div>
      <div class="col-5 d-flex justify-content-end pe-0">
        <div class="bg-dark white-outline-bg">
          <button
            class="btn btn-dark btn-lg border border-white white-outline"
            @click="booking"
          >確認預約</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false,
      roomDetail: JSON.parse(sessionStorage.getItem('roomDetail')) || {},
      checkDate: JSON.parse(sessionStorage.getItem('range')) || {},
      guest: JSON.parse(sessionStorage.getItem('guestData')) || {},
      start: '',
      end: '',
      year: '',
      month: '',
      day: '',
      dateArray: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    booking () {
      const vm = this
      vm.isLoading = true
      vm.start = new Date(vm.checkDate.start)
      vm.end = new Date(vm.checkDate.end)
      while (vm.end - vm.start >= 0) {
        vm.year = vm.start.getFullYear()
        vm.month = (vm.start.getMonth() + 1).toString().length === 1 ? '0' + (vm.start.getMonth() + 1).toString() : vm.start.getMonth() + 1
        vm.day = vm.start.getDate().toString().length === 1 ? '0' + vm.start.getDate() : vm.start.getDate()
        vm.dateArray.push(`${vm.year}-${vm.month}-${vm.day}`)
        vm.start.setDate(vm.start.getDate() + 1)
      }
      const delUrl = `${process.env.VUE_APP_APIPATH}/rooms`
      const url = `${process.env.VUE_APP_APIPATH}/room/${vm.roomDetail.id}`
      const headers = {
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
      const data = {
        name: vm.guest.guestName,
        tel: vm.guest.guestPhone,
        date: vm.dateArray
      }
      vm.$http.delete(delUrl, { headers }).then(response => {
        vm.$http.post(url, data, { headers }).then(response => {
          if (response.data.success) {
            vm.isLoading = false
            setTimeout(() => {
              vm.$bus.$emit('message:push', `您已成功預約${vm.roomDetail.name}囉！`, 'success', 'check')
            }, 400)
          }
        })
      })
    },
    removeBooking () {
      const delUrl = `${process.env.VUE_APP_APIPATH}/rooms`
      const headers = {
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`
      }
      this.$http.delete(delUrl, { headers }).then(response => {
      })
    }
  },
  computed: {
    startDate () {
      const start = new Date(this.checkDate.start)
      const year = start.getFullYear()
      const month = start.getMonth() + 1
      const date = start.getDate()
      return `${year}/${month}/${date}`
    },
    endDate () {
      const end = new Date(this.checkDate.end)
      const year = end.getFullYear()
      const month = end.getMonth() + 1
      const date = end.getDate()
      return `${year}/${month}/${date}`
    },
    totalPrice () {
      const start = new Date(this.checkDate.start)
      const end = new Date(this.checkDate.end)
      const startDay = start.getDay()
      const endDay = end.getDay()
      const totalNight = this.checkDate.dateRange
      let weekend = 0 // 週末
      let weekday = 0 // 平日
      let fullWeekEnd = 0
      let total = 0
      if (totalNight <= 6) {
        // 小於等於6晚且跨週
        if (startDay > endDay) {
          if (startDay === 1 || startDay === 6) {
            weekend += 2
          } else {
            weekend += 3
          }
        } else if (startDay === 0) {
          weekend += 2
        }
        weekday = totalNight - weekend
      } else {
        fullWeekEnd = Math.round(((totalNight + 1) / 7 * 3))
        weekend += fullWeekEnd
        if (startDay !== 0 && endDay - startDay > 2) { // 起始日不是星期日而且結束日減起始日差2天以上
          weekend -= 2
        } else if (startDay < endDay) { // 起始日小於結束日
          weekend -= 1
        } else if (startDay < 3 && endDay === 0) { // 起始日為星期三之前而且結束日等於星期日
          weekend -= 1
        } else if (startDay === 3 && endDay === 0) { // 起始日為星期三而且結束日為星期日
          weekend += 1
        }
        weekday = totalNight - weekend
      }
      total = (weekend * 1500) + (weekday * 1380)
      return total
    }
  }
}
</script>
