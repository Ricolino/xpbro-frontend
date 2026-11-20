interface EmptyStateProps {
  title?: string;
  message?: string;
}

export const EmptyState = ({
  title = "Nothing to display",
  message = "No data is available.",
}: EmptyStateProps) => {
  return (
    <div className="rounded-lg border bg-white p-8 text-center">
      <h2 className="mb-2 text-lg font-semibold">
        {title}
      </h2>

      <p className="text-gray-500">
        {message}
      </p>
    </div>
  );
};
