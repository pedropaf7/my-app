<template>
  <v-app>
    <v-app-bar app color="success" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Restaurente Logo"
          class="shrink mr-2"
          contain
          src="https://i.ibb.co/30tLSTB/flux.png"
          transition="scale-transition"
          width="65"
        />

        <v-img
          alt="Restaurante nome"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="180"
          src="https://i.ibb.co/ZXhb2R9/restaurante.png"
          width="180"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <RefeicaoCrud />
      <ClienteCrud />
    </v-main>
  </v-app>
</template>

<script>
import RefeicaoCrud from "./components/RefeicaoCrud";
import ClienteCrud from "./components/ClienteCrud";
export default {
  name: "App",
  components: {
    RefeicaoCrud, ClienteCrud
  },
  data: () => ({
    //
  }),
};
</script>