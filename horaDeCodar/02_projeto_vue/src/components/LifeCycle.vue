<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      nome: "Não sei ainda",
    };
  },

  created() {
    setTimeout(() => {
      this.nome = "Eli";
    }, 2000);
  },
  mounted() {
    setTimeout(() => {
      this.nome = "Eliabe";
    }, 3000);
  },
};
</script>
