import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt:vitest:mock-transform"]?: typeof import("nuxt:vitest:mock-transform").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vitest-env"]?: typeof import("vitest-environment-nuxt/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vitest"]?: typeof import("nuxt-vitest").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxtIcons"]?: typeof import("nuxt-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", NuxtConfig["tailwindcss"]] | ["nuxt:vitest:mock-transform", NuxtConfig["nuxt:vitest:mock-transform"]] | ["vitest-environment-nuxt/module", NuxtConfig["vitest-env"]] | ["nuxt-vitest", NuxtConfig["vitest"]] | ["@nuxt/image-edge", NuxtConfig["image"]] | ["@nuxt/devtools", NuxtConfig["devtools"]] | ["nuxt-icons", NuxtConfig["nuxtIcons"]] | ["@pinia/nuxt", NuxtConfig["pinia"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   ipx: {
      dir: string,

      maxAge: any,

      domains: Array<any>,

      sharp: any,

      alias: any,
   },
  }
  interface PublicRuntimeConfig {

  }
}