<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper-content">

        <section>

          <div class="container">
            <!-- first form -->
            <button class="btn btnPrimary" @click="firstFormCondition = true">Show modal</button>
            <Modal title="First modal"
                    v-show="firstFormCondition"
                    @close="firstFormCondition = false">

              <div slot="body">
                <input type="text" name="" id="">
                <button class="btn btnPrimary">Well Done!</button>
              </div>
            </Modal>
            <!-- second form -->
            <button class="btn btnPrimary" @click="secondForm.show = true">Show second modal</button>
            <Modal title="Second modal"
                    v-show="secondForm.show"
                    @close="secondForm.show = false">

              <div slot="body">
                <form @submit.prevent="submitSecondForm"> <!-- запрет отправки формы. вместо этого срабатывает функция-->
                  <label>Name: </label>
                  <input type="text" required v-model="secondForm.name">
                  <label>Email: </label>
                  <input type="email" required v-model="secondForm.email">
                  <button class="btn btnPrimary">Submit!</button>
                </form>

              </div>
            </Modal>
            <button class="btn btnPrimary" @click="modalValidate.show = true">Show modal with validate</button>
            <ModalValidate v-show="modalValidate.show" @close="modalValidate.show = false">

            </ModalValidate>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

import Modal from '@/components/UI/Modal.vue'
import ModalValidate from '@/components/ModalValidate.vue'

export default {
  components: { // регистрация компонент
    Modal,
    ModalValidate
  },
  data () { // хранение переменных
    return{
      firstFormCondition: false,
      secondForm: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: {
        show: false,

      }
    }
  },
  computed: {

  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.secondForm.name,
        email: this.secondForm.email
      })
      this.secondForm.name = ''
      this.secondForm.email = ''
      this.secondForm.show = false
    },

  }

}
</script>

<style lang="scss" scoped>

</style>
