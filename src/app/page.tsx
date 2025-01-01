import { promises as fs } from "fs";
import { PromptPicker } from "./PromptPicker";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/tbr-prompts.txt",
    "utf8"
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-900">
        Christina&apos;s TBR Prompt Generator
      </h1>
      <PromptPicker prompts={file.split("\n")} />
    </div>
  );
}
