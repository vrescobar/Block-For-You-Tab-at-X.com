/// <reference lib="deno.ns" />

import { build } from "https://deno.land/x/dnt/mod.ts";
import { copy } from "https://deno.land/std/fs/copy.ts";
import { ensureDir } from "https://deno.land/std/fs/ensure_dir.ts";
import { debounce } from "https://deno.land/std/async/debounce.ts";
import { emptyDir } from "https://deno.land/std/fs/empty_dir.ts";

async function buildExtension() {
  console.log("🔨 Iniciando build...");
  
  try {
    // Limpiar y asegurar que existe el directorio dist
    await emptyDir("./dist");
    
    // Compilar TypeScript a JavaScript
    await build({
      entryPoints: ["./ForYouBlocker/src/content.ts"],
      outDir: "./dist/temp",
      shims: {},
      package: {
        name: "foryoublocker",
        version: "1.2.1",
      },
      compilerOptions: {
        lib: ["DOM", "DOM.Iterable", "ESNext"],
        target: "ES2020",
      },
    });

    // Copiar el archivo JavaScript compilado
    await copy(
      "./dist/temp/script/content.js",
      "./ForYouBlocker/src/content.js",
      { overwrite: true }
    );

    // Copiar el manifest y otros assets
    await copy("./ForYouBlocker/manifest.json", "./dist/manifest.json", { overwrite: true });
    await copy("./ForYouBlocker/assets", "./dist/assets", { overwrite: true });

    console.log("✅ Build completado!");
  } catch (error) {
    console.error("❌ Error durante el build:", error);
    Deno.exit(1);
  }
}

const debouncedBuild = debounce(buildExtension, 500);

async function watchMode() {
  console.log("👀 Iniciando modo watch...");
  
  try {
    const watcher = Deno.watchFs("./ForYouBlocker/src");
    
    for await (const event of watcher) {
      if (event.kind === "modify" && event.paths.some((path: string) => path.endsWith(".ts"))) {
        console.log("🔄 Cambios detectados, recompilando...");
        await debouncedBuild();
      }
    }
  } catch (error) {
    console.error("❌ Error en modo watch:", error);
    Deno.exit(1);
  }
}

if (import.meta.main) {
  const args = Deno.args;
  if (args.includes("--watch")) {
    watchMode().catch(console.error);
  } else {
    buildExtension().catch(console.error);
  }
} 