<template>
  <div>
    <button @click="ativar()">Clique aqui!</button>
    <span v-show="ativou">Ativado</span>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reutilizacao",
  data() {
    return {
      ativou: false,
    };
  },
  methods: {
    ativar() {
      this.ativou = !this.ativou;
    },
  },
};
</script>
