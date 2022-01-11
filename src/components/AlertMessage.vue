<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="modal" tabindex="-1" ref="Modal" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-bottom-0 pb-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <p v-if="messages.icon === 'warning'">
              <i class="fas fa-2x fa-exclamation-triangle text-danger"></i>
            </p>
            <p v-if="messages.icon === 'check'">
              <i class="fas fa-3x fa-home"></i>
            </p>
            <p v-if="messages.message" :class="'text-' + messages.status">{{ messages.message }}</p>
            <p class="mb-0 lh-lg" v-if="messages.icon === 'check'">
              當您抵達白邸時，請與櫃檯人員告知手機與姓名
              <br />若需更改資料或取消訂房，請洽 03-1234567
            </p>
          </div>
          <div class="modal-footer border-top-0 pb-3 justify-content-center">
            <button
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
              v-if="messages.icon === 'check'"
              @click="backHome"
            >Home</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-else>Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'
export default {
  data () {
    return {
      isLoading: false,
      alertMessage: null,
      messages: {
        message: '',
        status: '',
        icon: '',
        backdrop: ''
      }
    }
  },
  methods: {
    updateMessage (message, status, icon) {
      this.messages.message = message
      this.messages.status = status
      this.messages.icon = icon
    },
    backHome () {
      this.alertMessage.hide()
      this.$router.push('/')
    }
  },
  mounted () {
    this.alertMessage = new Modal(this.$refs.Modal)
  },
  created () {
    this.$bus.$on('message:push', (message, status, icon) => {
      this.updateMessage(message, status, icon)
      this.alertMessage.show()
    })
  }
}
</script>
