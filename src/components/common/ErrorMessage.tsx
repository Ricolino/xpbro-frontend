interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({
  message,
}: ErrorMessageProps) => {
  if (!message) {
    return null;
  }

  return (
    <div
      className="
        rounded-lg
        border
        border-red-300
        bg-red-50
        p-4
        text-red-700
      "
      role="alert"
    >
      {message}
    </div>
  );
};
