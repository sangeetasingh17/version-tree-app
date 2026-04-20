import { Version } from "../types/version";

export type TreeNode = Version & {
  children: TreeNode[];
};

export function buildTree(data: Version[]): TreeNode[] {
  const map = new Map<string, TreeNode>();
  const roots: TreeNode[] = [];

  // Step 1: create all nodes
  data.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  // Step 2: link parent-child
  data.forEach((item) => {
    if (item.parentId) {
      const parent = map.get(item.parentId);
      parent?.children.push(map.get(item.id)!);
    } else {
      roots.push(map.get(item.id)!);
    }
  });

  return roots;
}

export type FlattenedNode = TreeNode & {
  depth: number;
};

export function flattenTree(
  nodes: TreeNode[],
  depth = 0,
  result: FlattenedNode[] = []
): FlattenedNode[] {
  nodes.forEach((node) => {
    result.push({ ...node, depth });

    if (node.children.length > 0) {
      flattenTree(node.children, depth + 1, result);
    }
  });

  return result;
}

export function buildParentMap(data: Version[]) {
  const map: Record<string, string | null> = {};

  data.forEach((item) => {
    map[item.id] = item.parentId;
  });

  return map;
}

export function getAncestors(id: string, parentMap: Record<string, string | null>) {
  const path = new Set<string>();

  while (id) {
    path.add(id);
    id = parentMap[id]!;
  }

  return path;
}