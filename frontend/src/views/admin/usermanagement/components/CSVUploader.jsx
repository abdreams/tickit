import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CSVUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    } else {
      alert("No file selected!");
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-csv", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <div className="flex  h-6  justify-between">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="file:bg-violet-50 
      file:text-violet-700 hover:file:bg-violet-100
      w-24 file:rounded-full
      file:border-0 file:text-sm
      file:font-semibold"
      />
      <button
        onClick={handleSubmit}
        className="flex w-full items-center rounded-md bg-blue-600  py-2 text-white md:w-auto"
      >
        <AiOutlinePlus className="mr-1" />
        <span>Add Bulk User</span>
      </button>
    </div>
  );
};

export default CSVUploader;
