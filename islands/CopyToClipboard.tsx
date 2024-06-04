import CopyText from "../components/CopyText.tsx";

export default function CopyToClipboard({ text }: { text: string }) {
  return <CopyText text={text} />;
}
