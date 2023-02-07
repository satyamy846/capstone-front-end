<template>
    <!-- <v-container> -->
        <!-- <v-row> -->
            <!-- <v-col md-6 xs-12> -->
                <v-card class="d-inline-block " left height="400" width="256">

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                Dashboard
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense nav>
                        <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>


                    </v-list>
                </v-card>
            <!-- </v-col> -->
        <!-- </v-row> -->
    <!-- </v-container> -->

</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-account', route: '/teacher/dashboard/view' },
                { title: 'Profile', icon: 'mdi-account', route: '/teacher/dashboard/profile' },
                { title: 'Quizes', icon: 'mdi-folder-question', route: '/teacher/dashboard/quizes' },
                { title: 'Add Quizes', icon: 'mdi-plus-circle', route: '/teacher/dashboard/addquiz' },
                { title: 'Add Questions', icon: 'mdi-plus-circle', route: '/teacher/dashboard/addquestions' },
                // { title: 'Logout', icon: 'mdi-logout', route: '/teacher/login' },
            ],
            model: 1,
        }
    },
}
</script>