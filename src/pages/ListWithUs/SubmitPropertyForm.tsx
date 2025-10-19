import React, { useState, DragEvent } from 'react';

import { useForm } from 'react-hook-form'; 
import Swal from 'sweetalert2';


// 2. Define the shape of your form data for React Hook Form
// This interface now covers all text/checkbox inputs that RHF will manage.
interface Inputs {
  name: string;
  email: string;
  phone: string;
  propertyName: string;
  policies: string;
  confirmAccuracy: boolean;
}

const SubmitPropertyForm: React.FC = () => {
  // 3. Destructure RHF methods from useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({

    
    // You can set default values here if needed
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      propertyName: '',
      policies: '',
      confirmAccuracy: false,
    },
  });


  const [files, setFiles] = useState({
    photos: null as File | null,
    document: null as File | null,
  });


  const [isPhotoDragActive, setIsPhotoDragActive] = useState(false);
  const [isDocumentDragActive, setIsDocumentDragActive] = useState(false);


  const onSubmit: SubmitHandler<Inputs> = (data) => {

    const submissionData = {
      ...data,
      uploadedPhoto: files.photos 
        ? { name: files.photos.name, size: files.photos.size, type: files.photos.type } 
        : 'No photo uploaded',
      uploadedDocument: files.document 
        ? { name: files.document.name, size: files.document.size, type: files.document.type } 
        : 'No document uploaded',
    };

    console.log("--- Form Submission Data (React Hook Form) ---");
    console.log(submissionData);
       Swal.fire({
    title: "Submit your Property",
    icon: "success",
    draggable: true
  });

  };




  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selectedFiles } = e.target;

    if (name === 'uploadPhotos' && selectedFiles && selectedFiles.length > 0) {
      setFiles(prev => ({ ...prev, photos: selectedFiles[0] }));
    } else if (name === 'uploadDocument' && selectedFiles && selectedFiles.length > 0) {
      setFiles(prev => ({ ...prev, document: selectedFiles[0] }));
    }
  };

  const processDroppedFiles = (droppedFiles: FileList | null, targetName: 'uploadPhotos' | 'uploadDocument') => {
    if (!droppedFiles || droppedFiles.length === 0) return;

    if (targetName === 'uploadPhotos') {
      const imageFile = Array.from(droppedFiles).find(file => file.type.startsWith('image/'));
      if (imageFile) {
        setFiles(prev => ({ ...prev, photos: imageFile }));
      }
    } else if (targetName === 'uploadDocument') {
      const acceptedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const documentFile = Array.from(droppedFiles).find(file => acceptedTypes.includes(file.type));
      if (documentFile) {
        setFiles(prev => ({ ...prev, document: documentFile }));
      }
    }
  };

  const handleDrag = (e: DragEvent, setActive: (active: boolean) => void) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(true);
  };

  const handleDragLeave = (e: DragEvent, setActive: (active: boolean) => void) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);
  };

  const handleDrop = (e: DragEvent, targetName: 'uploadPhotos' | 'uploadDocument', setActive: (active: boolean) => void) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);
    const droppedFiles = e.dataTransfer.files;
    processDroppedFiles(droppedFiles, targetName);
  };

  const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.884-7.986 5 5 0 019.768 0A4 4 0 0117 16H7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m-4-4l4 4m4-4l-4-4" />
    </svg>
  );





  return (
    <div className="max-w-4xl mx-auto mt-14 p-8 bg-white shadow-2xl rounded-xl">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Submit Your Property</h2>
        <p className="text-gray-500 mt-2">Kindly fill out the below form and a member of our team will review and be in touch accordingly.</p>
      </header>

      
      <form onSubmit={handleSubmit(onSubmit)} > 

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
    
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              placeholder="e.g. Juyel"
              className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
    
            />
        
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              id="email"
              placeholder="e.g. ashik@example.com"
              className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
             {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              {...register("phone", { 
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone must be at least 10 digits"
                }
              })}
              type="tel"
              id="phone"
              placeholder="e.g. 123456789"
              className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="propertyName" className="text-sm font-medium text-gray-700 mb-1">Property Name</label>
            <input
              {...register("propertyName", { required: "Property Name is required" })}
              type="text"
              id="propertyName"
              placeholder="e.g. Seaclusion"
              className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            {errors.propertyName && <span className="text-red-500 text-xs mt-1">{errors.propertyName.message}</span>}
          </div>
        </div>

        {/* --- File Uploads (File state management is not changed) --- */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 block mb-1">Upload Single Photo</label>
          <label
            htmlFor="uploadPhotos"
            className={`flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg bg-gray-50 transition duration-150 cursor-pointer
                         ${isPhotoDragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:bg-gray-100'}`}
            onDragOver={(e) => handleDrag(e, setIsPhotoDragActive)}
            onDragLeave={(e) => handleDragLeave(e, setIsPhotoDragActive)}
            onDrop={(e) => handleDrop(e, 'uploadPhotos', setIsPhotoDragActive)}
          >
            <img className='' src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760832355/Component_17_ejh4v8.png" alt="" />
            <p className="text-sm text-gray-500 mt-2">Drop files here or click to upload</p>
            {files.photos &&
              <p className="text-xs text-teal-600 mt-1">Selected: {files.photos.name}</p>
            }
            <input
              type="file"
              id="uploadPhotos"
              name="uploadPhotos" // IMPORTANT: The name here must match the string in handleFileChange
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 block mb-1">Upload Document</label>
          <label
            htmlFor="uploadDocument"
            className={`flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg bg-gray-50 transition duration-150 cursor-pointer
                         ${isDocumentDragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:bg-gray-100'}`}
            onDragOver={(e) => handleDrag(e, setIsDocumentDragActive)}
            onDragLeave={(e) => handleDragLeave(e, setIsDocumentDragActive)}
            onDrop={(e) => handleDrop(e, 'uploadDocument', setIsDocumentDragActive)}
          >
            <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760832355/Component_17_ejh4v8.png" alt="" />
            <p className="text-sm text-gray-500 mt-2">Drop files here or click to upload</p>
            {files.document &&
              <p className="text-xs text-teal-600 mt-1">{files.document.name}</p>
            }
            <input
              type="file"
              id="uploadDocument"
              name="uploadDocument" // IMPORTANT: The name here must match the string in handleFileChange
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
          </label>
        </div>
        {/* --- End of File Uploads --- */}


        {/* Policies Textarea */}
        <div className="mb-6">
          <label htmlFor="policies" className="text-sm font-medium text-gray-700 block mb-1">Policies (brief)</label>
          <textarea
            {...register("policies", { required: "Policies information is required" })}
            id="policies"
            rows={4}
            placeholder="Write your message..."
            className="p-3 border border-gray-300 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
          ></textarea>
          {errors.policies && <span className="text-red-500 text-xs mt-1">{errors.policies.message}</span>}
        </div>

        {/* Checkbox and Submit Button */}
        <div className="flex flex-col space-y-4">

          <label className="flex items-center text-sm font-medium text-gray-700 cursor-pointer">
            <input
              {...register("confirmAccuracy", { required: "You must confirm accuracy" })}
              type="checkbox"
              className="form-checkbox h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            />
            <span className="ml-2">I confirm the information is accurate.</span>
          </label>
          {errors.confirmAccuracy && <span className="text-red-500 text-xs mt-1">{errors.confirmAccuracy.message}</span>}

          <button


  onClick={handleSubmit}
            type="submit"
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 transform -rotate-90" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M15 10a1 1 0 01-1 1H6a1 1 0 110-2h8a1 1 0 011 1z" clipRule="evenodd" />
            </svg>
            Submit Property
          </button>
        </div>

      </form>
    </div>
  );
};

export default SubmitPropertyForm;