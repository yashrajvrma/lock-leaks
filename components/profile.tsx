// // @ts-nocheck
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuthStore } from "@/store/auth-store";

// const ProfileData = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { getToken } = useAuthStore();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const accessToken = getToken();

//         if (!accessToken) {
//           throw new Error("No access token available");
//         }

//         const response = await axios.get(
//           "http://localhost:8000/v1/api/user/profile",
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data.success) {
//           setUserData(response.data.data);
//         }
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError("Failed to fetch user data");

//         // fallback mock
//         const mockData = {
//           userData: {
//             email: "hitler@example.com",
//             platform: {
//               platform: "openai",
//               username: "hitler_dev",
//             },
//             contactWhatsappNumber: "9876543210",
//           },
//           price: {
//             name: "FREE",
//             billed: "MONTHLY",
//           },
//         };
//         setUserData(mockData);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
//         <div>Loading...</div>
//       </div>
//     );
//   }

//   if (error && !userData) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-danger">
//         <div>Error: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-vh-100 bg-dark text-white p-5">
//       <div className="container">
//         {userData && (
//           <div className="row g-4">
//             {/* Email */}
//             <div className="col-md-6">
//               <label className="form-label fw-medium fs-5">Email Address</label>
//               <input
//                 type="email"
//                 value={userData.userData.email}
//                 readOnly
//                 className="form-control bg-secondary text-white border-0"
//               />
//             </div>

//             {/* Platform */}
//             <div className="col-md-6">
//               <label className="form-label fw-medium fs-5">
//                 Platform Details
//               </label>
//               <div className="position-relative">
//                 <input
//                   type="text"
//                   value={`${userData.userData.platform.platform} - @${userData.userData.platform.username}`}
//                   readOnly
//                   className="form-control bg-secondary text-white border-0 pe-5"
//                 />
//                 <button className="btn btn-sm btn-link position-absolute top-50 end-0 translate-middle-y text-info">
//                   Link
//                 </button>
//                 <button className="btn btn-sm btn-pink position-absolute top-50 end-50 translate-middle-y me-2">
//                   Save
//                 </button>
//               </div>
//             </div>

//             {/* WhatsApp */}
//             <div className="col-md-6">
//               <label className="form-label fw-medium fs-5">
//                 Contact WhatsApp
//               </label>
//               <input
//                 type="text"
//                 value={userData.userData.contactWhatsappNumber}
//                 readOnly
//                 className="form-control bg-secondary text-white border-0"
//               />
//             </div>

//             {/* Plan */}
//             <div className="col-md-6">
//               <label className="form-label fw-medium fs-5">Current Plan</label>
//               <div className="position-relative">
//                 <input
//                   type="text"
//                   value={`${userData.userData.price.name} - ${userData.userData.price.billed}`}
//                   readOnly
//                   className="form-control bg-secondary text-white border-0 pe-5"
//                 />
//                 <button className="btn btn-sm btn-link position-absolute top-50 end-0 translate-middle-y text-info">
//                   Link
//                 </button>
//                 <button className="btn btn-sm btn-pink position-absolute top-50 end-50 translate-middle-y me-2">
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfileData;

// @ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthStore } from "@/store/auth-store";

const ProfileData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { getToken } = useAuthStore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const accessToken = getToken();

        if (!accessToken) {
          throw new Error("No access token available");
        }

        const response = await axios.get(
          "http://localhost:8000/v1/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          setUserData(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data");

        // fallback mock
        const mockData = {
          userData: {
            email: "user@example.com",
            platform: {
              platform: "openai",
              username: "user_dev",
            },
            contactWhatsappNumber: "9876543210",
          },
          price: {
            name: "FREE",
            billed: "MONTHLY",
          },
        };
        setUserData(mockData);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#0f0b15" }}
      >
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error && !userData) {
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#0f0b15" }}
      >
        <div className="text-danger">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 p-5">
      <div className="container">
        {userData && (
          <div className="row g-4">
            {/* Email */}
            <div className="col-md-6">
              <label
                className="form-label text-white fw-medium fs-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Email Address
              </label>
              <div className="position-relative">
                <input
                  type="email"
                  value={userData.userData.email}
                  readOnly
                  className="form-control text-white border-0"
                  style={{
                    backgroundColor: "#24212a",
                    borderRadius: "8px",
                    padding: "12px 80px 12px 16px",
                    fontFamily: '"Inter", sans-serif',
                  }}
                />
                <button className="btn btn-sm btn-login position-absolute top-50 end-0 translate-middle-y me-2">
                  Link
                </button>
              </div>
            </div>

            {/* Platform */}

            {/* Additional fields matching original data */}
            <div className="col-md-6">
              <label
                className="form-label text-white fw-medium fs-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Platform Details
              </label>
              <div className="position-relative">
                <input
                  type="text"
                  value={`${userData.userData.platform.platform} - @${userData.userData.platform.username}`}
                  readOnly
                  className="form-control text-white border-0"
                  style={{
                    backgroundColor: "#24212a",
                    borderRadius: "8px",
                    padding: "12px 80px 12px 16px",
                    fontFamily: '"Inter", sans-serif',
                  }}
                />
                <button className="btn btn-sm btn-login position-absolute top-50 end-0 translate-middle-y me-2">
                  Link
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <label
                className="form-label text-white fw-medium fs-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Contact WhatsApp
              </label>
              <div className="position-relative">
                <input
                  type="text"
                  value={userData.userData.platform.contactWhatsappNumber}
                  readOnly
                  className="form-control text-white border-0"
                  style={{
                    backgroundColor: "#24212a",
                    borderRadius: "8px",
                    padding: "12px 80px 12px 16px",
                    fontFamily: '"Inter", sans-serif',
                  }}
                />
                <button className="btn btn-sm btn-start position-absolute top-50 end-0 translate-middle-y me-2">
                  Save
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <label
                className="form-label text-white fw-medium fs-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Current Plan
              </label>
              <div className="position-relative">
                <input
                  type="text"
                  value={`${userData.userData.price.name} - ${userData.userData.price.billed}`}
                  readOnly
                  className="form-control text-white border-0"
                  style={{
                    backgroundColor: "#24212a",
                    borderRadius: "8px",
                    padding: "12px 80px 12px 16px",
                    fontFamily: '"Inter", sans-serif',
                  }}
                />
                <button className="btn btn-sm btn-login position-absolute top-50 end-0 translate-middle-y me-2">
                  Link
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileData;
