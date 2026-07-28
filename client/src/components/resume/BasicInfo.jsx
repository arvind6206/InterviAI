import {
  User,
  Mail,
  Phone,
  MapPin,
  Link,
  Globe,
  Camera,
} from "lucide-react";

function InputField({
  icon,
  label,
  value,
  placeholder,
  field,
  resume,
  setResume,
  type = "text",
}) {
  return (
    <div>
      <label className="text-slate-300 text-sm mb-2 flex items-center gap-2">
        {icon}
        {label}
      </label>

      <input
        type={type}
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) =>
          setResume({
            ...resume,
            [field]: e.target.value,
          })
        }
        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition"
      />
    </div>
  );
}

function BasicInfo({ resume, setResume }) {
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Basic Information
        </h2>

        <p className="text-slate-400 mt-2">
          This information appears at the top of your resume.
        </p>
      </div>

      {/* Profile */}

      <div className="flex flex-col items-center mb-10">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
            {resume.profileImage ? (
              <img
                src={resume.profileImage}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User className="text-slate-500" size={50} />
            )}
          </div>

          <button
            className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition"
          >
            <Camera size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Inputs */}

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          icon={<User size={18} />}
          label="Full Name"
          field="name"
          value={resume.name}
          placeholder="John Doe"
          resume={resume}
          setResume={setResume}
        />

        <InputField
          icon={<Mail size={18} />}
          label="Email"
          field="email"
          type="email"
          value={resume.email}
          placeholder="john@gmail.com"
          resume={resume}
          setResume={setResume}
        />

        <InputField
          icon={<Phone size={18} />}
          label="Phone"
          field="phone"
          value={resume.phone}
          placeholder="+91 9876543210"
          resume={resume}
          setResume={setResume}
        />

        <InputField
          icon={<MapPin size={18} />}
          label="Location"
          field="location"
          value={resume.location}
          placeholder="Jharkhand, India"
          resume={resume}
          setResume={setResume}
        />

        <InputField
          icon={<Link size={18} />}
          label="LinkedIn"
          field="linkedin"
          value={resume.linkedin}
          placeholder="https://linkedin.com/in/..."
          resume={resume}
          setResume={setResume}
        />

        <InputField
          icon={<Globe size={18} />}
          label="GitHub"
          field="github"
          value={resume.github}
          placeholder="https://github.com/..."
          resume={resume}
          setResume={setResume}
        />

        <div className="md:col-span-2">
          <InputField
            icon={<Globe size={18} />}
            label="Portfolio Website"
            field="portfolio"
            value={resume.portfolio}
            placeholder="https://yourportfolio.com"
            resume={resume}
            setResume={setResume}
          />
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;