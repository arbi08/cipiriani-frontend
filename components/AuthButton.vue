<template>
  <div class="fixed bottom-5 right-5 z-50">
    <!-- Floating Button -->
    <button
      @click="showModal = true"
      class="bg-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <img src="/Logo.avif" class="w-14 h-14" alt="logo">
    </button>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
    >
      <div
        class="relative bg-white rounded-3xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md shadow-2xl animate-fadeIn mx-auto"
      >
        <!-- Close Icon -->
        <span
          @click="showModal = false"
          class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Icon icon="mdi:close" class="text-2xl" />
        </span>

        <!-- Dynamic Title -->
        <h2 class="text-2xl font-bold mb-6 text-center text-cip-800">
          {{ isLogin ? 'Login' : 'Create Account' }}
        </h2>

        <!-- Login Form -->
        <form v-if="isLogin" class="space-y-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full border border-cip-800/20 rounded-lg p-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full border border-cip-800/20 rounded-lg p-3 focus:outline-none"
          />
          <button
            type="submit"
            class="w-full bg-cip-900 text-white py-3 rounded-lg hover:bg-cip-900/80 transition-all"
          >
            Login
          </button>
          <p class="text-sm text-center mt-3 text-gray-600">
            Don’t have an account?
            <span
              @click="isLogin = false"
              class="text-cip-800 font-semibold cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </form>

        <!-- Register Form -->
        <form v-else class="space-y-4">
          <input
            type="text"
            placeholder="Username"
            class="w-full border border-gray-200 rounded-lg p-3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full border border-gray-200 rounded-lg p-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full border border-gray-200 rounded-lg p-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            class="w-full border border-gray-200 rounded-lg p-3 focus:outline-none"
          />
          <input
            type="date"
            class="w-full border border-gray-200 rounded-lg p-3 focus:outline-none text-gray-500"
          />
          <button
            type="submit"
            class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Register
          </button>
          <p class="text-sm text-center mt-3 text-gray-600">
            Already have an account?
            <span
              @click="isLogin = true"
              class="text-black font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const showModal = ref(false)
const isLogin = ref(true)
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>
