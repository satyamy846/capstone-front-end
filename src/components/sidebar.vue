<template>

                    <v-card height="400" width="256" class="d-inline-block left">

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                    Dashboard
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list dense nav>
                            <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
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
            items: [
                { title: 'Home', icon: 'mdi-home-account', route: '/teacher/dashboard' },
                { title: 'Profile', icon: 'mdi-account', route:'/teacher/profile' },
                { title: 'Quizes', icon: 'mdi-folder-question' ,route:'/teacher/quizes'},
                { title: 'Add Quizes', icon: 'mdi-plus-circle',route: '/teacher/addquiz' },
                { title: 'Logout', icon: 'mdi-logout' ,route: '/' },
            ],
            right: null,
        }
    },
}
</script>