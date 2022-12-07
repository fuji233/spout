<script setup>
import { RouterLink } from 'vue-router';
import { scrollIntoView }  from '../assets/js/utils';
</script>

<template>
    <div class="nav-left">
        <button @click="scrollIntoView('.container-welcome')">Spout</button>
    </div>
    <div class="nav-mid"></div>
    <div class="nav-right">
        <ul>
            <li><button @click="scrollIntoView('.container-header')"><RouterLink to="/hello">Hello</RouterLink></button></li>
            <li class='dropdown'>
                <button @click="scrollIntoView('.container-header')">
                    <RouterLink to="/projects">
                        <span>项目</span>
                        <svg class="mirror-rota e-vertical" width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 18L24 30L12 18" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </RouterLink>
                </button>
                <ul class="dropdown-list">
                    <li><span>开源</span></li>
                    <li><button><a href="https://github.com/fuji233/spout" target="_blank">spout</a></button></li>
                    <li><span>练手</span></li>
                    <li><button><a href="https://fuji233.github.io/demo/#/balabala" target="_blank">balabala</a></button></li>
                </ul>
            </li>
            <li><button @click="scrollIntoView('.container-header')"><RouterLink to="/blog">博客</RouterLink></button></li>
            <li>
                <button>
                    <a href="https://github.com/fuji233" target="_blank">
                        <span>GitHub</span>
                        <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 32L33 15" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 15H33V33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
a, button {
    color: var(--color-heading);
}

a:hover {
    color: var(--color-green);
}
</style>
