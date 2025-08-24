import React, { useEffect, useState } from "react";
import { useProfile } from "./context/ProfileContext";
import axios from "axios";

interface Props {
  onClose: () => void;
}

const ProfileUpdateModal: React.FC<Props> = ({ onClose }) => {
  const { profile, loading } = useProfile();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    bio: "",
    profileImage: "",
    skills: [] as { skillName: string; level: string }[],
    experiences: [] as {
      role: string;
      company: string;
      location: string;
      dateRange: string;
    }[],
    interests: [] as string[],
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        institution: profile.institution || "",
        bio: profile.bio || "",
        profileImage: profile.profileImage || "",
        skills:
          profile.skills?.map((s) => ({
            skillName: s.skillName,
            level: s.level,
          })) || [],
        experiences:
          profile.experiences?.map((e) => ({
            role: e.role,
            company: e.company,
            location: e.location,
            dateRange: e.dateRange,
          })) || [],
        interests: profile.interests || [],
      });
    }
  }, [profile]);

  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    // preview locally
    setPreview(URL.createObjectURL(file));
    setSelectedFile(file);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Skills
  const handleSkillChange = (index: number, field: string, value: string) => {
    const updated = [...formData.skills];
    updated[index][field as "skillName" | "level"] = value;
    setFormData({ ...formData, skills: updated });
  };
  const addSkill = () =>
    setFormData({
      ...formData,
      skills: [...formData.skills, { skillName: "", level: "" }],
    });

  // Experiences
  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...formData.experiences];
    updated[index][field as "role" | "company" | "location" | "dateRange"] =
      value;
    setFormData({ ...formData, experiences: updated });
  };
  const addExperience = () =>
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { role: "", company: "", location: "", dateRange: "" },
      ],
    });

  // Interests
  const handleInterestChange = (index: number, value: string) => {
    const updated = [...formData.interests];
    updated[index] = value;
    setFormData({ ...formData, interests: updated });
  };
  const addInterest = () =>
    setFormData({ ...formData, interests: [...formData.interests, ""] });

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const data = new FormData();
      data.append("name", formData.name);
      data.append("institution", formData.institution);
      data.append("bio", formData.bio);

      // If image selected, append the File instead of string
      if (selectedPhoto) {
        data.append("profileImage", selectedPhoto);
      }

      // Convert objects/arrays to JSON string
      data.append("skills", JSON.stringify(formData.skills));
      data.append("experiences", JSON.stringify(formData.experiences));
      data.append("interests", JSON.stringify(formData.interests));

      await axios.put(`${process.env.REACT_APP_API_URL}/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile updated successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  if (loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl max-h-screen overflow-auto p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-4">Update Profile</h2>

        {/* Personal Info */}
        <label className="block mb-2 text-gray-700">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <label className="block mb-2 text-gray-700">Institution</label>
        <input
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <label className="block mb-2 text-gray-700">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <label className="block mb-2 text-gray-700">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="w-full mb-2"
        />

        {/* Use preview for temporary display */}
        {preview && (
          <img
            src={preview}
            alt="Profile Preview"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
        )}

        {/* After upload, show Cloudinary image */}
        {formData.profileImage && !uploading && (
          <img
            src={formData.profileImage}
            alt="Uploaded Profile"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
        )}

        {/* Skills */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Skills</h3>
          {formData.skills.map((skill, i) => (
            <div key={i} className="flex gap-2 mb-2 flex-col sm:flex-row">
              <input
                placeholder="Skill Name"
                value={skill.skillName}
                onChange={(e) =>
                  handleSkillChange(i, "skillName", e.target.value)
                }
                className="border px-2 py-1 rounded flex-1"
              />
              <input
                placeholder="Level"
                value={skill.level}
                onChange={(e) => handleSkillChange(i, "level", e.target.value)}
                className="border px-2 py-1 rounded w-full sm:w-32"
              />
            </div>
          ))}
          <button
            onClick={addSkill}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            + Add Skill
          </button>
        </div>

        {/* Experiences */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Experiences</h3>
          {formData.experiences.map((exp, i) => (
            <div key={i} className="flex gap-2 mb-2 flex-wrap sm:flex-nowrap">
              <input
                placeholder="Role"
                value={exp.role}
                onChange={(e) =>
                  handleExperienceChange(i, "role", e.target.value)
                }
                className="border px-2 py-1 rounded w-full sm:w-36"
              />
              <input
                placeholder="Company"
                value={exp.company}
                onChange={(e) =>
                  handleExperienceChange(i, "company", e.target.value)
                }
                className="border px-2 py-1 rounded w-full sm:w-36"
              />
              <input
                placeholder="Location"
                value={exp.location}
                onChange={(e) =>
                  handleExperienceChange(i, "location", e.target.value)
                }
                className="border px-2 py-1 rounded w-full sm:w-36"
              />
              <input
                placeholder="Date Range"
                value={exp.dateRange}
                onChange={(e) =>
                  handleExperienceChange(i, "dateRange", e.target.value)
                }
                className="border px-2 py-1 rounded w-full sm:w-36"
              />
            </div>
          ))}
          <button
            onClick={addExperience}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            + Add Experience
          </button>
        </div>

        {/* Interests */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Interests</h3>
          {formData.interests.map((interest, i) => (
            <input
              key={i}
              value={interest}
              placeholder="Interest"
              onChange={(e) => handleInterestChange(i, e.target.value)}
              className="border px-2 py-1 rounded mb-2 w-full"
            />
          ))}
          <button
            onClick={addInterest}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            + Add Interest
          </button>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
