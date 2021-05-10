<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper-content">
        <section>
          <div class="container">
            <h1>{{ title }}</h1>
            <Message v-if="message" :message="message"/>
              <!-- new note -->
            <NewNote :note="note" @addNote="addNote"/> <!-- Имя переданного emit = имя метода -->
              <!-- note list  -->
            <Notes :notes="notes" @removeNote="removeNote"/> <!-- передали массив в компоненту -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

import Message from '@/components/Message.vue'
import NewNote from '@/components/NewNote.vue'
import Notes from '@/components/Notes.vue'

export default {
  components: {
    Message,
    NewNote,
    Notes
  },
  data () {
    return {
      title: 'Notes App',
      message: null,
      note: {
        title: '',
        descr: ''
      },
      notes: [
        {
          title: 'First Note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second Note',
          descr: 'Description for second note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Third Note',
          descr: 'Description for third note',
          date: new Date(Date.now()).toLocaleString()
        },
      ]
    }
  },
  methods: {
    addNote(){
      let {title, descr} = this.note
      if(!title) {
        this.message = "Error! Title can't be empty!"
        return false
      }
      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
      })
      this.note.title = ''
      this.note.descr = ''
      this.message = null
    },
    removeNote(index){
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
