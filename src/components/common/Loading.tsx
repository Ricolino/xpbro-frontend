interface LoadingProps {
  title?: string;
  message?: string;
}

export const Loading = ({
  title = "Loading...",
  message = "Please wait.",
}: LoadingProps) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 p-6">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"
        aria-hidden="true"
      />

      <div className="text-center">
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <p className="text-sm text-gray-500">
          {message}
        </p>
      </div>
    </div>
  );
};
