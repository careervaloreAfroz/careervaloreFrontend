// components/JobDetailsContent.js
import {
  Business, // For company
  LocationOn, // For location
  Work, // For job title/role
  Event, // For posted date and deadline
  Visibility, // For total views
  AttachMoney, // For salary
  WorkOutline, // For job type
} from "@mui/icons-material";
function JobDetailsContent({ job }) {
  // Function to remove surrounding quotes from strings
  const cleanString = (str) => str.replace(/^"|"$/g, "");

  return (
    <div
      style={{
        backgroundColor: "#ebf0eb",
        padding: "10px",
        height: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Job Card Section */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          marginBottom: "10px",
          overflow: "hidden", // Prevent vertical overflow outside the card
        }}
      >
        {/* Job Title and Location */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#000",
            margin: "0 0 8px 0",
            textAlign: "left",
            lineHeight: "1.2",
            wordBreak: "break-word", // Wrap long words to the next line
          }}
        >
          {job.company} – Hiring for {job.title} @{job.location} – Apply Now!
        </h2>

        {/* Apply Call-to-Action */}
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#000",
            margin: "0 0 8px 0",
            textAlign: "left",
            wordBreak: "break-word", // Wrap long words to the next line
          }}
        >
          Apply Today!
        </p>

        {/* Metadata */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#666",
            fontSize: "0.875rem",
            flexWrap: "wrap", // Allow metadata to wrap
          }}
        >
          <span style={{ fontWeight: "bold", wordBreak: "break-word" }}>
            @{job.company}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              wordBreak: "break-word",
            }}
          >
            <Event sx={{ fontSize: "1rem" }} />
            {new Date(job.postedDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              wordBreak: "break-word",
            }}
          >
            <Visibility sx={{ fontSize: "1rem" }} />
            {job.totalViews || 0}
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "300px",
          backgroundColor: "black",
          margin: "0 auto 10px auto",
          backgroundImage: job?.image ? `url(${job.image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
        }}
      ></div>

      {/* Detailed Job Content */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Job Title */}
        <h2
          style={{
            marginBottom: "20px",
            textAlign: "left",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#1a3c5e",
            borderBottom: "2px solid #1a3c5e",
            paddingBottom: "8px",
            wordBreak: "break-word",
          }}
        >
          {job.title}
        </h2>

        {/* Company Name */}
        <h3
          style={{
            marginBottom: "20px",
            textAlign: "left",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#d32f2f",
            paddingBottom: "6px",
            wordBreak: "break-word",
          }}
        >
          Company: {job.company}
        </h3>

        {/* About the Company */}
        {job.aboutCompany && (
          <>
            <h3
              style={{
                marginBottom: "12px",
                textAlign: "left",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#333",
                paddingBottom: "6px",
              }}
            >
              About the Company
            </h3>
            <p
              style={{
                marginBottom: "24px",
                textAlign: "left",
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "#555",
                wordBreak: "break-word",
              }}
            >
              {job.aboutCompany}
            </p>
          </>
        )}

        {/* Job Description */}
        <h3
          style={{
            marginBottom: "12px",
            textAlign: "left",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "6px",
          }}
        >
          Job Description
        </h3>
        <p
          style={{
            marginBottom: "24px",
            textAlign: "left",
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#555",
            wordBreak: "break-word",
          }}
        >
          {job.description}
        </p>

        {/* Roles and Responsibilities */}
        {job.rolesAndResponsibilities.length > 0 && (
          <>
            <h3
              style={{
                marginBottom: "12px",
                textAlign: "left",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #333",
                paddingBottom: "6px",
              }}
            >
              Roles and Responsibilities
            </h3>
            <ul
              style={{
                marginBottom: "24px",
                paddingLeft: "25px",
                listStyleType: "disc",
              }}
            >
              {job.rolesAndResponsibilities.map((role, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "1rem",
                    marginBottom: "10px",
                    color: "#444",
                    wordBreak: "break-word",
                  }}
                >
                  {cleanString(role)}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Requirements */}
        {job.requirements.length > 0 && (
          <>
            <h3
              style={{
                marginBottom: "12px",
                textAlign: "left",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #333",
                paddingBottom: "6px",
              }}
            >
              Requirements
            </h3>
            <ul
              style={{
                marginBottom: "24px",
                paddingLeft: "25px",
                listStyleType: "disc",
              }}
            >
              {job.requirements.map((req, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "1rem",
                    marginBottom: "10px",
                    color: "#444",
                    wordBreak: "break-word",
                  }}
                >
                  {cleanString(req)}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Selection Process */}
        {job.selectionProcess.length > 0 && (
          <>
            <h3
              style={{
                marginBottom: "12px",
                textAlign: "left",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #333",
                paddingBottom: "6px",
              }}
            >
              Selection Process
            </h3>
            <ul
              style={{
                marginBottom: "24px",
                paddingLeft: "25px",
                listStyleType: "disc",
              }}
            >
              {job.selectionProcess.map((step, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "1rem",
                    marginBottom: "10px",
                    color: "#444",
                    wordBreak: "break-word",
                  }}
                >
                  {cleanString(step)}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Job Details Table */}
        <h3
          style={{
            marginBottom: "12px",
            textAlign: "left",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "6px",
          }}
        >
          Job Details
        </h3>
        <div
          style={{
            overflowX: "auto", // Add horizontal scrollbar if table overflows
            marginBottom: "24px",
          }}
        >
   <table
  style={{
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #ddd", // Added border for the entire table
  }}
>
  <thead>
    <tr
      style={{
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd", // Added border for header row
      }}
    >
      <th
        style={{
          padding: "6px", // Reduced from 10px to 6px
          textAlign: "left",
          borderRight: "1px solid #ddd", // Added vertical line between columns
        }}
      >
        Field
      </th>
      <th
        style={{
          padding: "6px", // Reduced from 10px to 6px
          textAlign: "left",
        }}
      >
        Details
      </th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ borderBottom: "1px solid #ddd" }}>
      <td
        style={{
          padding: "6px", // Reduced from 10px to 6px
          borderRight: "1px solid #ddd", // Added vertical line
        }}
      >
        Salary
      </td>
      <td style={{ padding: "6px" }}>{job.salary}</td>
    </tr>
    <tr style={{ borderBottom: "1px solid #ddd" }}>
      <td
        style={{
          padding: "6px",
          borderRight: "1px solid #ddd",
        }}
      >
        Role
      </td>
      <td style={{ padding: "6px" }}>{job.title}</td>
    </tr>
    <tr style={{ borderBottom: "1px solid #ddd" }}>
      <td
        style={{
          padding: "6px",
          borderRight: "1px solid #ddd",
        }}
      >
        Location
      </td>
      <td style={{ padding: "6px" }}>{job.location}</td>
    </tr>
    <tr style={{ borderBottom: "1px solid #ddd" }}>
      <td
        style={{
          padding: "6px",
          borderRight: "1px solid #ddd",
        }}
      >
        Job Type
      </td>
      <td style={{ padding: "6px" }}>{job.type}</td>
    </tr>
    <tr style={{ borderBottom: "1px solid #ddd" }}>
      <td
        style={{
          padding: "6px",
          borderRight: "1px solid #ddd",
        }}
      >
        Application Deadline
      </td>
      <td style={{ padding: "6px" }}>
        {new Date(job.applicationDeadline).toLocaleDateString()}
      </td>
    </tr>
  </tbody>
</table>
        </div>

        <div
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            lineHeight: "1.6",
          }}
        >
          <h2 style={{ fontWeight: "bold" }}>How to Apply?</h2>
          <p>
            To apply for this Off Campus Drive, interested candidates must follow the procedure outlined below:
          </p>
          <ol>
            <li>Click on the “Apply here” button provided below.</li>
            <li>You will be redirected to the official career page.</li>
            <li>Click on “Apply”.</li>
            <li>
              Submit all relevant documents, if requested (e.g. resume, mark sheet, ID proof).
            </li>
            <li>
              Fill the required details and submit the required documents on the job website, such as your resume, cover letter, etc.
            </li>
            <li>Verify that all the details entered are correct.</li>
            <li>Submit the application form after verification.</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: "32px" }}>
          <a
            href={job.jobLink || "#"}
            style={{
              padding: "12px 32px",
              color: "#d32f2f",
              fontWeight: "bold",
              textDecoration: "none",
              textAlign: "left",
              display: "inline-block",
              fontSize: "1.1rem",
              backgroundColor: "#ffebee",
              borderRadius: "4px",
              transition: "background-color 0.3s",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ffcdd2")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffebee")}
          >
            Apply Now 
          </a>
          <p
            style={{
              marginTop: "16px",
              textAlign: "left",
              fontSize: "0.875rem",
              color: "#666",
              wordBreak: "break-word",
            }}
          >
            Join Our Telegram Group :{" "}
            <a
              href="https://t.me/careervalore"
              style={{
                color: "#1976d2",
                textDecoration: "underline",
                fontWeight: "500",
              }}
            >
              Click Here To Join
            </a>
          </p>
          <p
            style={{
              marginTop: "16px",
              textAlign: "left",
              fontSize: "0.875rem",
              color: "#666",
              wordBreak: "break-word",
            }}
          >
            Join Our WhatsApp Group :{" "}
            <a
              href="https://whatsapp.com/channel/0029Vay7sUV11ulUIhLBUI44"
              style={{
                color: "#1976d2",
                textDecoration: "underline",
                fontWeight: "500",
              }}
            >
              Click Here To Join
            </a>
          </p>
          <p
            style={{
              marginTop: "16px",
              textAlign: "left",
              fontSize: "0.875rem",
              color: "#666",
              wordBreak: "break-word",
            }}
          >
            Join Our Instagram Page :{" "}
            <a
              href="https://www.instagram.com/careervalore?igsh=bjl4N2EyaW54b2dm"
              style={{
                color: "#1976d2",
                textDecoration: "underline",
                fontWeight: "500",
              }}
            >
              Click Here To Join
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsContent;