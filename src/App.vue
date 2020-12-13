<template>
  <v-app>
    <v-app-bar app color="success">
      <router-link active-class="white--text" class="black--text" to="/" exact>
        <v-img
          alt="Restaurente Logo"
          class="shrink mr-2"
          contain
          src="https://i.ibb.co/30tLSTB/flux.png"
          transition="scale-transition"
          width="65"
        />
      </router-link>
      <router-link active-class="white--text" class="black--text" to="/" exact>
        <v-img
          alt="Restaurante nome"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="180"
          src="https://i.ibb.co/QdfgFj4/restaurante2.png"
          width="180"
        />
      </router-link>
        <v-divider class="mx-4" inset vertical></v-divider>
       <template>
          <v-tabs color="white" >
            <v-tab to="/" >
              <router-link active-class="white--text" class="black--text" to="/" exact>Home</router-link>
            </v-tab>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-tab to="/refeicoes">
              <router-link active-class="white--text" class="black--text" to="/refeicoes" exact>Refeição Crud</router-link>
            </v-tab>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-tab to="/clientes">
              <router-link active-class="white--text" class="black--text" to="/clientes" exact>Cliente Crud</router-link>
            </v-tab>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-tab to="/about">
              <router-link active-class="white--text" class="black--text" to="/about" exact>About</router-link>
            </v-tab>
          </v-tabs>
        </template>
      <v-spacer></v-spacer>
    </v-app-bar>
  <router-view></router-view>
  </v-app>
</template>

<style scoped>
  .v-tab:hover{
    color: #CFD8DC;
    background-color: #43A047;
  }

</style>
<script>

export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
};
</script>