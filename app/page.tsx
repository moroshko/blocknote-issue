import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../Editor"), { ssr: false });

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <div className="ring-1 ring-gray-300 rounded">
        <Editor />
      </div>
    </main>
  );
}
