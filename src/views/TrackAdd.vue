<template>
  <main role="main">
    <div class="row">
      <div class="col">
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <h1>{{$t('actions.create', {type: $tc('titles.workflow', 1).toLowerCase()})}}</h1>
          </div>
          <hr>
          <b-card>
            <div class="row">
              <div class="col-md-4">
                <label>{{$tc('common.name')}}:</label>
                <input class="form-control mb-1" v-model="name">
              </div>
              <div class="col-md-12">
                <b-tabs @input="changeTab" class="mt-2" nav-class="custom-tab">
                  <b-tab :title="$t('workflow.forPlatform')" active>
                    <div class="col-md-12 mt-2">
                      <b-form-radio-group id="radios2" v-model="selectedPlatform" name="platform" @change="selectOptions(false)">
                        <table class="table table-striped">
                          <template v-for="platform in platforms">
                          <tr v-if="platform.subsets.length" class="d-flex">
                            <td class="col-3">
                              <b-form-radio v-if="platform.subsets.length == 0" :value="platform.id" name="platform" v-model="selectedPlatform" >
                                {{platform.name}}<br/>
                                <small>{{platform.description}}.</small>
                              </b-form-radio>
                              <div v-else>
                                {{platform.name}}<br/>
                                <small>{{platform.description}}.</small>
                              </div>
                            </td>
                          </tr>
                          <tr v-if="platform.subsets.length" v-for="subset in platform.subsets" :key="subset.id" class="d-flex">
                            <td class="col-12">
                              <b-form-radio-group id="radios2" v-model="selectedSubset" name="subset" @change="selectOptions(true, platform.id)">
                                  <b-form-radio :value="subset.id" name="subset" v-model="selectedSubset">
                                   {{subset.name}}
                                  </b-form-radio>
                              </b-form-radio-group>
                            </td>
                          </tr>
                          </template>
                        </table>
                      </b-form-radio-group>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
              <div class="col-md-12 mt-3 border-top pt-1">
                <button class="btn float-left" :class="{'btn-primary': true }" @click.once="choose($event)" :disabled="!canCreate">
                    {{$t('actions.confirm')}}
                </button>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios';
import Notifier from '../mixins/Notifier';

let tahitiUrl = process.env.VUE_APP_TAHITI_URL;

export default {
  mixins: [Notifier],
  name: 'WorkflowAdd',
  data() {
    return {
      name: '',
      selectedTab: 0,
      selectedPlatform: null,
      selectedSubset: null,
      selectedTemplate: null,
      platforms: [],
      templates: []
    };
  },
  mounted() {
    axios
      .get(`${tahitiUrl}/platforms?enabled=true`)
      .then(resp => {
        this.platforms = resp.data;
        if (this.platforms && this.platforms.length) {
          this.selectedPlatform = this.platforms[0].id;
        }
      })
      .then(() => {
        const params = {
          template: true,
          fields: 'id,name,description,platform',
          enabled: true
        };
        axios.get(`${tahitiUrl}/workflows`, { params }).then(resp => {
          this.templates = resp.data.data;
        });
      })
      .catch(
        function(e) {
          this.$toastr.e(e);
        }.bind(this)
      );
  },
  computed: {
    canCreate() {
      return (
        this.name !== null &&
        this.name.trim() != '' &&
        ((this.selectedTab === 0 && this.selectedPlatform !== null) ||
          (this.selectedTab === 1 && this.selectedTemplate !== null) ||
          (this.selectedTab === 2 && false))
      );
    }
  },
  methods: {
    selectOptions(subsetSelected, platformId){
        if (subsetSelected) {
            this.selectedPlatform = platformId;
        } else {
            this.selectedSubset = null;
        }
    },    
    selectOne(v) {
      // v-model is not working ! This is a workaround
      this.selectedTemplate = v;
    },
    changeTab(index) {
      this.selectedTab = index;
    },
    choose(event) {
      if (this.canCreate) {
        const data = {
          name: this.name,
          platform_id: this.selectedPlatform,
          template_id: this.selectedTemplate,
          subset_id: this.selectedSubset,
          publishing_enabled: true
        };
        let url = `${tahitiUrl}/workflows`;
        if (this.selectedTab === 1) {
          url = `${tahitiUrl}/workflows/from-template`;
        }
        axios
          .post(url, data)
          .then(resp => {
            this.$router.push({
              name: 'editWorkflow',
              params: { platform: resp.data.platform.id, id: resp.data.id }
            });
          })
          .catch(
            function(e) {
              this.error(e);
            }.bind(this)
          );
      }
    }
  }
};
</script>
