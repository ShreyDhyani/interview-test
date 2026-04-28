"use client";

import * as Dialog from "@radix-ui/react-dialog";

type DeleteConfirmModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemName?: string;
};

export function DeleteConfirmModal({
  open,
  onOpenChange,
  itemName,
}: DeleteConfirmModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.72)",
          }}
        />
        <Dialog.Content
          style={{
            position: "fixed",
            inset: 0,
            display: "grid",
            placeItems: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              width: "min(100%, 480px)",
              background: "#ffffff",
              borderRadius: "14px 14px 0 0",
              padding: "24px 24px 18px",
            }}
          >
            <Dialog.Title
              style={{ fontSize: "1.3rem", marginBottom: "8px", color: "#111827" }}
            >
              Are you sure you want to delete?
            </Dialog.Title>
            <Dialog.Description style={{ color: "#4b5563", lineHeight: 1.5 }}>
              This will permanently delete the todo item.
              {itemName ? (
                <>
                  <br />
                  Selected item: <strong>{itemName}</strong>
                </>
              ) : null}
            </Dialog.Description>
          </div>
          <div
            style={{
              width: "min(100%, 480px)",
              background: "#ffffff",
              borderRadius: "0 0 14px 14px",
              padding: "14px 24px 24px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Dialog.Close asChild>
              <button
                type="button"
                style={{
                  border: 0,
                  borderRadius: "10px",
                  padding: "9px 14px",
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  background: "#e5e7eb",
                  color: "#111827",
                }}
              >
                Cancel
              </button>
            </Dialog.Close>
            <button
              type="button"
              style={{
                border: 0,
                borderRadius: "10px",
                padding: "9px 14px",
                fontSize: "0.92rem",
                cursor: "pointer",
                background: "#dc2626",
                color: "#ffffff",
              }}
            >
              Delete
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
