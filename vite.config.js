/** @type {import('vite').UserConfig} */
export default {
  base: '/assets/template/dist/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].chunk.js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    watch: {
      usePolling: true // Enable polling for file changes
    }
  }
}
