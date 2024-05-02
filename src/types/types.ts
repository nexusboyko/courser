export interface DirectoryType {
  url?: string;
  [directoryName: string]: DirectoryType | File | string | undefined;
}

export interface File {
  url: string;
}