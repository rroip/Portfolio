import React from "react";
import PDF from "./Portfolio/assets/Resume.pdf";

export default function ResumePDF() {
  return (
    <div>
      <object width="100%" height="800" data={PDF} type="application/pdf" />;
    </div>
  );
}