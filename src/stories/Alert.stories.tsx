import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";
import { useState } from "react";
import { Button } from "@mui/material";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

interface AlertInfo {
  id: number;
  severity: "success" | "info" | "warning" | "error";
}

const AlertManager = () => {
  const [alerts, setAlerts] = useState<AlertInfo[]>([]);

  const addAlert = (severity: "success" | "info" | "warning" | "error") => {
    const id = new Date().getTime();
    setAlerts((prevAlerts) => [...prevAlerts, { id, severity }]);
  };

  const handleClose = (id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "400px",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button variant="outlined" onClick={() => addAlert("success")}>
          Success
        </Button>
        <Button variant="outlined" onClick={() => addAlert("info")}>
          Info
        </Button>
        <Button variant="outlined" onClick={() => addAlert("warning")}>
          Warning
        </Button>
        <Button variant="outlined" onClick={() => addAlert("error")}>
          Error
        </Button>
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            severity={alert.severity}
            onClose={() => handleClose(alert.id)}
          >
            This is a {alert.severity} alert.
          </Alert>
        ))}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <AlertManager />,
};

const FilledAlertManager = () => {
  const [alerts, setAlerts] = useState<AlertInfo[]>([]);

  const addAlert = (severity: "success" | "info" | "warning" | "error") => {
    const id = new Date().getTime();
    setAlerts((prevAlerts) => [...prevAlerts, { id, severity }]);
  };

  const handleClose = (id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "400px",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button
          variant="contained"
          onClick={() => addAlert("success")}
          color="success"
        >
          Success
        </Button>
        <Button
          variant="contained"
          onClick={() => addAlert("info")}
          color="info"
        >
          Info
        </Button>
        <Button
          variant="contained"
          onClick={() => addAlert("warning")}
          color="warning"
        >
          Warning
        </Button>
        <Button
          variant="contained"
          onClick={() => addAlert("error")}
          color="error"
        >
          Error
        </Button>
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            variant="filled"
            severity={alert.severity}
            onClose={() => handleClose(alert.id)}
          >
            This is a filled {alert.severity} alert.
          </Alert>
        ))}
      </div>
    </div>
  );
};

export const Filled: Story = {
  render: () => <FilledAlertManager />,
};
