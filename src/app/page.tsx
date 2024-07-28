import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex justify-evenly w-full">
        <Link href="/upload-button">Upload Button</Link>
        <Link href="/upload-dnd">Upload DND</Link>
      </div>
    </main>
  );
}
