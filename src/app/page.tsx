import { promises as fs } from "fs";
import Randomiser from "./Randomiser";
import { alphabet, colours, genres } from "./RandomiserUtils";

export default async function Home() {
  const promptsFileContent = await fs.readFile(
    process.cwd() + "/src/app/data/tbr-prompts.txt",
    "utf8"
  );

  const splitPrompts = promptsFileContent.split("\n");
  
  return (
    <div className="flex flex-col items-center justify-start md:justify-center min-h-screen bg-pink-300">
      <h1 className="m-8 text-4xl font-bold text-center text-gray-900">
        Christina&apos;s TBR Prompt Generator
      </h1>
      <Randomiser items={splitPrompts} buttonText="Pick a Prompt" />
      <Randomiser items={alphabet} buttonText="Pick a Letter" />
      <Randomiser items={genres} buttonText="Pick a Genre" />
      <Randomiser items={colours} buttonText="Pick a Colour" />
    </div>
  );
}
