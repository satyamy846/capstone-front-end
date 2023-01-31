<template>

    <v-app>
        <v-container>
            <v-row left>
                <v-col cols="12" sm="10" md="8" lg="6">
                    <v-card height="400" width="256" class="">

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                    Menu
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list dense nav>
                            <v-list-item v-for="item in items" :key="item.title" link>
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>

                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>



    </v-app>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-account' },
                { title: 'Profile', icon: 'mdi-account' },
                { title: 'Quizes', icon: 'mdi-folder-question' },
                { title: 'Add Quizes', icon: 'mdi-plus-circle' },
                { title: 'Logout', icon: 'mdi-logout' },
            ],
            right: null,
        }
    },
}
</script>