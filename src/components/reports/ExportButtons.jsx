import {
  FileSpreadsheet,
  FileText,
} from "lucide-react";

import Card from "../common/Card";
import Button from "../common/Button";

const ExportButtons = ({
  onExportPdf,
  onExportExcel,
  loading = false,
}) => {
  return (
    <Card
      title="Export Reports"
      subtitle="Download your transaction reports"
    >
      <div className="flex flex-col sm:flex-row gap-4">

        <Button
          variant="danger"
          loading={loading}
          leftIcon={<FileText size={18} />}
          onClick={onExportPdf}
          fullWidth
        >
          Export PDF
        </Button>

        <Button
          variant="success"
          loading={loading}
          leftIcon={
            <FileSpreadsheet size={18} />
          }
          onClick={onExportExcel}
          fullWidth
        >
          Export Excel
        </Button>

      </div>
    </Card>
  );
};

export default ExportButtons;