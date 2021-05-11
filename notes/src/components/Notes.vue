<template>
    <div class="notes">
        <div class="note" :class="{ full:!grid }" v-for="(note, index) in notes" :key="index">
            <div class="note-header" :class="{ full:!grid }">
                <p>{{ note.title }}</p>
                <p style="cursor: pointer" @click="removeNote(index)">х</p>
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
        },
        grid: {
            type: Boolean,
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

<style lang="scss" scoped>
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
        transition: all .25s cubic-bezier(.02,.01,.47,1);
        box-shadow: 0 30px 30px rgba(0,0,0,.02);
        &:hover {
            box-shadow: 0 30px 30px rgba(0,0,0,.04);
            transform: translate(0,-6px);
            transition-delay: 0s !important;
        }
        &.full{
            width: 100%;
        }
    }
    .note-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            color: rgb(40, 72, 214)
        }
    }

    .note-body {
        p {
            margin: 20px 0;
        }
        span{
            font-size: 14px;
            color: #999;
        }
    }

</style>