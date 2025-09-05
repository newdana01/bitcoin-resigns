export type BatchLog = {
  id: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
  input_file: string | null;
  output_file: string | null;
  endpoint: string | null;
  provider: string | null;
  created_at: string;
  updated_at: string | null;
};

export type StorageFile = {
  id: string;
  purpose: string;
  provider: string;
  created_at: string;
};
