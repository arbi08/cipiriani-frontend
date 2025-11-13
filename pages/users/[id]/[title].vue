<template>
    <div class="">
        <h1>User Details</h1>
        <p v-if="userId">User ID: {{ userId }}</p>
        <p v-else>No user ID provided</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'UserPage',
    setup() {
        const route = useRoute();
        const userId = computed(() => {
            const title = Array.isArray(route.params.title) 
                ? route.params.title[0] 
                : route.params.title;
            return title || '';
        });

        return {
            userId
        };
    }
});
</script>