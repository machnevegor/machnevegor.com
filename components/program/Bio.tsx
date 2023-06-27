import Program from "~/components/program/Program.tsx";

export default function Bio({ onDone }: { onDone?: () => void }) {
  return (
    <Program command="cat README.md" onStart={onDone}>
      <p className="font-mono text-xl">
        I have been a Software Engineer since 2018. I currently have two years
        of commercial experience in both front- and back-end development.
      </p>
      <br />
      <p className="font-mono text-xl">- TypeScript</p>
      <p className="font-mono text-xl">- Python</p>
      <p className="font-mono text-xl">- Rust</p>
      <br />
      <p className="font-mono text-xl">
        I do graph theory, decentralized data execution and storage. Nowadays I
        am interested in machine learning.
      </p>
    </Program>
  );
}
