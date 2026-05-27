import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "wpx0dee5",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
