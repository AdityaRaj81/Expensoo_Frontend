import Button from "./Button";

const EmptyState = ({
  icon,
  title = "No Data Found",
  description = "Nothing to display.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      {icon && (
        <div className="mb-5 text-gray-400">
          {icon}
        </div>
      )}

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        {description}
      </p>

      {buttonText && (
        <Button
          className="mt-6"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;