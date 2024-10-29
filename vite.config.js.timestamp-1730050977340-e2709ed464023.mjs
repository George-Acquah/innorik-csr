// vite.config.js
import { defineConfig } from "file:///D:/Personal/Innorik/innorik-csr/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Personal/Innorik/innorik-csr/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///D:/Personal/Innorik/innorik-csr/node_modules/tailwindcss/lib/index.js";
var ReactCompilerConfig = {
  target: "19"
};
var vite_config_default = defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]]
      }
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQZXJzb25hbFxcXFxJbm5vcmlrXFxcXGlubm9yaWstY3NyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQZXJzb25hbFxcXFxJbm5vcmlrXFxcXGlubm9yaWstY3NyXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9QZXJzb25hbC9Jbm5vcmlrL2lubm9yaWstY3NyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcbnZhciBSZWFjdENvbXBpbGVyQ29uZmlnID0ge1xuICAgIHRhcmdldDogXCIxOVwiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICByZWFjdCh7XG4gICAgICAgICAgICBiYWJlbDoge1xuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtbXCJiYWJlbC1wbHVnaW4tcmVhY3QtY29tcGlsZXJcIiwgUmVhY3RDb21waWxlckNvbmZpZ11dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICBcIkBcIjogXCIvc3JjXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgICAgcG9zdGNzczoge1xuICAgICAgICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzKCldLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVIsU0FBUyxvQkFBb0I7QUFDcFQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBQ3hCLElBQUksc0JBQXNCO0FBQUEsRUFDdEIsUUFBUTtBQUNaO0FBQ0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLE1BQ0YsT0FBTztBQUFBLFFBQ0gsU0FBUyxDQUFDLENBQUMsK0JBQStCLG1CQUFtQixDQUFDO0FBQUEsTUFDbEU7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLO0FBQUEsSUFDVDtBQUFBLEVBQ0o7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNELFNBQVM7QUFBQSxNQUNMLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFBQSxJQUMzQjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
