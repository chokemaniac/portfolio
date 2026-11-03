import { readdirSync } from "node:fs";

const files = readdirSync("public/assets");

/** Prefix a root-relative path with the site base (the site can be served from a subfolder). */
export function u(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}

/** Resolve an asset by hash prefix (>=8 chars) to its public URL; throws if missing so typos fail the build. */
export function asset(prefix: string): string {
  const hits = files.filter((f) => f.startsWith(prefix));
  if (hits.length !== 1) throw new Error(`asset "${prefix}" matched ${hits.length} files`);
  return u("/assets/" + hits[0]);
}
