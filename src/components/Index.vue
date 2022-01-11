<template>
  <div class="index-max-width bg-image bg-cover">
    <Navbar></Navbar>
    <AlertMessage></AlertMessage>
    <!-- <Message></Message> -->
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import AlertMessage from './AlertMessage.vue'
// import Message from './Message.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer,
    AlertMessage
    // Message
  }
}
</script>
