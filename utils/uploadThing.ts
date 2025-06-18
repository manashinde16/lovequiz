// utils/uploadThing.ts

export async function uploadTextToUploadThing(text: string): Promise<string> {
  const formData = new FormData();
  const blob = new Blob([text], { type: "text/plain" });
  formData.append("file", blob, "romantic_result.txt");

  const response = await fetch("https://uploadthing.com/api/upload", {
    method: "POST",
    headers: {
      "x-uploadthing-api-key":
        "eyJhcGlLZXkiOiJza19saXZlX2VmYzY2ZGE0ZmMxZjYxYzkxYTVjMDI1MTY0YzMzMGY2OTM5MzA3NzQxNmExY2QzN2QzOGRiMTVjZGQ0OTU3N2MiLCJhcHBJZCI6IjJ3d2w3am56ZmwiLCJyZWdpb25zIjpbInNlYTEiXX0=",
    },
    body: formData,
  });

  const data = await response.json();
  return data.url || "https://uploadthing.com/your-dashboard";
}
