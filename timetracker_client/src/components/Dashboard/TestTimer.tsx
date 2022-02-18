import { useStopwatch } from "react-timer-hook";
import { Box, Button, Typography } from "@mui/material";
import { formatTime } from "../../utils/formatTime";
import React from "react";

interface Props {
  handleSubmit: (
    h: number,
    m: number,
    s: number,
    reset: (t: Date | undefined, f: boolean) => void
  ) => void;
}

const TestTimer: React.FC<Props> = ({ handleSubmit }) => {
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  return (
    <Box display="flex" alignItems="center" gap="15px">
      <Box minWidth="100px" display="flex" justifyContent="end">
        <Typography variant="h5">{formatTime(hours)}:</Typography>
        <Typography variant="h5">{formatTime(minutes)}:</Typography>
        <Typography variant="h5">{formatTime(seconds)}</Typography>
      </Box>
      {isRunning ? (
        <Button
          color="error"
          variant="contained"
          sx={{ width: "100px", borderRadius: 0 }}
          onClick={pause}
        >
          pause
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ width: "100px", borderRadius: 0 }}
          onClick={start}
        >
          Start
        </Button>
      )}
      <Button
        variant="contained"
        sx={{ width: "100px", borderRadius: 0 }}
        onClick={() => reset(undefined, false)}
      >
        Reset
      </Button>{" "}
      <Button
        variant="contained"
        sx={{ width: "100px", borderRadius: 0 }}
        onClick={() => handleSubmit(hours, minutes, seconds, reset)}
      >
        submit
      </Button>
    </Box>
  );
};

export default TestTimer;
