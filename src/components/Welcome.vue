<script setup>
import { scrollIntoView } from '../assets/js/utils';
</script>

<template>
    <div class="welcome-content">
        <h1>
            <span>Spout</span>
            <br />
            学习 &nbsp &nbsp 记录 &nbsp &nbsp 分享
        </h1>
        <p>
            你好，(＾ν＾)
        </p>
        <button @click="scrollIntoView('.container-header')">欢迎</button>
    </div>
</template>

<style scoped>
h1 {
    font-size: 50px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0 auto;
    background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
span {
    font-size: 125px;
}
p {
    font-size: 25px;
}
button {
    color: var(--vt-c-indigo);
    background-color: var(--color-green);
    font-size: 20px;
    display: inline-block;
    border-radius: 8px;
    transition: background-color .5s, color .5s;
    position: relative;
    font-weight: 600;
    padding: 8px 1em;
}
button:hover {
    background-color: var(--color-green-hover);
}
</style>
