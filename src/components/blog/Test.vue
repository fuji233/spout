<script>
import { defineComponent } from 'vue';
import Test, { headings, codeBlocks } from '../../assets/docs/test.md';

export default defineComponent({
    name: 'App',
    components: {
        Test
    }
});
</script>

<template>
    <Test />
</template>
