import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Administration from './views/Administration.vue';

import UserList from './views/Administration/UserList.vue';
import UserAdd from './views/Administration/UserAdd.vue';
import UserEdit from './views/Administration/UserEdit.vue';

// import ProjectList from './views/Administration/ProjectList.vue';
// import ProjectAdd from './views/Administration/ProjectAdd.vue';
// import ProjectShow from './views/Administration/ProjectShow.vue';
// import ProjectEdit from './views/Administration/ProjectEdit.vue';

// import TeamList from './views/Administration/TeamList.vue';
// import TeamShow from './views/Administration/TeamShow.vue';

import ChangePassword from './views/ChangePassword.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import Register from './views/Register.vue';
import ResetPassword from './views/ResetPassword.vue';

import ClusterList from './views/ClusterList.vue';
import ClusterAdd from './views/ClusterAdd.vue';
import ClusterEdit from './views/ClusterEdit.vue';

import DataSourceList from './views/DataSourceList.vue';
import DataSourceEdit from './views/DataSourceEdit.vue';
import DataSourceAdd from './views/DataSourceAdd.vue';

import JobList from './views/JobList.vue';
import JobDetail from './views/JobDetail.vue';

import WorkflowList from './views/WorkflowList.vue';
import WorkflowEdit from './views/WorkflowEdit.vue';
import WorkflowAdd from './views/WorkflowAdd.vue';

import DashboardList from './views/DashboardList.vue';
import DashboardDetail from './views/DashboardDetail.vue';

import ModelList from './views/ModelList.vue';
import ModelAdd from './views/ModelAdd.vue';
import ModelEdit from './views/ModelEdit.vue';
//import DashboardDetail from './views/DashboardDetail.vue';


import OperationList from './views/OperationList.vue';

import Profile from './views/Profile.vue';

import About from './views/About.vue';

import store from './store.js';

// Lazy routes
const TermsOfService = () => import('./views/TermsOfService.vue');
const Welcome = () => import('./views/Welcome.vue');
const ConfigurationList = () => import('./views/ConfigurationList.vue')

Vue.use(Router);

let router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true,
                title: ['titles.home', 1]
            }
        },
        {
            path: '/administration',
            name: 'administration',
            component: Administration,
            meta: {
                requiresAuth: true,
                requiresRole: true,
                title: ['titles.administration', 1]
            }
        },
        {
            path: '/administration/users',
            name: 'AdministrationUserList',
            component: UserList,
            meta: {
                requiresAuth: true,
                requiresRole: true,
                title: ['titles.user', 2]
            }
        },
        {
            path: '/administration/users/new',
            name: 'AdministrationAddUser',
            component: UserAdd,
            meta: {
                requiresAuth: true,
                requiresRole: true,
                title: ['titles.user', 1]
            }
        },
        {
            path: '/administration/users/:id/edit',
            name: 'AdministrationEditUser',
            component: UserEdit,
            meta: {
                requiresAuth: true,
                requiresRole: true,
                title: ['titles.user', 1]
            }
        },
        // {
        //   path: '/administration/projects',
        //   name: 'AdministrationProjectList',
        //   component: ProjectList,
        //   meta: {
        //     requiresAuth: true,
        //     requiresRole: true
        //   }
        // },
        // {
        //   path: '/administration/projects/new',
        //   name: 'AdministrationAddProject',
        //   component: ProjectAdd,
        //   meta: {
        //     requiresAuth: true,
        //     requiresRole: true
        //   }
        // },
        // {
        //   path: '/administration/projects/:id',
        //   name: 'AdministrationShowProject',
        //   component: ProjectShow,
        //   meta: {
        //     requiresAuth: true,
        //     requiresRole: true
        //   }
        // },
        // {
        //   path: '/administration/projects/:id/edit',
        //   name: 'AdministrationEditProject',
        //   component: ProjectEdit,
        //   meta: {
        //     requiresAuth: true,
        //     requiresRole: true
        //   }
        // },
        // {
        //   path: '/administration/teams',
        //   name: 'AdministrationTeamList',
        //   component: TeamList,
        //   meta: {
        //     requiresAuth: true,
        //     requiresRole: true
        //   }
        // },
        // {
        //   path: '/administration/teams/:id',
        //   name: 'AdministrationShowTeam',
        //   component: TeamShow,
        //   meta: {
        //     requiresAuth: true,
        //     requiresRole: true
        //   }
        // },
        //
        {
            path: '/configuration',
            name: 'configuration',
            component: ConfigurationList,
            meta: {
                title: ['titles.configuration', 1],
                requiresAuth: true,
            }
        },

        {
            path: '/data-sources',
            name: 'dataSources',
            component: DataSourceList,
            meta: {
                requiresAuth: true,
                title: ['titles.dataSource', 2]
            }
        },
        {
            path: '/data-sources/add',
            name: 'addDataSource',
            component: DataSourceAdd,
            meta: {
                requiresAuth: true,
                title: ['titles.dataSource', 1]
            }
        },
        {
            path: '/data-sources/:id',
            name: 'editDataSource',
            component: DataSourceEdit,
            meta: {
                requiresAuth: true,
                title: ['titles.dataSource', 1]
            }
        },
        {
            path: '/models',
            name: 'models',
            component: ModelList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/models/add',
            name: 'addModel',
            component: ModelAdd,
            meta: {
                requiresAuth: true,
                title: ['titles.model', 2]
            }
        },
        {
            path: '/model/:id',
            name: 'editModel',
            component: ModelEdit,
            meta: {
                requiresAuth: true,
                title: ['titles.model', 1]
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobList,
            meta: {
                requiresAuth: true,
                title: ['titles.job', 2]
            }
        },
        {
            path: '/jobs/:platform/:id',
            name: 'jobDetail',
            component: JobDetail,
            meta: {
                requiresAuth: true,
                title: ['titles.job', 1]
            }
        },
        {
            path: '/workflows',
            name: 'workflows',
            component: WorkflowList,
            meta: {
                requiresAuth: true,
                title: ['titles.workflow', 2]
            }
        },
        {
            path: '/workflows/:platform/:id',
            name: 'editWorkflow',
            component: WorkflowEdit,
            meta: {
                requiresAuth: true,
                title: ['titles.workflow', 1]
            }
        },
        {
            path: '/workflows/add',
            name: 'addWorkflow',
            component: WorkflowAdd,
            meta: {
                requiresAuth: true,
                title: ['titles.workflow', 1]
            }
        },
        // start dashboards
        {
            path: '/dashboards',
            name: 'dashboards',
            component: DashboardList,
            meta: {
                requiresAuth: true,
                title: ['titles.dashboard', 2]
            }
        },
        {
            path: '/dashboards/:id',
            name: 'dashboardDetail',
            component: DashboardDetail,
            meta: {
                requiresAuth: true,
                title: ['titles.dashboard', 1]
            }
        },
        {
            path: '/user/profile',
            name: 'profile',
            component: Profile,
            meta: {
                requiresAuth: true,
                title: ['titles.profile', 1]
            }
        },
        {
            path: '/change_password',
            name: 'change_password',
            component: ChangePassword,
            meta: {
                requiresAuth: true,
                title: ['titles.changePassword', 1]
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: ['titles.login', 1]
            }
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                title: ['titles.register', 1]
            }
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome,
            meta: {
                title: ['titles.welcome', 1]
            }
        },

        {
            path: '/reset_password',
            name: 'reset_password',
            component: ResetPassword,
            meta: {
                title: ['titles.resetPassword', 2]
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: ['titles.lemonade', 1]
            }
        },
        {
            path: '/admin/operations',
            name: 'operations',
            component: OperationList,
            meta: {
                requiresAuth: true,
                requiresRole: true
            }
        },
        {
            path: '/admin/clusters',
            name: 'clusters',
            component: ClusterList,
            meta: {
                requiresAuth: true,
                title: ['titles.cluster', 2]
            }
        },
        {
            path: '/admin/clusters/add',
            name: 'addCluster',
            component: ClusterAdd,
            meta: {
                requiresAuth: true,
                title: ['titles.cluster', 1]
            }
        },
        {
            path: '/admin/clusters/:id',
            name: 'editCluster',
            component: ClusterEdit,
            meta: {
                requiresAuth: true,
                title: ['titles.cluster', 1]
            }
        },
        {
            path: '/conditions',
            name: 'conditions',
            component: TermsOfService,
            meta: {
                title: ['titles.termsOfService', 2]
            }
        },

    ]
});

export default router;
