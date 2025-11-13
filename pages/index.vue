<template>
  <div
    class="relative min-h-screen bg-cover bg-center text-white"
    style="background-image: url('/download.jpeg')"
  >
    <!-- Navbar -->
    <nav
      class="absolute top-0 left-0 w-full flex justify-center items-center py-3 bg-white shadow-lg backdrop-blur-sm  relative"
    >
      <h1 class="text-3xl text-black font-bold tracking-widest uppercase"><img src="/Logo.avif" class="w-20" alt="logo"></h1>

    </nav>

    <!-- Hero Section -->
    <section
      class="flex flex-col justify-center items-center text-center min-h-screen bg-black/40 backdrop-blur-sm"
    >
      <h2 class="text-5xl font-bold mb-4 animate-fade-in-down">
        Welcome to Cipiriani
      </h2>
      <p class="text-lg text-gray-200 max-w-xl animate-fade-in-up">
        Experience elegance and style in every detail.
      </p>
      <button class="mt-8 bg-cip-900 text-white px-8 py-2 rounded-full border-none hover:bg-cip-900/80 transition">Explore Now</button>
    </section>

    <AuthButton />
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>

<style scoped>
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes zoom-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-fade-in-down {
  animation: fade-in-down 1s ease-out;
}
.animate-fade-in-up {
  animation: fade-in-up 1.2s ease-out;
}
.animate-zoom-in {
  animation: zoom-in 0.3s ease-out;
}
</style>
