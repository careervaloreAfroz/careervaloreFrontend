// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { fetchCardDetails } from "../../utils/apicall";
// import { endpoints } from "../../../endpoints";
// import { Alert, Snackbar } from "@mui/material";
// export default function AddJob() {
//   const [title, setTitle] = useState("");
//   const [company, setCompany] = useState("");
//   const [image, setImage] = useState("");
//   const [location, setLocation] = useState("");
//   const [description, setDescription] = useState("");
//   const [requirements, setRequirements] = useState("");
//   const [type, setType] = useState("");
//   const [sector, setSector] = useState("");
//   const [salary, setSalary] = useState("");
//   const [applicationDeadline, setApplicationDeadline] = useState("");
//   const [jobLink, setJobLink] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("Job added Successfully");
//   const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state
//   const [alertType, setAlertType] = useState("success"); // Type of alert (success or error)
//   const router = useRouter();
//   const token = localStorage.getItem("token"); // Retrieve token from localStorage

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const jobData = {
//         title,
//         company,
//         location,
//         image,
//         description,
//         requirements: requirements.split(",").map((req) => req.trim()), // Convert => string to array
//         type,
//         sector,
//         salary,
//         applicationDeadline: applicationDeadline ? new Date(applicationDeadline) : null, // Convert to Date object
//         jobLink,
//       };

//       const response = await fetchCardDetails(`${endpoints.BASE_URL}/jobs/`,"POST",jobData,token);

//       setSuccess(response.message); // Set success message
//       setAlertType("success");
//       setOpenSnackbar(true);
//         // Reset all form fields to empty or initial values
//         setTitle("");
//         setCompany("");
//         setLocation("");
//         setImage("");
//         setDescription("");
//         setRequirements("");
//         setType("");
//         setSector("");
//         setSalary("");
//         setApplicationDeadline("");
//         setJobLink("");
//       // Redirect to the dashboard after 2 seconds
//       // setTimeout(() => {
//       //   router.push("/dashboard");
//       // }, 2000);
//     } catch (err) {
//       const errorMsg =
//         err.response?.data?.error || "An error occurred while adding the job";
//       setError(errorMsg);
//       setAlertType("error");
//       setOpenSnackbar(true);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
//       <h2 style={{ textAlign: "center", color: "#333" }}>Add Job</h2>

//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column" }}
//       >
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Job Title"
//           required
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={company}
//           onChange={(e) => setCompany(e.target.value)}
//           placeholder="Company"
//           required
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//           placeholder="Image URL"
//           required
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           placeholder="Location"
//           required
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Job Description"
//           required
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={requirements}
//           onChange={(e) => setRequirements(e.target.value)}
//           placeholder="Requirements (=>)"
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <select
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           required
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         >
//           <option value="">Select Job Type</option>
//           <option value="fulltime">Full-Time</option>
//           <option value="internship">Internship</option>
//           <option value="contract">Contract</option>
//         </select>
//         <input
//           type="text"
//           value={sector}
//           onChange={(e) => setSector(e.target.value)}
//           placeholder="Sector"
//           required
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={salary}
//           onChange={(e) => setSalary(e.target.value)}
//           placeholder="Salary"
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="date"
//           value={applicationDeadline}
//           onChange={(e) => setApplicationDeadline(e.target.value)}
//           placeholder="Application Deadline"
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={jobLink}
//           onChange={(e) => setJobLink(e.target.value)}
//           placeholder="Job Link"
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />

//         <button
//           type="submit"
//           style={{
//             padding: "10px 15px",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#007BFF",
//             color: "#fff",
//             cursor: "pointer",
//             transition: "background-color 0.3s",
//           }}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.backgroundColor = "#0056b3")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.backgroundColor = "#007BFF")
//           }
//         >
//           Add Job
//         </button>
//       </form>

//       {/* Snackbar for alerts */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={2000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={alertType}
//           sx={{ width: "100%" }}
//         >
//           {alertType === "success" ? "job added succfully" : error}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchCardDetails } from "../../utils/apicall";
import { endpoints } from "../../../endpoints";
import {
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import dotenv  from "dotenv"

export default function AddJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [type, setType] = useState("");
  const [sector, setSector] = useState("");
  const [salary, setSalary] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [rolesAndResponsibilities, setRolesAndResponsibilities] = useState("");
  const [selectionProcess, setSelectionProcess] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("Job added Successfully");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [openImageDialog, setOpenImageDialog] = useState(false);

  const router = useRouter();
  // const token = localStorage.getItem("token");
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleImageDialogOpen = () => {
    setOpenImageDialog(true);
  };
  const handleImageDialogClose = () => {
    setOpenImageDialog(false);
  };

  const validateForm = () => {
    const requiredFields = {
      "Job Title": title,
      Company: company,
      Location: location,
      "Job Description": description,
      "Job Type": type,
      Sector: sector,
    };

    for (const [fieldName, value] of Object.entries(requiredFields)) {
      if (!value || value.trim() === "") {
        return `Please fill in the required field: ${fieldName}`;
      }
    }
    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields before submission
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setAlertType("error");
      setOpenSnackbar(true);
      return;
    }

    try {
      const jobData = {
        title,
        company,
        location,
        image,
        description,
        requirements: requirements
          ? requirements
              .split("=>")
              .map((req) => req.trim())
              .filter(Boolean)
          : [],
        type,
        sector,
        salary,
        applicationDeadline: applicationDeadline
          ? new Date(applicationDeadline)
          : null,
        jobLink,
        aboutCompany,
        rolesAndResponsibilities: rolesAndResponsibilities
          ? rolesAndResponsibilities
              .split("=>")
              .map((role) => role.trim())
              .filter(Boolean)
          : [],
        selectionProcess: selectionProcess
          ? selectionProcess
              .split("=>")
              .map((step) => step.trim())
              .filter(Boolean)
          : [],
      };

      
      console.log("Sending job data:", jobData); // Log the exact payload
      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/`,
        "POST",
        jobData,
        token
      );
      console.log("Response from server:", response);

      setSuccess(response.message || "Job added successfully");
      setAlertType("success");
      setOpenSnackbar(true);

      // Reset form
      setTitle("");
      setCompany("");
      setLocation("");
      setImage("");
      setDescription("");
      setRequirements("");
      setType("");
      setSector("");
      setSalary("");
      setApplicationDeadline("");
      setJobLink("");
      setAboutCompany("");
      setRolesAndResponsibilities("");
      setSelectionProcess("");
    } catch (err) {
      const errorMsg =
        err.response?.data?.error || "An error occurred while adding the job";
      console.error("Error posting job:", err);
      setError(errorMsg);
      setAlertType("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Add Job</h2>

      {/* Note about mandatory fields */}
      <p style={{ color: "#666", marginBottom: "20px" }}>
        <strong>Note:</strong> Fields marked with * are mandatory (Job Title,
        Company, Location, Job Description, Job Type, Sector).
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title *"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company *"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <Button
            onClick={handleImageDialogOpen}
            variant="outlined"
            style={{ marginLeft: "10px" }}
            disabled={!image}
          >
            Preview Image
          </Button>
        </div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location *"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description *"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Requirements (separate with =>)"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Job Type *</option>
          <option value="fulltime">Full-Time</option>
          <option value="internship">Internship</option>
          <option value="contract">Contract</option>
        </select>
        <input
          type="text"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          placeholder="Sector *"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Salary"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <label style={{ display: "block", marginBottom: "5px" }}>
          Application Deadline
        </label>
        <input
          type="date"
          value={applicationDeadline}
          onChange={(e) => setApplicationDeadline(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={jobLink}
          onChange={(e) => setJobLink(e.target.value)}
          placeholder="Job Link"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          value={aboutCompany}
          onChange={(e) => setAboutCompany(e.target.value)}
          placeholder="About Company"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={rolesAndResponsibilities}
          onChange={(e) => setRolesAndResponsibilities(e.target.value)}
          placeholder="Roles and Responsibilities (separate with =>)"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={selectionProcess}
          onChange={(e) => setSelectionProcess(e.target.value)}
          placeholder="Selection Process (separate with =>)"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          Add Job
        </button>
      </form>

      <Dialog open={openImageDialog} onClose={handleImageDialogClose}>
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          {image ? (
            <img
              src={image}
              alt="Job Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                objectFit: "contain",
              }}
              onError={() => setError("Invalid image URL")}
            />
          ) : (
            <p>No image URL provided</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleImageDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertType === "success" ? success : error}
        </Alert>
      </Snackbar>
    </div>
  );
}