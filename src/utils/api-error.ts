import axios from "axios";

export const getErrorMessage = (
  error: unknown
): string => {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ??
      error.response?.data ??
      error.message ??
      "Unexpected error."
    );
  }

  return "Unexpected error.";
};
