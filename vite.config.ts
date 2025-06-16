import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "lf-react-component",
      formats: ["es", "umd"],
      fileName: (format) => `lf-react-component.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // 外部化 React 依赖
      output: {
        assetFileNames: "assets/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      // 自动生成 .d.ts 声明文件
      insertTypesEntry: true,
    }),
  ],
});
