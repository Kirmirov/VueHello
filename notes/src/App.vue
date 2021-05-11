<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper-content">
        <section>
          <div class="container">
            <Message v-if="message" :message="message"/>
              <!-- new note -->
            <NewNote :note="note" @addNote="addNote"/> <!-- Имя переданного emit = имя метода -->
            <div class="note-header">
              <h1>{{ title }}</h1>
              <Search :value="search" placeholder="Find your note" @search="search = $event"/>
              <div class="icons">
                <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
              </div>
            </div>
              <!-- note list  -->
            <Notes :notes="notesFilter" :grid="grid" @removeNote="removeNote"/> <!-- передали массив в компоненту -->
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
import Search from '@/components/Search.vue'

export default {
  components: {
    Message,
    NewNote,
    Notes,
    Search
  },
  data () {
    return {
      title: 'Notes App',
      message: null,
      search: '',
      grid: true,
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
  computed: {
    notesFilter () {
      let array = this.notes,
          search = this.search
      if (!search) return array
      search = search.trim().toLowerCase()
      array = array.filter(item => item.title.toLowerCase().indexOf(search) !== -1)
      return array
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
  .note-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 32px;
    }
  }
  .icons > svg{
    cursor: pointer;
    margin-right: 15px;
    color: #999;
    &:last-child {
      margin-right: 0px;
    }
    &.active{
      color: rgb(40, 72, 214)
    }
  }

</style>
