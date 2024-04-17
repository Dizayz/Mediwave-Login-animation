<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMediwaveStore } from '../../stores/counter'
import { LOG } from "../../types"
import { watch, ref } from "vue"
const mystore = useMediwaveStore()
const isChecked = ref(false)

const { login } = storeToRefs(mystore)

watch(login, () => {
    const maindiv2 = document.getElementById("translateXx")
    if (login.value == LOG.SIGNUP) {
        maindiv2?.classList.remove("translateXbackwards")
        maindiv2?.classList.add("translateXforwards")
    }
    else if (login.value == LOG.LOGIN) {
        maindiv2?.classList.add("translateXbackwards")
        maindiv2?.classList.remove("translateXforwards")
    }
})
</script>
<template>
    <div class="informations">
        <div id="translateXx">
            <transition name="fade" mode="out-in">
                <div class="login" id="connecter" v-if="login == LOG.LOGIN">
                    <h2>SE CONNECTEZ A MEDIWAVE</h2>
                    <div class="google-or-email">
                        <button class="google">G</button>
                        <div class="separator">
                            <h3 style="margin: 0 6px;"> OU BIEN </h3>
                        </div>
                        <div class="email">
                            <div> <label for="email"> Nom d'utilisateur ou email</label>
                                <div class="input-container">
                                    <font-awesome-icon class=" usericon" :icon="['fas', 'user']" />
                                    <input type="text" name="email" id="email" required
                                        placeholder="Nom d'utilisateur ou email">
                                </div>

                            </div>
                            <div> <label for="mdp"> Mot de passe</label>
                                <div class="input-container">
                                    <font-awesome-icon class="usericon" :icon="['fas', 'lock']" />
                                    <input type="password" name="mdp" id="mdp" required placeholder="Mot de passe">
                                </div>

                            </div>
                            <p @click="login = LOG.PASSWORD">mot de passe oublié?</p>
                            <button>Se Connecter</button>
                        </div>
                    </div>
                </div>
                <div class="login" v-else-if="login == LOG.PASSWORD">
                    <h2> entrez votre email pour Rénitialiser votre mot de passe</h2>
                    <hr>
                    <div id="password"> <label for="reset">Votre Email </label>
                        <div class="input-container">
                            <font-awesome-icon :icon="['fas', 'envelope']" class="usericon" />
                            <input type="email" name="reset" id="reset" required placeholder="Entrez votre email">
                        </div>
                        <button> <font-awesome-icon :icon="['fas', 'rotate-right']" /> Réinitialiser</button>
                        <button @click="login = LOG.LOGIN">Annuler</button>
                    </div>
                </div>
                <div class="signup" v-else>
                    <h2>REJOIGNEZ MEDIWAVE !</h2>
                    <div class="google-or-email">
                        <button class="google">G</button>
                        <div class="separator">
                            <h3 style="margin: 0 6px;"> OU BIEN </h3>
                        </div>
                        <div class="email">
                            <div class="utilisateur-email">
                                <div><label for="utilisateur"> Nom d'utilisateur</label>
                                    <div class="input-container">
                                        <font-awesome-icon class=" usericon" :icon="['fas', 'user']" />
                                        <input type="text" name="utilisateur" id="utilisateur" required
                                            placeholder=" Entrez votre nom d'utilisateur">
                                    </div>
                                </div>
                                <div><label for="email"> Addresse Email</label>
                                    <div class="input-container">
                                        <font-awesome-icon :icon="['fas', 'envelope']" class="usericon" />
                                        <input type="text" name="email" id="email" required
                                            placeholder="Entrez votre email">
                                    </div>
                                </div>
                            </div>
                            <div class="utilisateur-email">
                                <div> <label for="mdp"> Mot de passe</label>
                                    <div class="input-container">
                                        <font-awesome-icon class="usericon" :icon="['fas', 'lock']" />
                                        <input type="password" name="mdp" id="mdp" required placeholder="Mot de passe">
                                    </div>
                                </div>
                                <div> <label for="mdpconfirm">Confirmer Mot de passe</label>
                                    <div class="input-container">
                                        <font-awesome-icon class="usericon" :icon="['fas', 'lock']" />
                                        <input type="password" name="mdpconfirm" id="mdpconfirm" required
                                            placeholder="Confirmer le mot de passe">
                                    </div>
                                </div>
                            </div>
                            <div class="conditions-terms"> <input type="checkbox" name="condition" id="condition"
                                    v-model="isChecked"> <label for="condition"> J'accepte les conditions
                                    d'utilisations {{ isChecked }}</label></div>
                            <button :style="!isChecked ? { opacity: 0.7 } : { opacity: 1 }" :disabled="!isChecked">Rejoindre
                                Mediwave</button>

                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </div>
</template>


<style scoped>
.signup,
.login {
    padding: 2rem;

}


.informations {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;

}


.translateXforwards {
    animation: translateforwards 1s ease forwards;
}

.translateXbackwards {
    animation: translatebackwards 1s ease forwards;
}

@keyframes translateforwards {

    0% {
        transform: translateX(0);


    }

    100% {
        transform: translateX(calc(-50vw));
    }
}

@keyframes translatebackwards {
    0% {
        transform: translateX(calc(-50vw));

    }

    100% {
        transform: translateX(0);
    }
}

#password {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#password :nth-child(3),
#password :nth-child(4):hover {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    background-color: #2035ace7;
    color: white;
    border: 1px solid transparent;
    transition: all 0.5s ease-in-out;
}

#password :nth-child(4),
#password :nth-child(3):hover {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid #2035ace7;
    color: #2035ace7;
    font-weight: 600;
    transition: all 0.5s ease-in-out;
}




hr {
    margin-bottom: 1.5rem;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;

}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;

}



h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    max-width: 600px;
    text-transform: uppercase;
}

.google {
    background-color: #de5246;
    font-size: 1.5rem;
    font-weight: 700;
    border: none;
    padding: 10px 14px;
    border-radius: 360px;
    color: white;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    line-height: 1;
}

.google-or-email {

    display: flex;
    flex-direction: column;
    gap: 1rem;

}

.separator {
    display: flex;
    align-items: center;
    text-align: center;
}

.separator::before,
.separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
}

.separator:not(:empty)::before {
    margin-right: .25em;
}

.separator:not(:empty)::after {
    margin-left: .25em;
}

.email .input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 10px;
}

label {
    font-weight: 600;
    font-size: 1rem;
}

.input-container {
    position: relative;
}

input {
    font-size: 1rem;
    border: 2px solid rgba(128, 128, 128, 0.568);
    border-radius: 10px;
    width: 100%;
    padding: 10px 10px 10px 35px;
    /* Adjust left padding to accommodate icon */
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-weight: 500;
}

.usericon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
}

input:focus {
    outline: none;
}

input:focus {
    background-color: #1773eb10;
    border: 2px solid #1773ebd7;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
}

.email p {
    cursor: pointer;
    color: #0d285e;
    font-weight: 600;
    text-align: right;
    font-size: 1rem;
    margin-bottom: 20px;
    width: fit-content;
    margin-left: auto;
}

.email p:hover {
    text-decoration: underline;
}

.email button {
    width: 100%;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    background-color: #2035ace7;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    border: none;
    font-weight: bold;
}

.utilisateur-email {
    width: 100%;
    display: flex;
    gap: 1rem;
    margin-bottom: 10px;

}

.utilisateur-email div {
    width: 100%;
}

.utilisateur-email input {
    width: 100%;
}

.conditions-terms {
    margin: 20px 0;
}

input[type='checkbox'] {
    width: fit-content;
}

@media(max-width:950px) {
    .informations {
        width: 100%;

    }

    .translateXforwards,
    .translateXbackwards {
        animation: none;
    }

    h2 {
        font-size: 1.5rem;
    }


}

@media(max-width:500px) {
    .utilisateur-email {
        flex-direction: column;
        gap: 0;
        margin-bottom: 10px;

    }
}
</style>