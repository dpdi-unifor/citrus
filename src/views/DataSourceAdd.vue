<template>
    <main role="main">
        <div class="row">
            <div class="col-lg-8 mx-auto overflow-hidden">
                <div v-show="step === 1">
                    <div class="title">
                        <h4>{{$t('dataSource.whatTypeOfDataSourceToAdd')}}</h4>
                    </div>
                    <div class="row">
                        <div :class="'col-md-' + colSize">
                            <div class="card">
                                <div class="card-header"><h5 class="card-title">{{ $t('dataSource.distributedFileSystem') }}</h5></div>
                                <div class="card-body">
                                    {{$t('dataSource.characteristics')}}:
                                    <ul>
                                        <li>{{$t('dataSource.scalability')}};</li>
                                        <li>{{$t('dataSource.youCanUploadYourFiles')}};</li>
                                        <li>{{$t('dataSource.differentFormatsSupported')}}</li>
                                    </ul>
                                    {{$t('dataSource.suggestedOption')}}
                                    
                                </div>

                                <div class="card-footer text-center">
                                    <p>
                                        <!-- <label>{{$t('dataSource.storage')}}:</label> -->
                                        <select v-model="fsStorage" class="form-control">
                                            <option v-for="s in fsStorages" :key="s.id" :value="s.id">{{s.name}}
                                            </option>
                                        </select>
                                    </p>
                                    <button class="btn btn-success" :disabled="fsStorage === null" @click="choose('fs')">{{$t('actions.choose')}}</button>
                                </div>
                            </div>
                        </div>
                        <div :class="'col-md-' + colSize">
                            <div class="card">
                                <div class="card-header"><h5 class="card-title">{{ $t('dataSource.databaseStorage') }}</h5></div>
                                <div class="card-body">
                                {{$t('dataSource.characteristics')}}:
                                <ul>
                                    <li>{{$t('dataSource.youCanUseSQL')}};</li>
                                    <li>{{$t('dataSource.databaseConnectionPreviouslyConfigured')}};</li>
                                </ul>
                                {{$t('dataSource.alternativeUseDatabase')}}
                                </div>
                                <div class="card-footer text-center">
                                    <p>
                                        <!-- <label>{{$t('dataSource.storage')}}:</label> -->
                                    <select v-model="sqlStorage" class="form-control">
                                        <option v-for="s in sqlStorages" :key="s.id" :value="s.id">
                                            {{s.name}}</option>
                                    </select>
                                    </p>
                                    <button class="btn btn-success" :disabled="sqlStorage === null"
                                    @click="choose('sql')">{{$t('actions.choose')}}</button>
                                </div>
                            </div>
                        </div>
                        <div v-if="atmosphereExtension" :class="atmosphereExtension? 'col-md-4': 'col-md-6'">
                            <div class="card">
                                <div class="card-header"><h5 class="card-title">Vallum (Experimental)</h5></div>
                                <div class="card-body">
                                    {{$t('dataSource.characteristics')}}:
                                    <ul>
                                        <li>{{$t('dataSource.youCanUseSQL')}};</li>
                                        <li>Secure computation in enclave (SGX);</li>
                                    </ul>
                                    We recommend this option only if you are testing advanced options
                                    related to ATMOSPHERE project.
                                </div>
                                <div class="card-footer text-center">
                                    <p>
                                        <!-- <label>{{$t('dataSource.storage')}}:</label> -->
                                        <select v-model="vallumStorage" class="form-control">
                                            <option v-for="s in vallumStorages" :key="s.id" :value="s.id">
                                                {{s.name}}</option>
                                        </select>
                                    </p>
                                    <button class="btn btn-success" :disabled="sqlStorage === null"
                                    @click="choose('vallum')">{{$t('actions.choose')}}</button>
                                </div>
                            </div>
                        </div>
                        <div v-if="step === 3" class="card animated">
                            <div class="card-body">
                                <h4 class="card-title">{{$t('dataSource.databaseStorage')}}</h4>
                                <div class="row">
                                    <div class="col-md-8">
                                        <label>{{$tc('common.name', 1)}}:</label>
                                        <input v-model="dataSource.name" type="text" class="form-control">
        
                                        <label>{{$t('dataSource.selectCommand')}}:</label>
                                        <textarea v-model="dataSource.command" class="form-control" rows="4"></textarea>
                                    </div>
                                    <div class="col-md-4">
                                        <label>{{$t('dataSource.tablesReference')}}</label>
                                        <select class="form-control tables" size="10" v-model="selectedTable" @dblclick.stop="copyTableName">
                                            <option v-for="tb in tables" :key="tb">
                                                {{tb}}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="border-top mt-5 pt-4">
                                    <button class="btn btn-success" @click="save">{{$t('actions.save')}}</button>
                                    <button class="btn ml-1 btn-outline-secondary"
                                        @click="step=1">{{$t('actions.back')}}</button>
                                </div>
                            </div>
                        </div>
                        <div v-if="step === 4" class="card animated">
                            <div class="card-body">
                                <h4 class="card-title">Vallum {{$t('dataSource.databaseStorage')}}</h4>
                                <div class="row">
                                    <div class="col-md-8">
                                        <label>{{$tc('common.name', 1)}}:</label>
                                        <input v-model="dataSource.name" type="text" class="form-control">
        
                                        <label>{{$t('dataSource.selectCommand')}}:</label>
                                        <textarea v-model="dataSource.command" class="form-control" rows="4"></textarea>
                                    </div>
                                    <div class="col-md-4">
                                        <label>{{$t('dataSource.tablesReference')}}</label>
                                        <select class="form-control tables" size="10" v-model="selectedTable" @dblclick.stop="copyTableName">
                                            <option v-for="tb in tables" :key="tb">
                                                {{tb}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="border-top mt-5 pt-4">
                                    <button class="btn btn-success" @click="save">
                                        {{$t('actions.save')}}</button>
                                    <button class="btn ml-1 btn-outline-secondary"
                                        @click="step=1">{{$t('actions.back')}}</button>
                                </div>
                            </div>
                        </div>
                        <div v-if="storageType === 'HDFS' " class="resumable-progress col-md-12">
                            <table v-if="showProgress">
                                <tr>
                                    <td width="100%">
                                        <div class="progress-container">
                                            <div ref="progress" class="progress-bar"></div>
                                        </div>
                                    </td>
                                    <td class="progress-text" nowrap="nowrap"></td>
                                    <td class="progress-pause" nowrap="nowrap">
                                        <a v-if="showResume" href="#" class="progress-resume-link"
                                            @click.prevent="resume">
                                            <span class="fa fa-2x fa-play"></span>
                                        </a>
                                        <a v-if="showPause" href="#" class="progress-pause-link"
                                            @click.prevent="pause">
                                            <span class="fa fa-2x fa-pause"></span>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div v-if="resumableList.length">
                            <h3>{{$t('dataSource.uploadingLog')}}</h3>
                            <table v-if="resumableList.length > 0" class="table table-bordered table-stripped">
                                <thead>
                                    <tr>
                                        <th>{{$t('dataSource.file')}}</th>
                                        <th>{{$t('dataSource.message')}}</th>
                                        <th>{{$t('dataSource.progress')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="fileInfo in resumableList" :class="fileStatus(fileInfo)">
                                        <td :ref="fileInfo.file.uniqueIdentifier">{{fileInfo.file.fileName}}
                                        </td>
                                        <td>{{fileInfo.message.message}}</td>
                                        <td>
                                            <span
                                                class="resumable-file-progress">{{Math.floor(100*fileInfo.file.progress()) }}%</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="border-top mt-5 pt-4">
                            <button class="btn btn-outline-secondary ml-1"
                                @click="step=1">{{$t('actions.back')}}</button>
                        </div>
                    </div>
                </div>
                <div v-if="step === 3" class="card animated">
                    <div class="card-body">
                        <h4 class="card-title">{{$t('dataSource.databaseStorage')}}</h4>
                        <label>{{$tc('common.name', 1)}}:</label>
                        <input v-model="dataSource.name" type="text" class="form-control">

                        <label>{{$t('dataSource.selectCommand')}}:</label>
                        <textarea v-model="dataSource.command" class="form-control" rows="4"></textarea>

                        <div class="border-top mt-5 pt-4">
                            <!-- <button class="btn mr-1 btn-primary" @click="step=1">{{$t('actions.test')}}</button> -->
                            <button class="btn btn-success" @click="save">{{$t('actions.save')}}</button>
                            <button class="btn ml-1 btn-outline-secondary"
                                @click="step=1">{{$t('actions.back')}}</button>
                        </div>
                    </div>
                </div>
                <div v-if="step === 4" class="card animated">
                    <div class="card-body">
                        <h4 class="card-title">Vallum {{$t('dataSource.databaseStorage')}}</h4>
                        <label>{{$tc('common.name', 1)}}:</label>
                        <input v-model="dataSource.name" type="text" class="form-control">

                        <label>{{$t('dataSource.selectCommand')}}:</label>
                        <textarea v-model="dataSource.command" class="form-control" rows="4"></textarea>

                        <div class="border-top mt-5 pt-4">
                            <!-- <button class="btn mr-1 btn-primary" @click="step=1">{{$t('actions.test')}}</button> -->
                            <button class="btn btn-success" @click="save">
                                {{$t('actions.save')}}</button>
                            <button class="btn ml-1 btn-outline-secondary"
                                @click="step=1">{{$t('actions.back')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import axios from 'axios';
    import Vue from 'vue';
    let limoneroUrl = process.env.VUE_APP_LIMONERO_URL;
    import Resumable from 'resumablejs';
    export default {
        data() {
            return {
                colSize: 6,
                atmosphereExtension: false,
                storageType: '',
                step: 1,
                format: '',
                fsStorage: null,
                sqlStorage: null,
                vallumStorage: null,
                hiveStorage: null,
                fsStorages: [],
                sqlStorages: [],
                vallumStorages: [],
                hiveStorages: [],
                dataSource: {
                    name: null,
                    command: null,
                    format: null,
                    url: '',
                    storage_id: null
                },
                selectedTable: null,
                supported: true,
                showProgress: false,
                showPause: false,
                showResume: false,
                resumableList: [],
                tables: [],
            };
        },
        mounted() {
            let self = this;
            axios
                .get(`${limoneroUrl}/storages`)
                .then(resp => {
                    resp.data.data.forEach(storage => {
                        if (storage.type === 'HDFS') {
                            self.fsStorages.push(storage);
                        } else if (storage.type === 'JDBC') {
                            self.sqlStorages.push(storage);
                        } else if (storage.type === 'VALLUM') {
                            self.vallumStorages.push(storage);
                        } else if (storage.type === 'HIVE') {
                            self.hiveStorages.push(storage);
                        }
                    });
                    this.fsStorage = this.fsStorages.length ? this.fsStorages[0].id : '';
                    this.sqlStorage = this.sqlStorages.length ? this.sqlStorages[0].id : '';
                    this.vallumStorage = this.vallumStorages.length ? this.vallumStorages[0].id : '';
                    this.hiveStorage = this.hiveStorages.length ? this.hiveStorages[0].id : '';
                    this.atmosphereExtension = this.vallumStorages.length > 0;
                    this.colSize = 12 / (2 + (this.atmosphereExtension ? 1 : 0) + 
                        (this.hiveStorages.length > 0 ? 1 :0));
                })
                .catch(function (e) {
                    self.error(e);
                });
        },
        methods: {
            fileStatus(fileInfo) {
                return fileInfo.message.status !== undefined &&
                    fileInfo.message.status.toLowerCase() === 'error'
                    ? 'danger'
                    : 'success';
            },
            success(msg) {
                this.$snotify.success(msg, this.$t('titles.success'));
            },
            error(e) {
                if (e.name === 'NetworkError') {
                    this.$snotify.error(
                        this.$t('errors.disconnected'),
                        this.$t('titles.error')
                    );
                } else if (e.response && e.response.data) {
                    this.$snotify.error(e.response.data.message, this.$t('titles.error'));
                } else {
                    this.$snotify.error(e.message, this.$t('titles.error'));
                }
            },
            choose(method) {
                if (method === 'sql') {
                    this.step = 3;
                    this.dataSource.format = 'JDBC';
                    this.dataSource.storage_id = this.sqlStorage;
                } else if (method === 'vallum') {
                    this.step = 4;
                    this.dataSource.format = 'UNKNOWN';
                    this.dataSource.storage_id = this.vallumStorage;
                } else if (method === 'hive') {
                    this.step = 3;
                    this.dataSource.format = 'HIVE';
                    this.dataSource.storage_id = this.hiveStorage;
                    this.retrieveTables()
                } else {
                    this.step = 2;
                    this.dataSource.format = 'UNKNOWN';
                    this.dataSource.storage_id = this.fsStorage;
                    /* Setup resumable */
                    Vue.nextTick(() => {
                        this.setupResumable();
                    });
                }
            },
            copyTableName(){
                this.dataSource.command = (this.dataSource.command ? this.dataSource.command  + ' ' : '') + this.selectedTable;
            },
            retrieveTables(){
                const self = this;
                const url = `${limoneroUrl}/storages/metadata/${self.dataSource.storage_id}`;

                axios.get(url)
                    .then((resp) => {
                        self.tables = resp.data.data;
                    }
                    ).catch((e) => { 
                        self.error(e);
                    });
 
            },
            setupResumable() {
                let self = this;

                let resumable = new Resumable({
                    target: `${limoneroUrl}/datasources/upload`,
                    chunkSize: 10 * 1024 * 1024,
                    simultaneousUploads: 1,
                    testChunks: true,
                    throttleProgressCallbacks: 1,
                    method: 'octet',
                    query: { storage_id: self.fsStorage },
                    permanentErrors: [400, 401, 404, 415, 500, 501],
                    chunkRetryInterval: 5000,
                    headers: axios.defaults.headers.common // < same auth headers
                });
                self.resumable = resumable;
                self.supported = resumable.support;
                if (self.supported) {
                    resumable.assignDrop(self.$refs.drop);
                    resumable.assignBrowse(self.$refs.browse);
                }

                let getFileRef = file => {
                    return self.resumableList.find(
                        f => f.file.uniqueIdentifier === file.uniqueIdentifier
                    );
                };
                // Handle file add event
                resumable.on('fileAdded', file => {
                    // Show progress pabr
                    self.showProgress = true;
                    // Show pause, hide resume
                    self.showPause = true;
                    self.showResume = false;
                    // Add the file to the list
                    self.resumableList.splice(0, 0, {
                        file,
                        done: false,
                        progress: '0',
                        message: ''
                    });
                    // Actually start the upload
                    resumable.upload();
                });
                resumable.on('pause', () => {
                    // Show resume, hide pause
                    self.showResume = true;
                    self.showPause = false;
                });
                resumable.on('complete', file => {
                    // Hide pause/resume when the upload has completed
                    self.showPause = false;
                    self.showResume = false;
                    self.showProgress = false;
                });
                resumable.on('fileSuccess', (file, message) => {
                    let m = JSON.parse(message);
                    // Reflect that the file upload has completed
                    let fileRef = getFileRef(file);
                    const link = self.$router.resolve({
                        name: 'editDataSource',
                        params: { id: m.data.id }
                    });
                    self.$refs[fileRef.file.uniqueIdentifier][0].innerHTML = `<a href="${
                        link.href
                        }">${self.$t('actions.edit')} ${fileRef.file.fileName}`;
                    fileRef.done = true;

                    this.success(
                        this.$t('messages.savedWithSuccess', {
                            what: this.$tc('titles.dataSource', 1)
                        })
                    );
                    setTimeout(() =>
                        this.$router.push(
                            {
                                name: 'editDataSource',
                                params: { id: m.data.id }
                            },
                            1000
                        )
                    );
                });
                resumable.on('error', (message, file) => {
                    let fileRef = getFileRef(file);
                    fileRef.message = JSON.parse(message);
                    self.showPause = false;
                    self.showProgress = false;
                });
                resumable.on('fileError', (file, message) => {
                    let fileRef = getFileRef(file);
                    fileRef.message = JSON.parse(message);
                    self.showPause = false;
                    self.showProgress = false;
                });
                resumable.on('fileProgress', file => {
                    // Handle progress for both the file and the overall upload
                    let fileRef = getFileRef(file);
                    fileRef.progress = Math.floor(file.progress() * 100) + '%';
                    self.showProgress = true;
                    if (self.$refs.progress) {
                        self.$refs.progress.style.width =
                            Math.floor(resumable.progress() * 100) + '%';
                    }
                });
            },

            save(event) {
                const self = this;
                const url = `${limoneroUrl}/datasources`
                event.target.setAttribute('disabled', 'disabled')
                event.target.classList.add('btn-spinner')

                axios.post(url, self.dataSource)
                    .then((resp) => {
                        event.target.removeAttribute('disabled')
                        event.target.classList.add('btn-spinner')
                        self.isDirty = false
                        self.success(
                            this.$t('messages.savedWithSuccess',
                                { what: this.$tc('titles.dataSource', 1) }))
                        this.$router.push({
                            name: 'editDataSource',
                            params: { 'id': resp.data.data.id }
                        })
                    }
                    ).catch((e) => { 
                        event.target.removeAttribute('disabled')
                        event.target.classList.remove('btn-spinner')
                        self.error(e);
                    });
            }
        }
    };
</script>
<style scoped>
    .card-option {
        min-height: 400px;
    }

    .overflow-hidden {
        overflow: hidden;
    }

    .fade-enter-active,
    .fade-leave-active {
        height: 400px;
        opacity: 0.5;
    }

    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active in <2.1.8 */

        {
        height: 0px;
        opacity: 0;
    }

    .animated {
        transition: all 1s;
        /*display: flex;*/
        width: 100%;
    }

    .resumable-browse {
        cursor: pointer;
    }

    .resumable-progress {
        height: 20px;
    }

    .resumable-error {
        font-size: 14px;
        font-style: italic;
    }

    .resumable-drop {
        background-color: #fff;
        border: 2px dashed #aaa;
        border-radius: 10px;
        color: #666;
        font-size: 20px;
        font-weight: bold;
        padding: 50px;
        text-align: center;
        z-index: 9999;
    }

    .resumable-list {
        overflow: auto;
        margin-right: -20px;
    }

    .resumable-dragover {
        padding: 30px;
        color: #555;
        background-color: #ddd;
        border: 1px solid #999;
    }

    /* Uploader: Progress bar */

    .resumable-progress {
        margin: 30px 0 30px 0;
        width: 100%;
    }

    .progress-container {
        height: 7px;
        background: #9cbd94;
        position: relative;
    }

    .progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background: #45913a;
        width: 0;
    }

    .progress-text {
        font-size: 11px;
        line-height: 9px;
        padding-left: 10px;
    }

    .progress-pause {
        padding: 0 0 0 7px;
    }
    .tables {
        font-size: .7em;
    }
</style>
