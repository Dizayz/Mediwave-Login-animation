<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMediwaveStore } from '../../stores/counter'
import { LOG } from "../../types"
import { ref } from 'vue';
const mystore = useMediwaveStore()
const isAnimating = ref(false)
const { login } = storeToRefs(mystore)

const Switch = () => {
    const button = document.getElementById("btn")
    const maindiv = document.getElementById("translateX")
    button?.classList.add("btn")
    isAnimating.value = !isAnimating.value
    setTimeout(() => {
        button?.classList.remove("btn")
        isAnimating.value = !isAnimating.value
    }, 1000)
    if (login.value == LOG.LOGIN || login.value == LOG.PASSWORD) {
        login.value = LOG.SIGNUP
    }
    else {
        login.value = LOG.LOGIN
    }
    if (login.value == LOG.SIGNUP) {
        maindiv?.classList.remove("translateXbackward")
        maindiv?.classList.add("translateXforward")
    }
    else {
        maindiv?.classList.remove("translateXforward")
        maindiv?.classList.add("translateXbackward")
    }

}

</script>

<template>
    <div class="signin-signup">
        <div id="translateX">
            <div class="bgimg">
                <div class="content">
                    <div class="logo-content">
                        <img src="../../assets/images/mediwave-logo.png" alt="mediwave-logo">
                    </div>
                    <transition name="fade-slide" mode="out-in">
                        <h1 v-if="login == LOG.LOGIN || login == LOG.PASSWORD"> Nouveau à MediWave ?
                        </h1>
                        <h1 v-else> Déja membre ? </h1>
                    </transition>
                    <transition name="fade-slide" mode="out-in">
                        <p v-if="login == LOG.LOGIN || login == LOG.PASSWORD">
                            Préparez-vous de manière plus intelligente pour vos examens afin d'obtenir de meilleures notes!

                        </p>
                        <p v-else>
                            Hereux de vous revoir parmis nous, Connectez vous à votre compte !
                        </p>
                    </transition>
                    <button @click="Switch" id="btn" :disabled="isAnimating">
                        <transition name="fade-grow" mode="out-in">
                            <span style="font-weight: 600;" v-if="login == LOG.LOGIN || login === LOG.PASSWORD">Je
                                m'inscris</span>
                            <span style="font-weight: 600;" v-else-if="login == LOG.SIGNUP">Se connecter</span>
                        </transition>
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.signin-signup {
    position: relative;
    width: 50vw;
}


.bgimg {
    background-image: url('../../assets/images/background.jpg');
    background-size: 100% 100%;
}

.content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(0deg, rgba(27, 108, 255, 0.7147233893557423) 0%, rgba(32, 52, 172, 0.7847514005602241) 50%, rgba(13, 40, 94, 1) 100%);
    gap: 2rem;
}


.logo-content {
    max-width: 300px;

}

.logo-content,
img {
    width: 90%;
}

.content h1,
.content p {
    color: white;
}

.content h1 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
     
}

.content p {
    padding: 0 2rem;
    font-size: 1.3rem;
    text-align: center;
    
}

.content button {
    background-color: white;
    font-size: 1.2rem;
    border: none;
    padding: 1rem;
    border-radius: 360px;
    font-weight: 600;
    cursor: pointer;
    width: 250px;
     color: black;

}

.btn {
    animation: grow 1s ease-in-out;
}


.fade-grow-enter-from,
.fade-grow-leave-to {
    opacity: 0;
}

.fade-grow-enter-to,
.fade-grow-leave-from {
    opacity: 1;

}

.fade-grow-enter-active,
.fade-grow-leave-active {
    transition: opacity 0.5s;

}

/*------------------------------------------*/
.fade-slide-enter-from {
    transform: translateX(-200%);
    opacity: 0;
}

.fade-slide-leave-to {
    transform: translateX(200%);
    opacity: 0;
}

.fade-slide-enter-to,

.fade-slide-leave-from {
    transform: translateX(0);
    opacity: 1;

}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.5s ease-in-out;

}

@keyframes grow {
    0% {
        width: 250px;
    }

    50% {
        width: 400px;
    }

    100% {
        width: 250px;
    }
}

.translateXforward {
    animation: translateforward 1s ease forwards;
}

.translateXbackward {
    animation: translatebackward 1s ease forwards;
}

@keyframes translateforward {
    0% {
        transform: translateX(0);
        position: relative;
        width: 100%;
        z-index: 2;

    }

    25% {
        width: 150%;
    }



    100% {
        transform: translateX(calc(100vw - 100%));
        position: relative;
        width: 100%;
        z-index: 2;
    }
}

@keyframes translatebackward {
    0% {
        transform: translateX(calc(100vw - 100%));
        position: relative;
        width: 100%;
        z-index: 2;
    }

    25% {

        width: 150%;
    }



    100% {
        transform: translateX(0);
        position: relative;
        width: 100%;
        z-index: 2;
    }
}

@media(max-width:950px) {
    .signin-signup {
        position: relative;
        width: 100%;
    }

    .content h1 {
        font-size: 1.6rem;

    }

    .content p {
        padding: 0 1rem;
        font-size: 1rem;

    }

    .content button {
        font-size: 1rem;
        width: 200px;
    }

    .btn {
        animation: none;
    }

    .content {
        min-height: fit-content;
    }

    .translateXbackward,
    .translateXforward {
        animation: none;
    }
}
</style>