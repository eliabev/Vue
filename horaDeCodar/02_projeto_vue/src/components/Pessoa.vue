<template>
  <div>
    <h2>Esta é uma descrição da pessoa {{ nome }}</h2>
    <Info :email="email" />
    <Form />
  </div>
</template>

<script>
import Form from "./form/Form.vue";
import Info from "./Info.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pessoa",
  components: {
    Info,
    Form,
  },
  data() {
    return {
      nome: "que vos fala",
      email: "eliabe@ciandt.com",
    };
  },
};
</script>
