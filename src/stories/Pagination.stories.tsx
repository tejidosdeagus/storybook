import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    page: {
      control: { type: "number", min: 1 },
      description: "Current page number",
    },
    count: {
      control: { type: "number", min: 1 },
      description: "Total number of pages",
    },
    showFirstButton: {
      control: "boolean",
      description: "Whether to show the first page button",
    },
    showLastButton: {
      control: "boolean",
      description: "Whether to show the last page button",
    },
    shape: {
      control: { type: "select" },
      options: ["circular", "rounded"],
      description: "The shape of the pagination items",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the pagination component",
    },
    variant: {
      control: { type: "select" },
      options: ["text", "outlined"],
      description: "The variant of the pagination component",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: 1,
    count: 10,
    showFirstButton: true,
    showLastButton: true,
    shape: "rounded",
    size: "medium",
    variant: "text",
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Pagination
        page={page}
        count={args.count}
        onChange={handleChange}
        showFirstButton={args.showFirstButton}
        showLastButton={args.showLastButton}
        shape={args.shape}
        size={args.size}
        variant={args.variant}
      />
    );
  },
};

export const Small: Story = {
  args: {
    page: 1,
    count: 10,
    size: "small",
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Pagination
        page={page}
        count={args.count}
        onChange={handleChange}
        size={args.size}
      />
    );
  },
};

export const Large: Story = {
  args: {
    page: 1,
    count: 10,
    size: "large",
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Pagination
        page={page}
        count={args.count}
        onChange={handleChange}
        size={args.size}
      />
    );
  },
};

export const Circular: Story = {
  args: {
    page: 1,
    count: 10,
    shape: "circular",
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Pagination
        page={page}
        count={args.count}
        onChange={handleChange}
        shape={args.shape}
      />
    );
  },
};

export const Outlined: Story = {
  args: {
    page: 1,
    count: 10,
    variant: "outlined",
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Pagination
        page={page}
        count={args.count}
        onChange={handleChange}
        variant={args.variant}
      />
    );
  },
};

export const ManyPages: Story = {
  args: {
    page: 5,
    count: 20,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Pagination page={page} count={args.count} onChange={handleChange} />
    );
  },
};

export const WithoutFirstLastButtons: Story = {
  args: {
    page: 1,
    count: 10,
    showFirstButton: false,
    showLastButton: false,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    return (
      <Pagination
        page={page}
        count={args.count}
        onChange={handleChange}
        showFirstButton={args.showFirstButton}
        showLastButton={args.showLastButton}
      />
    );
  },
};
