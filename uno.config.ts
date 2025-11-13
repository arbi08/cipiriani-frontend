// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons, presetTypography, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),          // الكلاسات ديال Tailwind
    presetAttributify(),  // تستعمل attributes فـ HTML
    presetIcons(),        // الأيقونات
    presetTypography(),   // تنسيقات النصوص
    presetWind(),         // بعض الutilities الإضافية
  ],
  
  // تعريف الألوان ديالك هنا باش تقدر تستعملهم مباشرة
  theme: {
    colors: {
      // أسماء مقترحة: cip-900 .. cip-600
      'cip-900': '#54362c', // غامق
      'cip-800': '#6b5a50',
      'cip-700': '#8a7670',
      'cip-600': '#9f9b9c', // فاتح
    },
  },

  shortcuts: [
    // استعمال الألوان ديالك فـ shortcuts
    ['btn', 'px-12 py-3 rounded bg-cip-900 text-white hover:bg-cip-800 transition'],
    ['card', 'p-4 rounded-xl shadow-lg bg-white dark:bg-gray-800'],
    // مثال على زر ثانوي باستعمال لون فاتح
    ['btn-ghost', 'px-4 py-2 rounded border border-cip-700 text-cip-700 hover:bg-cip-700/10 transition'],
  ],

  rules: [
    ['text-shadow', { 'text-shadow': '2px 2px 4px rgba(0,0,0,0.3)' }],
  ],

  // باش نتفاداو مشاكل ديال توليد بعض الأسماء فـ dev
  safelist: [
    'bg-cip-900', 'bg-cip-800', 'bg-cip-700', 'bg-cip-600',
    'text-cip-900', 'text-cip-800', 'text-cip-700', 'text-cip-600',
    'border-cip-700'
  ],
})
