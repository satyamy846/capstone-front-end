<template>
    <v-card class="d-inline-block" left height="300" width="256">

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Menu
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
</template>

<script>
export default {
    name: 'studentsidebar',
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-account', route: '/student/dashboard/view' },
                { title: 'Profile', icon: 'mdi-account', route: '/student/dashboard/profile' },
                { title: 'Go to quiz', icon: 'mdi-folder-question', route: '/student/dashboard/quiz' },
                { title: 'Logout', icon: 'mdi-logout', route: '/student/login' },
            ],
            model: 1,
        }
    },
}
</script>