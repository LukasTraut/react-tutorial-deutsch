import { FC } from "react";

interface SeverityMessageProps {
  severity: "error" | "warning";
}

const SeverityMessage: FC<SeverityMessageProps> = ({ severity, children }) => (
  <div className={severity === "warning" ? "warning" : "error"}>{children}</div>
);

export default SeverityMessage;
