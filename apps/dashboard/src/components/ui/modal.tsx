import React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-md bg-background p-4 shadow" onClick={(e) => e.stopPropagation()}>
        {title && <div className="mb-3 text-lg font-semibold">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}
