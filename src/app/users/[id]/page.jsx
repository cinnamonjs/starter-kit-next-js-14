"use client";
// import library or component
import Link from "next/link";
import { useParams } from "next/navigation";
// component re-use
import { Button } from "@/components/Button";

export default function User() {
  // page parameters
  const params = useParams();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {/* page parameter */}
      <div className="text-4xl">{`user: ${params.id}`}</div>
      <Link href="/">
        <Button>back</Button>
      </Link>
    </main>
  );
}
