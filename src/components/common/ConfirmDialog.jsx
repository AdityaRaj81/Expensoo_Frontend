import Button from "./Button";

const ConfirmDialog = ({
  open,
  title = "Confirmation",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "danger",
  loading = false,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl">

        <div className="p-6">

          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <p className="mt-3 text-gray-600">
            {message}
          </p>

          <div className="mt-6 flex justify-end gap-3">

            <Button
              variant="secondary"
              onClick={onCancel}
            >
              {cancelText}
            </Button>

            <Button
              variant={confirmVariant}
              loading={loading}
              onClick={onConfirm}
            >
              {confirmText}
            </Button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ConfirmDialog;