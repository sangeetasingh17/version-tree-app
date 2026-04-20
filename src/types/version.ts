export type Version = {
  id: string;
  parentId: string | null;
  name: string;
  createdBy: string;
  createdAt: string;
  type: "TRUNK" | "BRANCH" | "RELEASE";
};