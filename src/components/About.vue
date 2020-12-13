<template>
  <v-card >
    <v-row>
      <v-col class="mb-10"></v-col>
    </v-row>

      <v-row dense>
        <v-col cols="8">
          <v-card id="cards">
            <div>
              <div>
                <v-card-title class="headline">Sobre Nós</v-card-title>
                <v-card-text class="text--primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </v-card-text>
                <v-card-actions>
                  <v-btn class="mx-2" fab dark small color="blue darken-4" >
                    <v-icon dark>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn  class="mx-2" fab dark small color="orange" >
                    <v-icon dark>mdi-instagram</v-icon>
                  </v-btn>
                  <v-btn  class="mx-2" fab dark small color="red accent-4" >
                    <v-icon dark>mdi-email</v-icon>
                  </v-btn>
                  <v-btn  class="mx-2" fab dark small color="green accent-4" >
                    <v-icon dark>mdi-phone</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-col class="mb-13"></v-col>
                <a target="_blank" href="https://goo.gl/maps/7T4bVWCtXbU5uHT39">
                  <v-img max-height="100%" src="https://i.ibb.co/NmhnfxC/location.png"></v-img>
                </a>
            </div>
          </v-card>
        </v-col>
      </v-row>
  </v-card>
</template>

<style scoped>
  #cards{
    left: 25%;
  }
  #t{
  
    bottom: 80%
  }
  
</style>

<script>
export default {
  name: 'About',
  components: {},
  data: () => ({
    //
  }),
};
</script>