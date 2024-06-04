import { render } from "@deno/gfm";
import CopyText from "./CopyText.tsx";

import "prismjs/components/prism-typescript?no-check";
import "prismjs/components/prism-bash?no-check";

export default function CodeBlock(
  { code, setup }: { code: string; setup?: string },
) {
  const setup__html = setup && render(`\`\`\`bash\n${setup}\n\`\`\``);
  const __html = render(`\`\`\`ts\n${code}\n\`\`\``);
  return (
    <div class="space-y-8">
      {setup__html && (
        <div class="relative">
          <div class="p-6 text-white rounded-lg bg-gray-700 dark:bg-black">
            <div
              class="overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: setup__html }}
            >
            </div>
          </div>
          <CopyText text={setup} />
        </div>
      )}
      <div class="relative">
        <div class="p-6 text-white rounded-lg bg-gray-700 dark:bg-black">
          <div
            class="overflow-x-auto"
            dangerouslySetInnerHTML={{ __html }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}
