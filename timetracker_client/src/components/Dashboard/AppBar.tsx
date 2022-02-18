import IconButton from "@mui/material/IconButton";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAPI } from "../../api/context";
import { useNavigate } from "react-router-dom";

export const AppBarDashboard = () => {
  const api = useAPI();
  const navigate = useNavigate();

  const handleClick = () => {
    api.user.logout().then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="space-between" p="20px">
        <Typography variant="h6" color="inherit" component="div">
          Tracking Time
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </AppBar>
  );
};
