"use client";
import { buildTree, flattenTree, buildParentMap, getAncestors } from "../lib/tree";
import VersionTable from "../components/VersionTable";
import { useEffect, useState } from "react";

export default function Home() {
  const PAGE_SIZE = 3;
  const [page, setPage] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/versions")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const tree = buildTree(data);
  const flattened = flattenTree(tree);
  const parentMap = buildParentMap(data);
  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const totalPages = Math.ceil(flattened.length / PAGE_SIZE);

  const paginatedData = flattened.slice(start, end);

  const ancestorSet: Set<string> = selectedId
    ? getAncestors(selectedId, parentMap)
    : new Set();

  if (!data.length) return <div>Loading...</div>;

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
        <VersionTable
          data={paginatedData}
          selectedId={selectedId}
          ancestorSet={ancestorSet}
          onSelect={setSelectedId}
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Previous
          </button>

          <span className="px-4 py-2 bg-gray-200 rounded text-gray-700">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={() =>
              setPage((p) =>
                (p + 1) * PAGE_SIZE < flattened.length ? p + 1 : p
              )
            }
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}