import { Box, styled, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { calculationTime } from "../../utils/calculationTime";

const StyledBox = styled(Box)(() => ({
  marginTop: "40px",
  border: "1px solid gray",
  padding: "20px",
  alignItems: "center",
  display: "flex",
  gap: "20px",
}));

interface Props {
  taskList: any[];
}

export const TaskList: React.FC<Props> = ({ taskList }) => {
  if (taskList.length === 0) {
    return (
      <StyledBox style={{ justifyContent: "center" }}>
        No Data Available
      </StyledBox>
    );
  }

  return (
    <>
      {taskList.map((task, index) => (
        <StyledBox key={index}>
          <CheckCircleIcon sx={{ color: "green" }} />
          <Typography variant="body1">{task?.desc}</Typography>
          <Typography variant="h5">
            {calculationTime(+task?.timeValue)}
          </Typography>
        </StyledBox>
      ))}
    </>
  );
};
