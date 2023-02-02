<template>
    <mynavbar />
    <!-- <sidebar /> -->
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

    <v-card class="d-inline-block" left height="600" width="900">

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Details
                </v-list-item-title>
                <!-- <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle> -->
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



    <!-- <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">

            <v-card max-width="1000">
                <v-card-title>
                    Menu
                    <v-icon icon="mdi-home-account"></v-icon>
                </v-card-title>
                <v-divider></v-divider>

                <v-btn block>
                    Home
                </v-btn>
                <v-btn class="v-list-item">
                    Profile
                </v-btn>

                <v-btn block>
                    Quizes
                </v-btn>

                <v-btn block>
                    Add Quizes
                </v-btn>

                <v-btn block>
                    <i class="bi bi-0-circle"></i>
                    Logout
                </v-btn>
                
            </v-card>

        </v-col>
    </v-row> -->
    <!-- Rendered `v-list-group` content HTML Output -->

    <!-- <div class="v-list-item-group" role="listbox">
        <div aria-selected="true" class="v-list-item" role="listitem" tabindex="0">
            Hells
        </div>
        <div aria-disabled="true" aria-selected="true" class="v-list-item" role="listitem" tabindex="-1">
            sdfsd
        </div>
        <div aria-selected="false" class="v-list-item" role="listitem" tabindex="0">
            sdfsf
        </div>
    </div> -->



</template>

<style>
body {
    color: gray;
}
</style>

<script>
import mynavbar from '../../components/navbar/Homenavbar.vue';
import sidebar from '../../components/sidebar.vue';
export default {
    name: 'SignUp',
    components: {
        mynavbar,
        sidebar
    },
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