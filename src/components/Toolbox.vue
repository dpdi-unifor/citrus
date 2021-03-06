<template>
    <div id="sidebar-container">
        <VuePerfectScrollbar class="scroll-area" :settings="settings">
            <div >
                <ul class="list-group">
                    <li
                        class="list-group-item truncate sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                        <input v-model="search" type="text" class="form-control" :placeholder="$tc('actions.search')"
                            @input="searchOperation" />
                    </li>
                    <div v-if="search === ''" class="menu">
                        <div v-for="(group, index) in groupedOperations" :key="group.group" :title="group.order"
                            class="unstyled" :data-category="JSON.stringify(group)">
                            <!-- https://github.com/bootstrap-vue/bootstrap-vue/issues/5352 -->
                            <b-button v-b-toggle="'submenu' + index" draggable="false" data-parent="submenus"
                                class="list-group-item truncate list-group-item-action flex-column align-items-start">
                                <span class="when-closed"><span class="fa fa-angle-right"></span></span>
                                <span class="when-opened"><span class="fa fa-angle-down"></span></span>
                                <strong>
                                    {{ group.group }}
                                </strong>
                            </b-button>

                            <b-collapse :id="'submenu' + index" data-parent="submenus">
                                <div v-if="group.operations">
                                    <span v-for="op in group.operations" :key="op.operation.id"
                                        :title="op.operation.name">
                                        <a class="list-group-item truncate list-group-item-action text-dark OLE"
                                            draggable="true" :data-id="op.operation.id" href="javascript:void(0)"
                                            @dblclick.prevent="dbClickAddTask" @dragstart="startDrag" @dragend="stopDrag">
                                            <span :data-id="op.operation.id" :title="op.operation.name"
                                                v-text="op.operation.name"></span>
                                            <span class="fa fa-bars fa-1x float-right"></span>
                                        </a>
                                    </span>
                                </div>
                                <div v-else>
                                    <div v-for="(subGroup, index2) in group.subGroups" :key="subGroup.subGroup">
                                        <b-button v-b-toggle="`subsubmenu_${index}+${index2}`" draggable="false"
                                            class="list-group-item truncate list-group-item-action flex-column align-items-start">
                                            <span class="when-closed fa fa-angle-right"></span>
                                            <span class="when-opened fa fa-angle-down"></span>
                                            <span class="menu-collapsed pl-2">
                                                <strong> {{ subGroup.subGroup }}</strong>
                                            </span>
                                        </b-button>
                                        <b-collapse v-for="op in subGroup.operations"
                                            :id="`subsubmenu_${index}+${index2}`" :key="op.operation.id"
                                            :title="op.operation.name">
                                            <a class="list-group-item truncate list-group-item-action bg-white text-dark"
                                                draggable="true" :data-id="op.operation.id" href="#"
                                                @dblclick="dbClickAddTask" @dragstart="startDrag" @dragend="stopDrag">
                                                <span :data-id="op.operation.id" class="ml-3"
                                                    v-text="op.operation.name"></span>
                                                <span class="fa fa-bars fa-1x float-right"></span>
                                            </a>
                                        </b-collapse>
                                    </div>
                                </div>
                            </b-collapse>
                        </div>
                    </div>
                    <div v-else>
                        <span v-for="op in filteredOperations" :key="op.id">
                            <b-link
                                class="list-group-item truncate list-group-item-action flex-column align-items-start"
                                draggable="true" :data-id="op.id" @dblclick="dbClickAddTask" @dragstart="startDrag"
                                @dragend="stopDrag">
                                {{ op.name }}
                                <span class="fa fa-bars fa-1x float-right"></span>
                            </b-link>
                        </span>
                    </div>
                </ul>
            </div>
            <!-- <div class="mr-2 mt-4">
                <ul class="list-group">
                    <li
                        class="list-group-item sidebar-separator-title d-flex align-items-center menu-collapsed bg-dark text-white">
                        {{ $t('titles.news') }}
                    </li>
                    <li class="list-group-item">
                        <span class="news">
                            <span class="fa fa-lightbulb text-warning"></span>
                            {{ $t('diagram.showProperties') }}</span>
                    </li>
                </ul>
            </div> -->
        </VuePerfectScrollbar>
        <div ref="opDrag"></div>
    </div>
</template>
<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar';
    const groupBy = function (xs, keySelector) {
        return xs.reduce(function (rv, x) {
            var key = keySelector(x);
            rv.set(key, rv.get(key) || []);
            rv.get(key).push(x);
            return rv;
        }, new Map());
    };

    export default {
        name: 'Toolbox',
        components: {
            VuePerfectScrollbar
        },
        props: {
            operations: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            selectedTask: {
                type: Object,
                default: () => {
                    return {};
                }
            },
            workflow: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },
        data() {
            return {
                filteredOperations: [],
                search: '',
                settings: {
                    maxScrollbarLength: 100
                }
            };
        },
        computed: {
            tasks() {
                return this.workflow.tasks;
            },
            groupedOperations() {
                const ops = this.operations
                    .filter(op => op.enabled)
                    .map(op => {
                        const group = op.categories.find(cat => {
                            return cat.type === 'group';
                        }) || { name: '', order: 0, default_order: 0 };
                        const subGroup = op.categories.find(cat => {
                            return cat.type === 'subgroup';
                        }) || { name: '', order: 0, default_order: 0 };
                        return {
                            group: group.name,
                            operation: op,
                            subGroup: subGroup.name,
                            order: group.order,
                            default_order: group.default_order,
                            subGroupOrder: subGroup.order,
                            subGroupDefaultOrder: subGroup.default_order
                        };
                    });
                ops.sort((a, b) => {
                    if (a.order < b.order) return -1;
                    if (a.order > b.order) return 1;
                    if (a.default_order < b.default_order) return -1;
                    if (a.default_order > b.default_order) return 1;
                    const groupCompare = a.group.localeCompare(b.group);
                    if (groupCompare != 0) return groupCompare;
                    return a.subGroup? a.subGroup.localeCompare(b.subGroup) : -1;
                });
                let grouped = [...groupBy(ops, x => x.group)].map(item => {
                    if (item[1][0].subGroup === '') {
                        return {
                            group: item[0],
                            operations: item[1].sort((a, b) =>
                                a.operation.name.localeCompare(b.operation.name)
                            )
                        };
                    } else {
                        return {
                            group: item[0],
                            subGroups: [...groupBy(item[1], x => x.subGroup)]
                                .map(subItem => {
                                    return {
                                        group: item[0],
                                        subGroup: subItem[0],
                                        subGroupOrder: item[1][0].subGroupOrder,
                                        subGroupDefaultOrder: item[1][0].subGroupDefaultOrder,
                                        operations: subItem[1].sort((a, b) =>
                                            a.operation.name.localeCompare(b.operation.name)
                                        )
                                    };
                                })
                                .sort((a, b) => {
                                    if (a.subGroupOrder < b.subGroupOrder) return -1;
                                    if (a.subGroupOrder > b.subGroupOrder) return 1;
                                    if (a.subGroupDefaultOrder < b.subGroupDefaultOrder) return -1;
                                    if (a.subGroupDefaultOrder > b.subGroupDefaultOrder) return 1;
                                    return a.subGroup? a.subGroup.localeCompare(b.subGroup): -1;
                                })
                        };
                    }
                });
                return grouped;
            },
            searcheableOperations() {
                let result = new Map();
                if (this.search) {
                    this.operations.forEach(op => {
                        result[op.id] = op.name
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase();
                    });
                }
                return result;
            }
        },
        methods: {
            startDrag(event) {
                const target = event.target;
                let crt = this.$refs.opDrag;
                crt.innerHTML = target.innerHTML;

                crt.classList.add('dragging');
                crt.classList.add('operation');
                crt.style.position = 'absolute';
                crt.style.left = '-1000px';
                event.dataTransfer.setData('id', target.dataset.id);

                event.dataTransfer.setDragImage(crt, 0, 0);
            },
            stopDrag(event) {
                event.target.classList.remove('draggable');
            },
            toggle(e) { },
            searchOperation: _.debounce(function () {
                let search = this.search
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase();
                let searcheable = this.searcheableOperations;

                this.filteredOperations = this.operations.filter(op => {
                    return (
                        op.enabled &&
                        searcheable[op.id] &&
                        searcheable[op.id].indexOf(search) > -1
                    );
                });
            }, 500),
            getOperationFromId(id) {
                let result = this.operations.find(v => {
                    return v.id === parseInt(id);
                });
                return result;
            },
            dbClickAddTask(ev) {
                const target = ev.target;
                const dataTransfer = new DataTransfer();
                const diagram = document.getElementById('lemonade-diagram');
                let self = this;
                let elem = diagram;

                if (self.selectedTask.id) {
                    elem = document.getElementById(self.selectedTask.id);
                    dataTransfer.setData('tryConnections', self.selectedTask.id);
                } else if (self.tasks.length) {
                    const index = self.tasks.length - 1;
                    const lastTaskId = self.tasks[index].id;
                    elem = document.getElementById(lastTaskId);
                }
                let rect = elem.getBoundingClientRect();

                let offsetLeft = rect.left + 250 //Math.floor(Math.random() * 300);
                let offsetTop = rect.top //Math.floor(Math.random() * 50);

                dataTransfer.setData('id', target.dataset.id);
                diagram.dispatchEvent(
                    new DragEvent('drop', {
                        dataTransfer: dataTransfer,
                        clientX: offsetLeft,
                        clientY: offsetTop
                    })
                );
                return false;
            }
        }
    };
</script>
<style scoped lang="scss">
    .scroll-area {
        width: 100%;
        max-height: calc(100vh - 300px);
    }

    .list-group {
        font-size: 0.75rem;
    }

    .list-group-item {
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    .list-group-item.truncate {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    [draggable='true'] {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        cursor: move; /* fallback if grab cursor is unsupported */
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
    }

    .dragging {
        display: block;
        width: 120px;
        height: 50px;
        font-size: 8pt;
        background-color: #fff;
        border: 1px solid #222;
        font-family: Verdana, Tahoma, Geneva, sans-serif;
        text-align: center;
        transform: rotate(90deg);
    }

    .collapsed>.when-opened,
    :not(.collapsed)>.when-closed {
        display: none;
    }
    .menu button {
        font-size: 9pt;
    }
    /* MENU BORDERS */
    .menu>div .list-group-item {
        border-radius: 0 !important;

        .btn-secondary:hover {
            border: none;
        }
    }

    .menu>div:last-child span:last-child .list-group-item {
        border-bottom-left-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
    }

    /* MENU COLORS & ALIGNMENT
     group */
    .menu a[data-parent='submenus'] {
        padding-left: 14px;
    }

    /* group > subgroup */
    .menu a[data-parent='submenus']>strong {
        padding-left: 8px !important;
    }

    /* group > subgroup */
    .menu div[data-parent='submenus']>div>div>button {
        padding-left: 32px;
        background-color: #f5f6f8;
    }

    /* group > subgroup > operation */
    .menu div[data-parent='submenus']>div>div>div>button {
        padding-left: 34px;
        background-color: #f5f6f8 !important;
        border-bottom: 0;
    }

    /* group > operation */
    .menu div[data-parent='submenus']>div>span>button {
        padding-left: 32px;
        background-color: #f5f6f8;
        border-bottom: 0;
    }

    /* -- MENU LAST ITEMS */
    .menu>div:last-child>div[data-parent='submenus']>div>span:last-child>button {
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    .menu>div:last-child>div[data-parent='submenus']>div>div:last-child>div:last-child>button {
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
</style>
