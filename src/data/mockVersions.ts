import { Version } from "../types/version";

export const mockVersions: Version[] = [
  {
    id: "v1",
    parentId: null,
    name: "Initial Version",
    createdBy: "Alice",
    createdAt: "2024-01-01",
    type: "TRUNK",
  },
  {
    id: "v2",
    parentId: "v1",
    name: "Update Config",
    createdBy: "Bob",
    createdAt: "2024-01-05",
    type: "BRANCH",
  },
  {
    id: "v3",
    parentId: "v1",
    name: "Experimental",
    createdBy: "Carol",
    createdAt: "2024-01-06",
    type: "BRANCH",
  },
  {
    id: "v4",
    parentId: "v2",
    name: "Bug Fix",
    createdBy: "Alice",
    createdAt: "2024-01-08",
    type: "RELEASE",
  },
];