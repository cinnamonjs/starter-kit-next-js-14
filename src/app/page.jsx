"use client";
// import library
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
// import re-use component
import { Button } from "@/components/Button";

export default function Home() {
  // use for push replace route page
  const Router = useRouter();

  // useState for collect state
  const [count, setCount] = useState(0);

  // global state zustand library Good for many state
  const populations = useUserStore((state) => state.populations);
  const incrementPopulation = useUserStore(
    (state) => state.incrementPopulation
  );
  const decrementPopulation = useUserStore(
    (state) => state.decrementPopulation
  );
  // useEffect for do function when variables are changed
  useEffect(() => {
    incrementPopulation();
    // set variables to watch on []
  }, [count]);

  return (
    <main className="flex flex-col items-center justify-between w-screen min-h-screen p-24">
      {/* page parameter */}
      <div className="text-4xl">{`Home pages`}</div>

      {/* zustand variables */}
      <div className="mt-4 text-2xl">populations: {populations}</div>

      {/* zustand functions */}
      <div className="flex gap-4">
        <Button onClick={incrementPopulation}>increment</Button>
        <Button onClick={decrementPopulation}>decrement</Button>
      </div>

      {/* useState variables */}
      <div className="mt-4 text-2xl">count: {count}</div>
      <div className="flex gap-4">
        {/* ❌ Bad change State ❌ Don't change state from state variable  */}
        <Button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
          }}
        >
          double count
        </Button>

        {/* ✅ Good change State ✅ use ((previous state) => ...) to change old state */}
        <Button
          onClick={() => {
            setCount((prevState) => prevState + 1);
            setCount((prevState) => prevState + 1);
          }}
        >
          double count with previous State
        </Button>

        <Button onClick={() => setCount(0)}>reset count</Button>
      </div>
      {/* Navigation by <Link> */}
      <div className="text-2xl">Link</div>
      <Link href="/users/123">
        <Button>go to user</Button>
      </Link>

      {/* Navigation by Function */}
      <Button onClick={() => Router.push(`/users/${count}`)}>
        go to count user
      </Button>
    </main>
  );
}
