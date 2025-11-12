import React, { useState, useRef } from 'react';
import { Download, FileText, Search, Plus, UploadCloud, X } from 'lucide-react';

// initial JSON data (same shape you provided)
const initialResourceData = [
  {
    id: 1,
    fileType: 'document',
    title: 'Brand Guidelines 2025',
    description:
      'Complete brand identity guidelines including logo usage, color palette, typography, and marketing templates.',
    category: 'Templates',
    downloadUrl: '#',
  },
  {
    id: 2,
    fileType: 'document',
    title: 'Client Onboarding Form V3',
    description:
      'Official client onboarding and agreement form for new property management contracts.',
    category: 'Legal Forms',
    downloadUrl: '#',
  },
  {
    id: 3,
    fileType: 'document',
    title: 'Q1 Market Research Summary',
    description: 'Detailed summary of the Q1 real estate market trends and competitive analysis.',
    category: 'Market Research',
    downloadUrl: '#',
  },
  {
    id: 4,
    fileType: 'document',
    title: 'Advanced CRM Training Manual',
    description: 'Step-by-step manual for advanced features and automation within the CRM system.',
    category: 'Training',
    downloadUrl: '#',
  },
  {
    id: 5,
    fileType: 'document',
    title: 'Website Asset Pack',
    description: 'High-resolution images, videos, and branding elements for external website use.',
    category: 'Legal Forms',
    downloadUrl: '#',
  },
  {
    id: 6,
    fileType: 'document',
    title: 'External Listing Platform APIs',
    description: 'Technical documentation for integrating with external property listing platforms.',
    category: 'External Tools',
    downloadUrl: '#',
  },
  {
    id: 7,
    fileType: 'document',
    title: 'External Listing Platform APIs (v2)',
    description: 'Updated technical docs for external platform integration.',
    category: 'Legal Forms',
    downloadUrl: '#',
  },
];

const categories = ['All', 'Branding', 'Templates', 'Legal Forms', 'Training', 'Market Research', 'External Tools'];

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 flex flex-col hover:shadow-xl transition duration-300">
      {/* If an image exists, show first image as main thumbnail (constrained size). */}
      {resource.files && resource.files.length > 0 && resource.files.some(f => f.type === 'image') ? (
        <div className="mb-4 rounded-lg overflow-hidden">
          {/* show first image-type file */}
          {(() => {
            const img = resource.files.find(f => f.type === 'image');
            return img ? (
              <img src={img.url} alt={resource.title} className="w-full h-40 min-h-[8rem] max-h-48 object-cover" />
            ) : null;
          })()}
        </div>
      ) : (
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-xs font-medium py-1 px-3 rounded-full bg-gray-100 text-gray-700">
            {resource.fileType}
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">{resource.title}</h3>
      <p className="text-sm text-gray-600 flex-grow mb-4">{resource.description}</p>

      <div className="flex justify-between items-center mb-5 border-t pt-4">
        <p className="text-xs text-gray-500 font-medium uppercase">Category</p>
        <span className="text-sm font-medium text-gray-800">{resource.category}</span>
      </div>

      {/* Files gallery with download buttons (small) */}
      {resource.files && resource.files.length > 0 && (
        <div className="mb-3 grid grid-cols-3 gap-2">
          {resource.files.map((f, i) => (
            <div key={i} className="relative rounded-md overflow-hidden border">
              {f.type === 'image' ? (
                <img src={f.url} alt={f.name} className="w-full h-24 min-h-[6rem] max-h-36 object-cover" />
              ) : (
                <div className="w-full h-24 min-h-[6rem] max-h-36 flex items-center justify-center bg-gray-50 p-3">
                  <div className="text-center">
                    <FileText className="w-6 h-6 text-gray-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-700 truncate max-w-[8rem]">{f.name}</div>
                    <div className="text-xs text-gray-500">PDF</div>
                  </div>
                </div>
              )}

              <a
                href={f.url}
                download={f.name || resource.title}
                className="absolute bottom-2 right-2 inline-flex items-center gap-1 bg-white/90 px-2 py-1 rounded-md text-xs shadow"
                title={`Download ${f.name}`}
              >
                <Download className="w-3 h-3" />
                <span>Download</span>
              </a>
            </div>
          ))}
        </div>
      )}

      <a
        href={resource.files && resource.files.length === 1 ? resource.files[0].url : resource.downloadUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white"
        style={{ backgroundColor: '#00A597' }}
        onClick={() => console.log(`Download clicked for ${resource.title}`)}
      >
        <Download className="w-4 h-4 mr-2" />
        Download Files
      </a>
    </div>
  );
};

export default function AdminResources() {
  const [resources, setResources] = useState(initialResourceData);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Templates');
  const [newDescription, setNewDescription] = useState('');
  // changed: support multiple files, each with preview URL and type
  // shape: [{ file: File, preview: string, type: 'image'|'pdf'|'other' }]
  const [newFiles, setNewFiles] = useState([]);
  const fileInputRef = useRef(null);

  // filtering
  const filteredResources = resources.filter((resource) => {
    const categoryMatch = activeCategory === 'All' || resource.category === activeCategory;
    const search = searchTerm.toLowerCase();
    const searchMatch =
      resource.title.toLowerCase().includes(search) ||
      resource.description.toLowerCase().includes(search) ||
      resource.category.toLowerCase().includes(search);
    return categoryMatch && searchMatch;
  });

  function openModal() {
    setIsModalOpen(true);
    // reset form
    setNewTitle('');
    setNewCategory('Templates');
    setNewDescription('');
    setNewFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = null;
    // prevent background scroll
    document.body.style.overflow = 'hidden';
  }

  // closeModal revokes previews that belong to modal-only files
  function closeModal() {
    newFiles.forEach((nf) => {
      try {
        if (nf.preview) URL.revokeObjectURL(nf.preview);
      } catch (err) {
        /* ignore */
      }
    });
    setNewFiles([]);
    setIsModalOpen(false);
    document.body.style.overflow = '';
  }

  // handle multiple file selection (images + pdfs)
  function handleFileChange(e) {
    const files = e.target.files;
    if (!files) return;
    const fileArr = Array.from(files).filter((f) => f && f.size > 0);

    const withPreviews = fileArr.map((f) => {
      const lowered = (f.type || '').toLowerCase();
      const isImage = lowered.startsWith('image/');
      const isPdf = lowered === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf');
      return {
        file: f,
        preview: URL.createObjectURL(f),
        type: isImage ? 'image' : isPdf ? 'pdf' : 'other',
        name: f.name,
      };
    });

    setNewFiles((prev) => [...prev, ...withPreviews]);
  }

  // remove a selected file before submitting - revoke its preview
  function removeSelectedFile(index) {
    setNewFiles((prev) => {
      const toRemove = prev[index];
      if (toRemove && toRemove.preview) {
        try {
          URL.revokeObjectURL(toRemove.preview);
        } catch (err) {
          /* ignore */
        }
      }
      const updated = prev.filter((_, i) => i !== index);
      // clear file input to allow re-uploading same files if needed
      if (fileInputRef.current) fileInputRef.current.value = null;
      return updated;
    });
  }

  function handleAddResource(e) {
    e.preventDefault();
    // Basic validation
    if (!newTitle.trim()) {
      alert('Please provide a title.');
      return;
    }

    const newId = Math.max(0, ...resources.map((r) => r.id)) + 1;

    // Use the preview URLs as resource file URLs (we keep them; DO NOT revoke them here because they are used by ResourceCard)
    const filesMeta = newFiles.map((nf) => ({
      name: nf.name || nf.file.name,
      url: nf.preview,
      type: nf.type,
    }));

    const newResource = {
      id: newId,
      fileType: newFiles.length > 0 ? newFiles[0].file.type.split('/')[0] || 'file' : 'document',
      title: newTitle,
      description: newDescription || 'No description provided.',
      category: newCategory,
      // downloadUrl: if one file, point directly; otherwise keep placeholder
      downloadUrl: filesMeta.length === 1 ? filesMeta[0].url : '#',
      files: filesMeta,
    };

    setResources((prev) => [newResource, ...prev]);

    // After adding resource, clear modal state but DO NOT revoke the preview URLs because those are now referenced by resource.files.
    setNewFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = null;
    setIsModalOpen(false);
    document.body.style.overflow = '';
  }

  return (
    <div className="bg-gray-50 font-sans p-4 md:p-8 min-h-screen">
      <div className="">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Resources</h1>
            <p className="text-gray-600 text-sm">Access marketing materials, templates, images and PDFs</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Add Resources Button */}
            <button
              onClick={openModal}
              className="inline-flex  items-center gap-2 px-4 py-2 rounded-md text-white font-medium shadow-md focus:outline-none"
              style={{ backgroundColor: '#00A597' }}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Resources</span>
            </button>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 space-y-4 lg:space-y-0">
          <div className="relative mr-5 flex-grow lg:w-1/3">
            <input
              type="text"
              placeholder="Search Resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg text-sm focus:ring-teal-500 focus:border-teal-500 transition shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <div className="overflow-x-auto whitespace-nowrap">
            <div className="inline-flex space-x-2 p-1 bg-white border border-gray-200 rounded-xl shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSearchTerm('');
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition duration-200 ${
                    activeCategory === category ? 'bg-gray-900 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}

          {filteredResources.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-10">
              No resources found matching your filter and search criteria.
            </p>
          )}
        </main>
      </div>

      {/* Modal (Portal not required here; simple centered overlay) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
          role="dialog"
          aria-modal="true"
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeModal();
          }}
        >
          {/* backdrop */}
          <div className="fixed inset-0 bg-black/40" onClick={closeModal}></div>

          {/* modal content */}
          <div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-50">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-lg font-semibold">Add Resource</h2>
                <p className="text-sm text-gray-500">Upload images and/or PDFs (you can download them later)</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
                aria-label="Close add resource modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddResource} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md text-sm bg-gray-50"
                  placeholder="New Marketing Guidelines"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md text-sm bg-gray-50"
                >
                  {/* filter out 'All' */}
                  {categories
                    .filter((c) => c !== 'All')
                    .map((c) => (
                      <option value={c} key={c}>
                        {c}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border rounded-md text-sm bg-gray-50"
                  placeholder="Short description of resource"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attachments (images & PDFs)</label>

                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer w-full flex items-center gap-3 px-4 py-3 rounded-md border border-gray-200 bg-white hover:bg-gray-50"
                >
                  <UploadCloud className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600">Upload images and PDFs (multiple)</span>
                  <input
                    id="file-upload"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*,application/pdf"
                    multiple
                    className="sr-only"
                  />
                </label>

                {/* multiple file previews */}
                {newFiles.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {newFiles.map((nf, idx) => {
                      return (
                        <div key={idx} className="relative rounded-md overflow-hidden border">
                          {nf.type === 'image' ? (
                            <img src={nf.preview} alt={nf.name} className="w-full h-32 min-h-[6rem] max-h-36 object-cover" />
                          ) : (
                            <div className="w-full h-32 min-h-[6rem] max-h-36 flex flex-col items-center justify-center bg-gray-50 p-3">
                              <FileText className="w-6 h-6 text-gray-600 mb-2" />
                              <div className="text-xs text-gray-700 truncate max-w-[10rem]">{nf.name}</div>
                              <div className="text-xs text-gray-500">PDF</div>
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() => removeSelectedFile(idx)}
                            className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1"
                            title="Remove"
                          >
                            <X className="w-3 h-3" />
                          </button>

                          <a
                            href={nf.preview}
                            download={nf.name}
                            className="absolute bottom-1 left-1 inline-flex items-center gap-1 bg-white/90 px-2 py-1 rounded-md text-xs shadow"
                            title={`Download ${nf.name}`}
                          >
                            <Download className="w-3 h-3" />
                            <span>DL</span>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex cursor-pointer items-center gap-2 px-4 justify-center py-3 rounded-md text-white font-medium w-full"
                  style={{ backgroundColor: '#00A597' }}
                >
                  <Plus className="w-4 h-4" />
                  Add Resources
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
