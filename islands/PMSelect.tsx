import CopyText from "../components/CopyText.tsx";
import { useRef } from "preact/hooks";

export default function PMSelect(
  { pkg = "@oak/oak" }: { pkg?: string },
) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <div>
      <input type="radio" name="usage" id="pm-deno" class="hidden" checked />
      <input type="radio" name="usage" id="pm-npm" class="hidden" />
      <input type="radio" name="usage" id="pm-yarn" class="hidden" />
      <input type="radio" name="usage" id="pm-pnpm" class="hidden" />
      <input type="radio" name="usage" id="pm-bun" class="hidden" />
      <nav class="flex items-center gap-4">
        <h3 class="text-lg">Use with</h3>
        <details ref={detailsRef}>
          <summary class="flex border gap-1 rounded-md py-2 px-3 border-primary-500 dark:border-primary-400 bg-primary-100 dark:bg-primary-900">
            <div id="pm-deno-dropdown" class="hidden gap-1 items-center">
              <div class="h-4 *:h-4 *:w-auto flex-none">
                <img
                  src="/logos/deno.svg"
                  alt="Deno logo"
                />
              </div>
              <div class="leading-none">Deno</div>
            </div>
            <div id="pm-npm-dropdown" class="hidden gap-1 items-center">
              <div class="h-4 *:h-4 *:w-auto flex-none">
                <img
                  src="/logos/npm_textless.svg"
                  alt="npm logo"
                />
              </div>
              <div class="leading-none">npm</div>
            </div>
            <div id="pm-yarn-dropdown" class="hidden gap-1 items-center">
              <div class="h-4 *:h-4 *:w-auto flex-none">
                <img
                  src="/logos/yarn_textless.svg"
                  alt="Yarn logo"
                />
              </div>
              <div class="leading-none">Yarn</div>
            </div>
            <div id="pm-pnpm-dropdown" class="hidden gap-1 items-center">
              <div class="h-4 *:h-4 *:w-auto flex-none">
                <img
                  src="/logos/pnpm_textless.svg"
                  alt="pnpm logo"
                />
              </div>
              <div class="leading-none">pnpm</div>
            </div>
            <div id="pm-bun-dropdown" class="hidden gap-1 items-center">
              <div class="h-4 *:h-4 *:w-auto flex-none">
                <img
                  src="/logos/bun.svg"
                  alt="Bun logo"
                />
              </div>
              <div class="leading-none">Bun</div>
            </div>
            <div class="rotate-90">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.76748 11.8159C5.5378 11.577 5.54525 11.1972 5.78411 10.9675L8.93431 8L5.78411 5.0325C5.54525 4.80282 5.5378 4.423 5.76748 4.18413C5.99715 3.94527 6.37698 3.93782 6.61584 4.1675L10.2158 7.5675C10.3335 7.68062 10.4 7.83679 10.4 8C10.4 8.16321 10.3335 8.31938 10.2158 8.4325L6.61584 11.8325C6.37698 12.0622 5.99715 12.0547 5.76748 11.8159Z"
                  fill="currentColor"
                >
                </path>
              </svg>
            </div>
          </summary>
          <div class="relative md:-left-2 z-30">
            <div
              class="absolute mt-2 border rounded-md w-48 p-2 border-primary-500 dark:border-primary-400 bg-white dark:bg-black"
              onClick={() => {
                if (detailsRef.current) {
                  detailsRef.current.open = false;
                }
              }}
            >
              <label for="pm-deno" class="flex gap-2 p-1 items-center">
                <div class="h-5 *:h-5 *:w-auto flex-none">
                  <img src="/logos/deno.svg" alt="Deno logo" />
                </div>
                <div>Deno</div>
              </label>
              <label for="pm-npm" class="flex gap-2 p-1 items-center">
                <div class="h-5 *:h-5 *:w-auto flex-none">
                  <img src="/logos/npm_textless.svg" alt="npm logo" />
                </div>
                <div>npm</div>
              </label>
              <label for="pm-yarn" class="flex gap-2 p-1 items-center">
                <div class="h-5 *:h-5 *:w-auto flex-none">
                  <img src="/logos/yarn_textless.svg" alt="yarn logo" />
                </div>
                <div>Yarn</div>
              </label>
              <label for="pm-pnpm" class="flex gap-2 p-1 items-center">
                <div class="h-5 *:h-5 *:w-auto flex-none">
                  <img src="/logos/pnpm_textless.svg" alt="pnpm logo" />
                </div>
                <div>pnpm</div>
              </label>
              <label for="pm-bun" class="flex gap-2 p-1 items-center">
                <div class="h-5 *:h-5 *:w-auto flex-none">
                  <img src="/logos/bun.svg" alt="bun logo" />
                </div>
                <div>Bun</div>
              </label>
            </div>
          </div>
        </details>
      </nav>
      <div>
        <div id="pm-deno-content" class="my-4">
          <CopyText text={`deno add jsr:${pkg}`} />
        </div>
        <div id="pm-npm-content" class="my-4">
          <CopyText text={`npx jsr add ${pkg}`} />
        </div>
        <div id="pm-yarn-content" class="my-4">
          <CopyText text={`yarn dlx jsr add ${pkg}`} />
        </div>
        <div id="pm-pnpm-content" class="my-4">
          <CopyText text={`pnpm dlx jsr add ${pkg}`} />
        </div>
        <div id="pm-bun-content" class="my-4">
          <CopyText text={`bunx jsr add ${pkg}`} />
        </div>
      </div>
    </div>
  );
}
