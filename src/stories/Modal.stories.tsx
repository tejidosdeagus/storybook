import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWrapper = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        title="Confirm Action"
        message="Are you sure you want to proceed with this action? This cannot be undone."
        textCancel="Cancel"
        onCancel={() => setOpen(false)}
        textAccept="Confirm"
        onAccept={() => {
          alert("Accepted!");
          setOpen(false);
        }}
      />
    </>
  );
};

const DeleteModalWrapper = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Delete Modal</button>
      <Modal
        open={open}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
        textCancel="Keep Product"
        onCancel={() => setOpen(false)}
        textAccept="Delete"
        onAccept={() => {
          alert("Product deleted!");
          setOpen(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: () => <ModalWrapper />,
};

export const DeleteConfirmation: Story = {
  render: () => <DeleteModalWrapper />,
};
