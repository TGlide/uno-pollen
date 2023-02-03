import { extractorSvelte } from "@unocss/core";
import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";
import type { VitePluginConfig } from "@unocss/vite";
import { presetPollen } from "./uno";

const config: VitePluginConfig = {
  extractors: [extractorSvelte],
  presets: [presetIcons(), presetPollen() as any],
  transformers: [transformerDirectives()],
};

export default config;
