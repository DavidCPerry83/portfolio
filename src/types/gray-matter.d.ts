declare module 'gray-matter' {
  interface GrayMatterFile {
    data: Record<string, unknown>;
    content: string;
    excerpt?: string;
    orig: string | Buffer;
    language?: string;
    matter?: string;
  }

  function matter(input: string | Buffer, options?: unknown): GrayMatterFile;

  export default matter;
}