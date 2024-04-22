
<script setup lang="ts">
import SigninSignup from '../components/Login/SigninSignup.vue'
import Login from "../components/Login/Login.vue"
import { storeToRefs } from 'pinia';
import { useMediwaveStore } from '../stores/counter'
import { LOG } from "../types"
import { watch, ref, onMounted } from "vue"
const mystore = useMediwaveStore()
const { login } = storeToRefs(mystore)
const windowWidth = ref(window.innerWidth)

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};
window.addEventListener("resize", handleResize)
onMounted(() => {
    const main = document.querySelector("#home") as HTMLElement;
    watch([login, windowWidth], () => {

        if (windowWidth.value <= 950) {
            if (login.value == LOG.LOGIN || login.value == LOG.PASSWORD) {
                main.style.flexDirection = "column-reverse";
            }
            else {
                main.style.flexDirection = "column";
            }
        }
        else {
            main.style.flexDirection = "row";
        }
    })
})


</script>



<template>
    <div id="home">
        <SigninSignup></SigninSignup>
        <Login></Login>
    </div>
</template>


<style scoped>
#home {
    min-height: 100vh;
    width: 100%;
    display: flex;
    overflow: hidden;
    background-color: white;
}

@media(max-width:950px) {
    #home {
        min-height: inset;
        display: flex;
        flex-direction: column-reverse;
    }
}
</style>