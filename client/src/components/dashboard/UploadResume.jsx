import api from '../../api/axios.js'
import { UploadCloud } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

function UploadResume({ refreshResume }) {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {

    if (!file) {
      return toast.error("Please select a resume.");
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);

      const token = localStorage.getItem("token");

      await api.post(
        '/resume/upload',
        formData,
        {
          headers: {
            token,
          },
        }
      );

      toast.success("Resume uploaded successfully.");

      console.log("Refreshing resume...")

      await refreshResume();

    } catch (error) {

      console.log(error);

      toast.error("Upload failed.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="mt-10">

      <div className="border-2 border-dashed border-blue-600 rounded-3xl p-14 text-center bg-[#07182D]">

        <UploadCloud
          className="mx-auto text-blue-500"
          size={70}
        />

        <h2 className="text-white text-3xl font-bold mt-6">

          Upload your Resume

        </h2>

        <p className="text-slate-400 mt-3">

          Upload your latest resume to receive AI-powered interview questions.

        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-8 text-white"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="block mx-auto mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl text-white font-semibold"
        >

          {loading ? "Uploading..." : "Upload Resume"}

        </button>

      </div>

    </div>
  );
}

export default UploadResume;