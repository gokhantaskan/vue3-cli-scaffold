import parsePath from "parse-filepath";
import { App } from "vue";

export function registerGlobalComponents(app: App): void {
  // Load global components from @/components/_global
  const req = require.context(
    "@/components/_global",
    true,
    /^((?!(stories|spec)).)*\.(js|ts|vue)$/i,
  );
  for (const filePath of req.keys()) {
    const componentName = parsePath(filePath).name;
    if (!componentName) continue;
    const componentConfig = req(filePath);
    app.component(componentName, componentConfig.default || componentConfig);
  }
}
