<template>
    <div>
        <div class="float-right mr-1 editor-controls">
            <span v-if="editing">
                <small class="mr-1"><a href="#" @click.prevent="cancel">{{$t('actions.cancel')}}</a></small>
                <small><a href="#" @click.prevent="save">{{$t('actions.save')}}</a></small>
            </span>
            <small v-if="!editing && !publicRoute" class="d-print-none">

                <a href="#" @click.prevent="edit" :title="$t('actions.edit')"> <span class="fa fa-edit"></span></a>
                &nbsp;
                <a href="#" @click.prevent="deleteText" :title="$t('actions.delete')"> <span
                        class="fa fa-trash"></span></a>
            </small>
        </div>
        <div v-if="editing" class="ml-2 float-left">
            {{$t('dashboard.markupVisualization')}}:
        </div>

        <div v-if="editing" class="pl-2 pr-2 editor-container">
            <textarea v-model="visualizationData.markdown" class="markdown-editor"></textarea>
        </div>
        <div v-else class="pl-2 pr-2">
            <div v-html="markdown"></div>
        </div>
    </div>
</template>

<script>
    import snarkdown from 'snarkdown';
    import DOMPurify from 'dompurify';
    import axios from 'axios';
    
    import Notifier from '../../mixins/Notifier';
    const caipirinhaUrl = process.env.VUE_APP_CAIPIRINHA_URL;

    function sanitizeMarkdown(markdownCode) {
        return DOMPurify.sanitize(snarkdown(markdownCode));
    }
    export default {
        mixins: [Notifier],
        name: "caipirinha-visualization-markdown",
        props: {
            visualizationData: {},
            publicRoute: { default: true }
        },
        data: function () {
            return {
                editing: false,
                markdown: sanitizeMarkdown(this.visualizationData.markdown || ""),
            }
        },
        methods: {

            edit() {
                this.editing = true;
            },
            deleteText() {
                this.$root.$emit('ondelete-visualization', this.visualizationData.id);
            },
            save() {
                const data = JSON.stringify({markdown: this.visualizationData.markdown});
                this.$root.$emit('onsave-visualization', this.visualizationData.id, data, (result, responseData) => {
                    this.editing = false;
                    this.markdown = sanitizeMarkdown(JSON.parse(responseData).markdown || "");
                });
            },
            cancel() {
                this.editing = false;
                this.markdown = sanitizeMarkdown(this.visualizationData.markdown || "");
            },
        }
    };
</script>
<style>
    .editor-container {
        padding: 5px;
    }
    .editor-controls {
        background: #fff;
        padding: 0px 8px;
        border: 1px solid #ddd;
        border-radius: 10px;
        position: absolute; 
        right:0;
        top: -10px;
    }
    .editor-container .markdown-editor {
        border: 1px solid #ddd;
        font-family: 'Courier New', Courier, monospace;
        width: 100%;
        resize: none;
        outline: none;
        padding: 5px;
        height: 65%;
        min-height: 120px;
    }
</style>