import { ReactNode, useState } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const Dialog = ({ children }: { children: ReactNode }) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowDialog(true)}>{children}</Button>

      {showDialog && createPortal(children, document.body)}
    </div>
  );
};

export default Dialog;
