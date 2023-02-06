<template>
    <!-- <h1>Welcome to student dashboard page!</h1> -->
    <v-card  height="100" width="300" class="card">
    <v-card-text>
      <div><h3>Welcome to student dashboard page</h3></div>
      
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default{
    name:'studentview'
}
</script>

<style>
</style>