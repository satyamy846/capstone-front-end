<template>

    <!-- <v-card class="mx-auto" max-width="500">
        <v-list>
            <v-list-item-group v-model="model">
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card> -->

    <v-card class="d-inline-block" left height="400" width="256">

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Dashboard
                </v-list-item-title>
                <!-- <v-list-item-subtitle>
            subtext
        </v-list-item-subtitle> -->
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
    name: 'Sidebar',
    data() {
        return {
            // items: [
            //     {
            //         icon: 'mdi-inbox',
            //         text: 'Inbox',
            //     },
            //     {
            //         icon: 'mdi-star',
            //         text: 'Star',
            //     },
            //     {
            //         icon: 'mdi-send',
            //         text: 'Send',
            //     },
            //     {
            //         icon: 'mdi-email-open',
            //         text: 'Drafts',
            //     },
            // ],
            items: [
                { title: 'Home', icon: 'mdi-home-account', route: '' },
                { title: 'Profile', icon: 'mdi-account', route: '/teacher/dashboard/profile' },
                { title: 'Quizes', icon: 'mdi-folder-question', route: '/teacher/dashboard/quizes' },
                { title: 'Add Quizes', icon: 'mdi-plus-circle', route: '/teacher/dashboard/addquiz' },
                { title: 'Add Questions', icon: 'mdi-plus-circle', route: '/teacher/dashboard/addquestions' },
                { title: 'Logout', icon: 'mdi-logout', route: '/teacher/login' },
            ],
            model: 1,
        }
    },
}
</script>