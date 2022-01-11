<template>
  <div class="home mt-5 mt-md-0">
    <loading :active.sync="isLoading"></loading>
    <div class="container mb-md-0">
      <div class="row g-0">
        <div
          class="col-md-2 position-relative mb-4 mb-md-0 img-skew"
          @click.prevent="getRoomDetail(item.id)"
          v-for="item in roomData"
          :key="item.id"
        >
          <a href="#" class="d-inline-block">
            <img :src="item.imageUrl" class="img-cover" alt="image" />
            <h4 class="room-name mb-0 py-3 fs-5 text-white">{{ item.name }}</h4>
          </a>
          <div class="hover-bg d-flex flex-column justify-content-center align-items-center">
            <p class="mb-1 text-white fs-5">$ {{ item.normalDayPrice }}</p>
            <p class="text-white fs-5">$ {{ item.holidayPrice }}</p>
            <p class="mb-1 text-white fs-5">查看詳細</p>
            <div class="border border-white w-25"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      roomData: {},
      isLoading: false
    }
  },
  methods: {
    getRoomData () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/rooms`
      const headers = {
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`
      }
      vm.isLoading = true
      vm.$http.get(url, { headers }).then(response => {
        if (response.data.success) {
          vm.roomData = response.data.items
          vm.isLoading = false
        }
      })
    },
    getRoomDetail (id) {
      this.$router.push(`room_detail/${id}`)
    }
  },
  created () {
    this.getRoomData()
  }
}
</script>
