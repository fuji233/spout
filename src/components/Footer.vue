<script setup>
import { computed, reactive } from 'vue';

let presentDate = reactive({ presentYear: new Date() });

const getPresentYear = computed(() => {
    return presentDate.presentYear.getFullYear();
});
</script>

<template>
    <footer>
        Copyright © 2022 - {{ getPresentYear }}
        <br />
        r · 3559125126@qq.com
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-grow: row nowrap;
    justify-content: center;
    align-items: center;
    height: var(--footer-height);
    border-top: 1px solid var(--color-border);
    text-align: center;
}
</style>
