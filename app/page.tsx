import { Benchmark } from "../components/benchmark";

export default async function Home() {
  // SSR Fetching
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="">
      <div>Page is Created at: {new Date().getTime()}</div>
      <main className="">
        <Benchmark>NextJS13 Perf</Benchmark>
        <h1 className="">Hi, This is route `/`.</h1>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </main>
    </div>
  );
}
