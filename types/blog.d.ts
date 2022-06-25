import { ParsedContent } from "@nuxt/content/dist/runtime/types"

declare module "@nuxt/content/dist/runtime/types" {
    interface ParsedContent {
        date: string;
        description: string;
        section: string;
        title: string;
        readtime: string;
        language: string;
    }
}
export {} 