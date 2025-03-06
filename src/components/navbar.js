"use client";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";

function Navbar() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  // Run only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      {/* Primary Navbar */}
      {!token && (

      <AppBar position="static" sx={{ backgroundColor: "#252525" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
            
            {/* Logo - Click redirects to / */}
            <IconButton onClick={() => router.push("/")} sx={{ p: 0 }}>
              <Avatar alt="Logo" src="./logo.jpg" sx={{ width: 50, height: 50 }} />
            </IconButton>

            {/* Home Button */}
            <Box>
              <IconButton onClick={() => router.push("/")} sx={{ color: "white" }}>
                <HomeIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
  )}

      {/* Secondary Navbar - Render only if token exists */}
      {token && (
      <AppBar position="static" sx={{ backgroundColor: "#252525" }}>
          <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Logo - Click redirects to / */}
            <IconButton onClick={() => router.push("/")} sx={{ p: 0 }}>
              <Avatar alt="Logo" src="./logo.jpg" sx={{ width: 50, height: 50 }} />
            </IconButton>
            <div>
              <Button color="inherit" onClick={() => router.push("/")}>Home</Button>
              <Button color="inherit" onClick={() => router.push("/dashboard")}>Dashboard</Button>
              <Button color="inherit" onClick={() => router.push("/AddJob")}>Add Job</Button>
              {/* <Button color="inherit" onClick={() => router.push("/AllJobs")}>All Jobs</Button> */}
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}

export default Navbar;
