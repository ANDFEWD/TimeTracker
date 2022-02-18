import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import TestTimer from "../../components/Dashboard/TestTimer";
import { useAPI } from "../../api/context";
import { TaskList } from "./TaskList";
import { TaskModel } from "../../typings";
import { timeInSecond } from "../../utils/timeInSecond";
import { AppBarDashboard } from "../../components/Dashboard/AppBar";

export const Dashboard = () => {
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState<TaskModel[]>([]);
  const [userId, setUserId] = useState();
  const api = useAPI();

  useEffect(() => {
    api.user.whoAmI().then((res) => setUserId(res));
  }, []);

  useEffect(() => {
    if (userId) {
      api.task.getList(userId).then(setTaskList);
    }
  }, [userId]);

  const handleSubmit = (
    hours: number,
    minutes: number,
    seconds: number,
    reset: (t: Date | undefined, e: boolean) => void
  ) => {
    const timeInSec = timeInSecond(hours, minutes, seconds);

    const body = {
      title: value,
      desc: value,
      userId,
      timeValue: timeInSec,
      userName: "testUser",
      userEmail: "testEmail@gmail.com",
      isComplete: true,
    };
    reset(undefined, false);

    api.task.create(body).then(setTaskList).catch(console.error);
  };

  return (
    <>
      <AppBarDashboard />
      <Box m="40px">
        <Box display="flex" p="20px" gap="20px" border="1px solid gray">
          <TextField
            fullWidth
            value={value}
            size="small"
            onChange={(e) => setValue(e.target.value)}
            style={{ borderRadius: 0 }}
          />
          <TestTimer handleSubmit={handleSubmit} />
        </Box>
        <TaskList taskList={taskList} />
      </Box>
    </>
  );
};
