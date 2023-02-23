<template>
    <div id="main_banner">
        <h1>Make Your Burger</h1>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner',
};
</script>

<style scoped>
 #main_banner {
    background-image: url("../../public/img/burger.jpg");
    background-position: 0 -250px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 500px;
 }

 #main_banner h1 {
    color: #FFF;
    text-align: center;
    font-size: 60px;
    background-color: #222;
    padding: 20px 40px;
 }
</style>
