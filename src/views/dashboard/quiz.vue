<template>
    <mynavbar />
    <v-card class="d-inline-block" left height="400" width="256">

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Dashboard
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" @click="$router.push({ path: item.route })"
                link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>


            </v-list-item>


        </v-list>
        <h1>quiz</h1>
    </v-card>
</template>
<script>
import mynavbar from '../../components/navbar/Homenavbar.vue';
// import sidebar from '../../components/sidebar.vue';
export default {
    name: 'SignUp',
    components: {
        mynavbar,
        // sidebar
    },
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-account', route: '' },
                { title: 'Profile', icon: 'mdi-account', route: '/teacher/dashboard/profile' },
                { title: 'Quizes', icon: 'mdi-folder-question', route: '/teacher/dashboard/quiz' },
                { title: 'Add Quizes', icon: 'mdi-plus-circle', route: '/teacher/dashboard/addquiz' },
                { title: 'Logout', icon: 'mdi-logout', route: '/teacher/login' },
            ],
            right: null,
        }
    },
}
</script>