<template>
    <div>
        <LabelComponent :field="field" :value="value"></LabelComponent>
        <div class="color-items">
            <div v-for="(opt, index) in pairOptionValueList" @click="doUpdate(opt)"
             :key="index" class="color-item" :class="{active: value && opt && opt.background === value.background && opt.foreground == value.foreground && opt.foreground == value.foreground}"
                :style="{background: opt.background}">
            </div>
        </div>
    </div>
</template>
<script>
    import LabelComponent from './Label.vue';
    import Widget from '../../mixins/Widget.js';
    export default {
        mixins: [Widget],
        components: { LabelComponent },
        computed: {
            pairOptionValueList() {
                return JSON.parse(this.field.values);
            }
        },
        methods: {
            doUpdate(value) {
                this.$root.$emit(this.message, this.field, value)
            }
        },
        props: {
            value: '', field: {},
            message: {
                type: String,
                default: 'update-form-field-value'
            }
        },
    }
</script>
<style scoped>
    .color-items {
        overflow: hidden;
    }

    .color-item {
        float: left;
        height: 20px;
        margin-right: 0px;
        width: 20px;
        border: 1px solid #CCC;
    }

    .color-item:hover {
        border: 2px solid #777
    }
    .active {
        border: 2px double #111;
    }
</style>
