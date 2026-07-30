import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/authService";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile(1); // Replace 1 with logged-in user ID later
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateProfile(1, profile);
      alert("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Student Profile
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">Department</label>
          <input
            type="text"
            name="department"
            value={profile.department}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          onClick={handleUpdate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;