import { FlattenedNode } from "../lib/tree";

type Props = {
  data: FlattenedNode[];
  selectedId: string | null;
  ancestorSet: Set<string>;
  onSelect: (id: string) => void;
};

export default function VersionTable({ data, onSelect, selectedId, ancestorSet }: Props) {

    return (
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
                <tr className="text-left text-gray-700 text-sm font-semibold">
                    <th className="p-2">Version</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Created By</th>
                    <th className="p-2">Created At</th>
                </tr>
            </thead>

            <tbody>
                {data.map((node) => (
                    <tr
                        key={node.id}
                        onClick={() => onSelect(node.id)}
                        className={`border-t cursor-pointer transition
                            ${
                            node.id === selectedId
                                ? "bg-blue-100"
                                : ancestorSet.has(node.id)
                                ? "bg-blue-50"
                                : "hover:bg-gray-50"
                            }
                        `}
                        >
                        <td className="p-3">
                            <div
                                className="flex items-center"
                                style={{ paddingLeft: `${node.depth * 20}px` }}
                            >
                                <span className="text-gray-400 mr-2">●</span>
                                <span
                                    className={`font-medium ${
                                        node.id === selectedId
                                        ? "text-blue-700"
                                        : ancestorSet.has(node.id)
                                        ? "text-blue-500"
                                        : "text-gray-900"
                                    }`}
                                    >
                                    {node.id}
                                    </span>
                            </div>
                        </td>

                        <td className="p-3 text-gray-800">{node.name}</td>
                        <td className="p-3 text-gray-600">{node.createdBy}</td>
                        <td className="p-3 text-gray-500 text-sm">{node.createdAt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}