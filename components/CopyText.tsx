import { useSignal } from "@preact/signals";

export default function CopyText({ text }: { text: string }) {
  const copied = useSignal(false);
  return (
    <div class="bg-gray-800 rounded text-white flex items-center min-w-0">
      <pre class="overflow-x-auto flex-1 py-2 px-4">{text}</pre>
      <div class="relative my-2 mr-4">
        <button
          aria-label="Copy to Clipboard"
          class="rounded p-1.5 border border-gray-300 hover:bg-gray-700 relative"
          onClick={() => {
            navigator.clipboard.writeText(text);
            copied.value = true;
            setTimeout(() => copied.value = false, 1000);
          }}
        >
          {copied.value
            ? (
              <svg
                className="h-4 w-4 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            )
            : (
              <svg
                class="h-4 w-4"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1.55566 2.7C1.55566 2.03726 2.09292 1.5 2.75566 1.5H8.75566C9.41841 1.5 9.95566 2.03726 9.95566 2.7V5.1H12.3557C13.0184 5.1 13.5557 5.63726 13.5557 6.3V12.3C13.5557 12.9627 13.0184 13.5 12.3557 13.5H6.35566C5.69292 13.5 5.15566 12.9627 5.15566 12.3V9.9H2.75566C2.09292 9.9 1.55566 9.36274 1.55566 8.7V2.7ZM6.35566 9.9V12.3H12.3557V6.3H9.95566V8.7C9.95566 9.36274 9.41841 9.9 8.75566 9.9H6.35566ZM8.75566 8.7V2.7L2.75566 2.7V8.7H8.75566Z"
                  fill="currentColor"
                >
                </path>
              </svg>
            )}
        </button>
      </div>
    </div>
  );
}
