<template>
    <div>
        <nav style="padding: 10px;">
            Navigation

            <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>

            <NuxtLink :to="{ name: 'about' }">About</NuxtLink>

            <NuxtLink :to="{ name: 'users-id', params: { id: 1 } }">User 1</NuxtLink>

            <NuxtLink :to="{ name: 'users-id', params: { id: 2 } }">User 2</NuxtLink>

        </nav>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
    console.log('AppNav mounted')
    console.log(route.matched) // يطبع جميع تفاصيل المسار الحالي
    console.log(route.path) // يعطيك المسار الحالي
})
</script>

<style>
.router-link-active.router-link-exact-active {
    color: red;
}
</style>