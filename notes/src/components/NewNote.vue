<template>
    <div class="new-note">
        <div class="label-box">
            <label>Title</label>
            <label>Rank</label>
        </div>
        <div class="title-block">
            <input v-model="note.title" type="text" placeholder="Write title of your task">
            <select v-model="note.rank">
                <option value="simple">Simple Task</option>
                <option value="medium">Medium Task</option>
                <option value="important">Important Task</option>
            </select>
        </div>

        <label>Description</label>
        <textarea v-model="note.descr" placeholder="Write your task"></textarea>
        <button class="btn btnPrimary" @click="addNote">Add new note</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    methods: {
        addNote(){
            this.$emit('addNote', this.note) //Название, То что передаем
        },
    },
}
</script>

<style lang="scss" scoped>
    .label-box{
        display: flex;
        label {
            width: 50%;
        }
    }
    .title-block{
        display: flex;
        justify-content: space-between;
        input {
            width: 50%;
            border-radius: 20px 0 0 20px;
        }
        select {
            width: 50%;
            border-radius: 0 20px 20px 0;
            margin-bottom: 30px;
            padding: 16px 26px;
            appearance: none;
        }
    }
    .new-note{
        text-align: center;
    }
    .btn {
        margin-bottom: 30px;
    }
</style>