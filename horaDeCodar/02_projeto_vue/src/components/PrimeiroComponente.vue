<template>
  <div>
    <h1>Olá, Vue!</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    <MultiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
  </div>
</template>

<script>
import Reutilizacao from "./form/Reutilizacao.vue";
import MultiplosEventos from "./MultiplosEventos.vue";
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      nome: "Eli",
      profissao: "programador",
    };
  },
  components: {
    MultiplosEventos,
    Reutilizacao,
  },
};
</script>
