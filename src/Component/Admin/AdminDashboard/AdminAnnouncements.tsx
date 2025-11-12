// File: AdminAnnouncements.tsx
import React, { useState, useRef } from 'react';
import { Clock, Download, ChevronDown, ChevronUp, FileText, Plus, X, UploadCloud } from 'lucide-react';

// --- 1. JSON DATA ---
const updateData = [
  {
    id: 1,
    title: 'New Marketing Guidelines Released',
    date: 'October 11, 2025',
    priority: 'high',
    details:
      'We have updated our marketing guidelines to reflect the latest brand standards. Please review the attached document for detailed information on approved messaging, logo usage, and social media best practices.',
    attachments: [{ name: 'Marketing_Guidelines_2025.pdf', size: '2.3 MB', downloadUrl: '#' }],
  },
  {
    id: 2,
    title: 'Q4 Financial Report Available',
    date: 'October 15, 2025',
    priority: 'medium',
    details:
      'The official Q4 Financial Report is now available. This document contains key performance indicators, revenue analysis, and projections for the next quarter.',
    attachments: [
      { name: 'Q4_Financial_Report.pdf', size: '5.1 MB', downloadUrl: '#' },
      { name: 'Q4_Summary_Deck.pptx', size: '1.2 MB', downloadUrl: '#' },
    ],
  },
];

// --- 2. PRIORITY BADGE ---
const PriorityBadge = ({ priority }) => {
  let bgColor, textColor;
  switch (priority) {
    case 'high':
      bgColor = 'bg-red-100';
      textColor = 'text-red-700';
      break;
    case 'medium':
      bgColor = 'bg-amber-100';
      textColor = 'text-amber-700';
      break;
    default:
      bgColor = 'bg-blue-100';
      textColor = 'text-blue-700';
      break;
  }
  return (
    <span className={`text-xs font-semibold py-1 px-3 rounded-full ${bgColor} ${textColor}`}>
      {priority} priority
    </span>
  );
};

// --- 3. ATTACHMENT COMPONENT ---
const AttachmentItem = ({ attachment }) => (
  <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-teal-500 transition">
    <div className="flex items-center space-x-3">
      <FileText className="w-5 h-5 text-blue-500" />
      <div>
        <p className="text-sm font-medium text-gray-800 truncate">{attachment.name}</p>
        <p className="text-xs text-gray-500">{attachment.size}</p>
      </div>
    </div>
    <a
      href={attachment.downloadUrl}
      download={attachment.name}
      className="flex items-center text-sm font-medium text-white bg-teal-500 rounded-lg px-3 py-1.5 hover:bg-teal-600 transition"
    >
      <Download className="w-4 h-4 mr-1" /> Download
    </a>
  </div>
);

// --- 4. UPDATE CARD COMPONENT ---
const UpdateCard = ({ update }) => {
  const [isOpen, setIsOpen] = useState(false);
  const attachmentCount = update.attachments.length;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-4 transition-all overflow-hidden">
      <div
        className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760910352/Container_3_l81okq.png"
            alt=""
            className="w-8 h-8"
          />
          <span className="text-base font-medium text-gray-800">{update.title}</span>
          <PriorityBadge priority={update.priority} />
          <span
            className={`text-xs font-medium py-1 px-3 rounded-full ${
              attachmentCount > 0 ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-500'
            }`}
          >
            {attachmentCount > 0 ? `${attachmentCount} attachment(s)` : 'No attachments'}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500 hidden md:block">{update.date}</span>
          {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </div>
      </div>

      {isOpen && (
        <div className="p-5 pt-0 border-t border-gray-100">
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">{update.details}</p>
          {attachmentCount > 0 && (
            <>
              <h4 className="text-sm font-semibold text-gray-800 mb-3 border-t pt-4">Attachments</h4>
              <div className="space-y-3">
                {update.attachments.map((att, index) => (
                  <AttachmentItem key={index} attachment={att} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// --- 5. MODAL COMPONENT FOR ADDING ANNOUNCEMENT ---
const AnnouncementModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    const fileObjects = selectedFiles.map((f) => ({
      name: f.name,
      size: `${(f.size / 1024 / 1024).toFixed(2)} MB`,
      downloadUrl: URL.createObjectURL(f),
    }));
    setFiles((prev) => [...prev, ...fileObjects]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      id: Date.now(),
      title,
      priority,
      date,
      details,
      attachments: files,
    };
    onAdd(newAnnouncement);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Announcement</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:ring-2 focus:ring-teal-500"
              placeholder="Enter announcement title"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
              />
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={4}
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
              placeholder="Enter announcement details"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Attachments</label>
            <label
              htmlFor="file-upload"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
            >
              <UploadCloud className="w-5 h-5 text-gray-500" />
              Upload Files
            </label>
            <input
              id="file-upload"
              type="file"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* File preview list */}
            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex justify-between text-sm text-gray-700 border-b pb-1">
                    <span>{f.name}</span>
                    <a
                      href={f.downloadUrl}
                      download={f.name}
                      className="text-teal-600 hover:underline text-xs"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md text-sm font-semibold"
          >
            Add Announcement
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 6. MAIN COMPONENT ---
const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState(updateData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAnnouncement = (newAnnouncement) => {
    setAnnouncements((prev) => [newAnnouncement, ...prev]);
    // 🔹 Later: Dispatch Redux action to save to backend
    // dispatch(createAnnouncement(newAnnouncement))
  };

  return (
    <div className="bg-gray-50 font-sans p-4 md:p-8 min-h-screen">
      <div className="">
        <div className="flex justify-between mb-8">
          <header>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Announcements</h1>
            <p className="text-gray-600 text-sm">
              Stay informed with the latest company updates and news
            </p>
          </header>
          

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow"
          >
            <Plus className="w-4 h-4" /> Add Announcement
          </button>
        </div>

        <main>
          {announcements.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </main>

        {isModalOpen && (
          <AnnouncementModal
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddAnnouncement}
          />
        )}
      </div>
    </div>
  );
};

export default AdminAnnouncements;
