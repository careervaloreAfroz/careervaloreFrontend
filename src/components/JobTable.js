"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";

export default function JobTable({ jobs, onDelete, onEdit }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedField, setSelectedField] = useState({ key: "", value: "" });
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // Function to truncate long text
  const truncateText = (text, maxLength = 10) => {
    if (typeof text !== "string" || text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  // Handle opening the "More" dialog
  const handleMoreClick = (key, value) => {
    setSelectedField({ key, value });
    setOpenDialog(true);
  };

  // Handle closing the "More" dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedField({ key: "", value: "" });
  };

  // Handle opening the edit dialog
  const handleEditClick = (job) => {
    setEditingJob({
      ...job,
      // Convert arrays to strings for input fields, using " => " as separator
      requirements: job.requirements ? job.requirements.join(" => ") : "",
      rolesAndResponsibilities: job.rolesAndResponsibilities
        ? job.rolesAndResponsibilities.join(" => ")
        : "",
      selectionProcess: job.selectionProcess ? job.selectionProcess.join(" => ") : "",
    });
    setEditDialogOpen(true);
  };

  // Handle changes in the edit form
  const handleEditChange = (field, value) => {
    setEditingJob((prev) => ({ ...prev, [field]: value }));
  };

  // Handle submitting the edited job (convert strings to arrays before saving)
  const handleEditSubmit = () => {
    if (onEdit) {
      const updatedJob = {
        ...editingJob,
        requirements: editingJob.requirements
          ? editingJob.requirements
              .split("=>")
              .map((item) => item.trim())
              .filter(Boolean)
          : [],
        rolesAndResponsibilities: editingJob.rolesAndResponsibilities
          ? editingJob.rolesAndResponsibilities
              .split("=>")
              .map((item) => item.trim())
              .filter(Boolean)
          : [],
        selectionProcess: editingJob.selectionProcess
          ? editingJob.selectionProcess
              .split("=>")
              .map((item) => item.trim())
              .filter(Boolean)
          : [],
      };
      onEdit(updatedJob); // Pass the edited job to the parent
    } else {
      console.error("onEdit prop is not provided");
    }
    setEditDialogOpen(false);
    setEditingJob(null);
  };

  // Handle closing the edit dialog
  const handleEditClose = () => {
    setEditDialogOpen(false);
    setEditingJob(null);
  };

  // Handle key events to ensure Shift works
  const handleKeyDown = (event) => {
    if (event.key === "Shift") {
      // Allow Shift key functionality (e.g., for capital letters or new lines)
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="job table">
          <TableHead sx={{ bgcolor: "#1976d2", color: "white" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Title</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Company</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Image</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Location</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Description</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Requirements</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Type</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Sector</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Salary</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Deadline</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Active</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Created At</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Pinned</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Roles & Responsibilities</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Selection Process</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>About Company</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>
                  {truncateText(job.title)}
                  {job.title.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Title", job.title)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.company)}
                  {job.company.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Company", job.company)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  <img src={job.image} alt="job" style={{ width: "50px", height: "auto" }} />
                </TableCell>
                <TableCell>
                  {truncateText(job.location)}
                  {job.location.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Location", job.location)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.description)}
                  {job.description.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Description", job.description)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.requirements.join(" => "))}
                  {job.requirements.join(" => ").length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Requirements", job.requirements.join(" => "))}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>
                  {truncateText(job.sector)}
                  {job.sector.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Sector", job.sector)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.salary)}
                  {job.salary.length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Salary", job.salary)}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>{new Date(job.applicationDeadline).toLocaleDateString()}</TableCell>
                <TableCell>{job.isActive ? "Yes" : "No"}</TableCell>
                <TableCell>{new Date(job.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>{job.pin ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {truncateText(job.rolesAndResponsibilities.join(" => "))}
                  {job.rolesAndResponsibilities.join(" => ").length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Roles & Responsibilities", job.rolesAndResponsibilities.join(" => "))}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.selectionProcess.join(" => "))}
                  {job.selectionProcess.join(" => ").length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("Selection Process", job.selectionProcess.join(" => "))}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {truncateText(job.aboutCompany || "")}
                  {(job.aboutCompany || "").length > 10 && (
                    <Button size="small" onClick={() => handleMoreClick("About Company", job.aboutCompany || "")}>
                      More
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleEditClick(job)} sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => onDelete(job._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* "More" Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedField.key}</DialogTitle>
        <DialogContent>
          <Typography>{selectedField.value}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      {editingJob && (
        <Dialog open={editDialogOpen} onClose={handleEditClose}>
          <DialogTitle>Edit Job</DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              value={editingJob.title}
              onChange={(e) => handleEditChange("title", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Company"
              value={editingJob.company}
              onChange={(e) => handleEditChange("company", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Image URL"
              value={editingJob.image || ""}
              onChange={(e) => handleEditChange("image", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Location"
              value={editingJob.location}
              onChange={(e) => handleEditChange("location", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Description"
              value={editingJob.description}
              onChange={(e) => handleEditChange("description", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Requirements (separate with =>)"
              value={editingJob.requirements}
              onChange={(e) => handleEditChange("requirements", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Type"
              value={editingJob.type}
              onChange={(e) => handleEditChange("type", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Sector"
              value={editingJob.sector}
              onChange={(e) => handleEditChange("sector", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Salary"
              value={editingJob.salary}
              onChange={(e) => handleEditChange("salary", e.target.value)}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Application Deadline"
              type="date"
              value={new Date(editingJob.applicationDeadline).toISOString().split("T")[0]}
              onChange={(e) => handleEditChange("applicationDeadline", new Date(e.target.value).toISOString())}
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Roles and Responsibilities (separate with =>)"
              value={editingJob.rolesAndResponsibilities}
              onChange={(e) => handleEditChange("rolesAndResponsibilities", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="Selection Process (separate with =>)"
              value={editingJob.selectionProcess}
              onChange={(e) => handleEditChange("selectionProcess", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              onKeyDown={handleKeyDown}
            />
            <TextField
              label="About Company"
              value={editingJob.aboutCompany || ""}
              onChange={(e) => handleEditChange("aboutCompany", e.target.value)}
              fullWidth
              margin="normal"
              multiline
              onKeyDown={handleKeyDown}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={editingJob.isActive}
                  onChange={(e) => handleEditChange("isActive", e.target.checked)}
                />
              }
              label="Active"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={editingJob.pin}
                  onChange={(e) => handleEditChange("pin", e.target.checked)}
                />
              }
              label="Pinned"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={handleEditSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}