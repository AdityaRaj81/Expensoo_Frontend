import Button from "./Button";

const PageHeader = ({
  title,
  subtitle = "",
  primaryAction,
  secondaryAction,
  className = "",
}) => {
  return (
    <div
      className={`
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:items-center
        lg:justify-between
        mb-6
        ${className}
      `}
    >
      {/* Left */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-1 text-gray-500 text-sm lg:text-base">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right */}
      {(primaryAction || secondaryAction) && (
        <div className="flex flex-wrap gap-3">
          {secondaryAction}

          {primaryAction}
        </div>
      )}
    </div>
  );
};

export default PageHeader;