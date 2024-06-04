import PMSelect from "../islands/PMSelect.tsx";

export default function Home() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          class="w-full p-12 lg:p-28 xl:p-40"
          src="/oak_logo.svg"
          alt="dashboard image"
        />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
            A middleware framework for JavaScript and TypeScript.
          </h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            oak is a middleware framework for handling HTTP requests across{" "}
            <a href="https://deno.com/" target="blank_" class="underline">
              Deno
            </a>,{" "}
            <a href="https://nodejs.org/" target="blank_" class="underline">
              Node.js
            </a>,{" "}
            <a href="https://bun.sh/" target="blank_" class="underline">Bun</a>
            {" "}
            and{" "}
            <a
              href="https://workers.cloudflare.com/"
              target="blank_"
              class="underline"
            >
              Cloudflare Workers
            </a>.
          </p>
          <PMSelect />
        </div>
      </div>
    </section>
  );
}
