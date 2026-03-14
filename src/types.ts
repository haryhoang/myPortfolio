export interface Course {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  topics: string[];
  illustration: string;
  category: string;
  folderUrl?: string;
  webUrl?: string;
}
