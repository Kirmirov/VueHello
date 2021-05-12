<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper-content">

        <section>

          <div class="container">
            <button class="btn btnPrimary" @click="modalCondition = !modalCondition">Show modal</button>
            <Modal title="First modal"
                    v-if="modalCondition"
                    @close="modalCondition = !modalCondition">

              <div slot="body">
                
                <input type="text" name="" id="">
              </div>
            </Modal>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

import Modal from '@/components/Modal.vue'

export default {
  components: { // регистрация компонент
    Modal
  },
  data () { // хранение переменных
    return{
      modalCondition: false
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
