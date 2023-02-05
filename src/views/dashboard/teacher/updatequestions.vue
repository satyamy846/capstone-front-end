<template>
    <v-container>
        <v-card>
            <v-card-item>
                <v-text-field label="Question Name" placeholder="Enter Your Question"></v-text-field>
                <v-radio v-model="radio" value="radio-1"></v-radio><v-card-text>Merge sort</v-card-text>
                <v-radio v-model="radio" value="radio-1"></v-radio><v-card-text>Merge sort</v-card-text>
                <v-radio v-model="radio" value="radio-1"></v-radio><v-card-text>Merge sort</v-card-text>
                <v-radio v-model="radio" value="radio-1"></v-radio><v-card-text>Merge sort</v-card-text>
            </v-card-item>
            <v-btn color="blue-grey" class="ma-3 white--text">Update</v-btn>
        </v-card>
    </v-container>
</template>
<script>
    export default{
        name:'updatequestions'
    }
</script>