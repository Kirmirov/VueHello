<template>
    <div class="notes">
        <div class="note" v-for="(note, index) in notes" :key="index">
            <div class="note-header">
                <p>{{ note.title }}</p>
                <p style="cursor: pointer" @click="removeNote(index)">X</p>
            </div>
            <div class="note-body">
                <p>{{ note.descr }}</p>
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        }
    },
    methods: {
        removeNote (index) {
            this.$emit('removeNote', index)
        }
    }
}
</script>

<style scoped>
    .notes{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }
    .note{
        width: 48%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: #fff;
    }
    .note-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .note-header p{
        color: rgb(40, 72, 214)
    }
    .note-body p{
        margin: 20px 0;
    }
    .note-body span{
        font-size: 14px;
        color: #999;
    }
</style>