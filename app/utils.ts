export function extractFileName(filePath: string): string {
  // This regex matches everything after the last '/' or '\' in the path
  const match = filePath.match(/[/\\]([^/\\]+)$/);
  return match ? match[1] : filePath;
}

export const replacer = (key: any, value: any) =>
  typeof value === "bigint" ? value.toString() : value;

export function getRandomAddress(): `0x${string}` {
  return `0x${[...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join("")}` as `0x${string}`;
}
