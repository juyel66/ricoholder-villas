import React, { useState } from 'react';
import { User, UploadCloud, X, Save, Plus, ChevronDown, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// ✅ 1. Correct Import
import Locations from '@/pages/Rents/Locations'; 

// Helper function to split comma-separated strings into an array
const splitCommaSeparated = (value) => {
    if (!value) return [];
    return value.split(',').map(item => item.trim()).filter(item => item.length > 0);
};

const CreatePropertyRentals = () => {
    
    // Default mode is 'onSubmit' to only show errors after the user clicks 'Create Property'
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onSubmit', 
    });

    // 🌟 New state to manage location for the Locations component
    const [location, setLocation] = useState({
        lat: 25.79, // Miami Latitude example
        lng: -80.13, // Miami Longitude example
        address: '123 Ocean Drive, Miami',
    });

    // New state to handle MULTIPLE images for Media & Assets
    const [mediaImages, setMediaImages] = useState([
        { id: 1, url: 'https://placehold.co/120x80/2563EB/FFFFFF?text=Property', isPrimary: true }
    ]);
    
    // New state to handle MULTIPLE images for Bedrooms
    const [bedroomImages, setBedroomImages] = useState([]);

    // --- Core Submission Logic ---
    const onSubmit = (data) => {
        // --- 2. Data Preparation for API (Filtering Images and Handling CSV) ---
        
        // 1. Filter out placeholder image and extract actual file objects/data
        const uploadedMediaImages = mediaImages.filter(img => !img.url.includes('placehold')).map(({ id, url, ...rest }) => ({
            ...rest,
            // In a real app, you might send a base64 string or just a URL if already uploaded.
            // For now, we'll keep the file object reference for the console log.
            fileName: rest.file?.name || 'Image File Object' 
        }));
        
        const uploadedBedroomImages = bedroomImages.map(({ id, url, ...rest }) => ({
            ...rest,
            fileName: rest.file?.name || 'Image File Object'
        }));
        
        // 2. Process comma-separated inputs into arrays
        const processedData = {
            ...data,
            // Include location data from state
            location: location, 
            // Converting comma-separated strings to arrays for cleaner API submission
            signatureDistinctions: splitCommaSeparated(data.signatureDistinctions),
            amenitiesIndoor: splitCommaSeparated(data.amenitiesIndoor),
            amenitiesOutdoor: splitCommaSeparated(data.amenitiesOutdoor),
            policies: splitCommaSeparated(data.policies),
            
            // Add image data to the payload
            mediaImages: uploadedMediaImages,
            bedroomImages: uploadedBedroomImages,
        };
        
        console.log('✅ Final Processed Data Ready for API:', processedData);
        
        // --- 3. API Integration Comment ---
        /* --------------------------------------------------------------------------------
        এখানে আপনি আপনার API ইন্টিগ্রেশন করবেন (Here you will integrate your API).
        ... (rest of the API comment)
        -------------------------------------------------------------------------------- */
        
        alert('Form Submission Simulated. Check the console for the API-ready data!');
    };
    // -----------------------------------------------------------------

    // --- Image Handling Functions (Updated for file object storage) ---
    const handleSetPrimary = (id, setState) => {
        setState(prev => 
            prev.map(img => ({
                ...img,
                isPrimary: img.id === id,
            }))
        );
    };

    const handleImageUpload = (e, setState) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const newImages = files.map((file, index) => ({
                id: Date.now() + index + Math.random(), 
                url: URL.createObjectURL(file),
                file: file, // Store the actual file object for submission
                isPrimary: false,
            }));
            
            setState(prev => {
                // Remove placeholder if it exists (only for mediaImages)
                const currentImages = prev.filter(img => !img.url.includes('placehold'));

                // Set primary status for the first image if the array was empty
                if (currentImages.length === 0 && newImages.length > 0) {
                    newImages[0].isPrimary = true;
                }
                
                return [...currentImages, ...newImages];
            });
        }
    };

    const handleRemoveImage = (id, setState) => {
        setState(prev => {
            let updatedImages = prev.filter(img => img.id !== id);
            
            const wasPrimary = prev.find(img => img.id === id)?.isPrimary;
            if (wasPrimary && updatedImages.length > 0) {
                updatedImages[0].isPrimary = true;
            } else if (updatedImages.length === 0 && setState === setMediaImages) {
                // If all media images removed, reset to placeholder for visual
                updatedImages = [{ id: 1, url: 'https://placehold.co/120x80/2563EB/FFFFFF?text=Property', isPrimary: true }];
            }
            return updatedImages;
        });
    };

    // --- Helper Components (Styling adjusted for the provided image design) ---
    const FormCard = ({ title, children }) => (
        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8 w-full shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">{title}</h2>
            <div className="space-y-6">{children}</div>
        </div>
    );

    const RHFFormField = ({ label, name, type = 'text', placeholder, children, grid = 'col-span-12', isTextArea = false, validationRules = {} }) => (
        <div className={grid}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            
            {/* Input and Select elements are styled to match the image design (rounded, light border) */}
            {type === 'select' ? (
                <div className="relative">
                    <select
                        {...register(name, validationRules)}
                        id={name}
                        className={`w-full border rounded-lg py-2.5 px-3 bg-gray-50 text-gray-800 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 appearance-none pr-10 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        {children}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
            ) : isTextArea ? (
                <textarea
                    {...register(name, validationRules)}
                    id={name}
                    rows="3"
                    className={`w-full border rounded-lg bg-gray-50 text-gray-800 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 p-3 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder={placeholder}
                ></textarea>
            ) : (
                <input
                    {...register(name, validationRules)}
                    id={name}
                    type={type}
                    // Adjusted py-2.5 for better vertical padding to match the image
                    className={`w-full border rounded-lg bg-gray-50 text-gray-800 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 py-2.5 px-3 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder={placeholder}
                />
            )}
            
            {errors[name] && (
                <p className="mt-1 text-sm text-red-600">
                    {errors[name].message || 'This field is required'} 
                </p>
            )}
        </div>
    );


    return (
        <div className="p-6 md:p-10 bg-gray-50 min-h-screen w-full">

            {/* ✅ 2. Location component now uses the defined `location` state */}




            <Locations
  lat={location.lat}
  lng={location.lng}
  text={location.address}
  onLocationAdd={(villaData) => {
    console.log("✅ Villa Added From Map:", villaData);
    setLocation({
      lat: villaData.lat,
      lng: villaData.lng,
      address: villaData.name, // you can store name as address if you like
      description: villaData.description,
    });
  }}
/>




            
            <Link to="/dashboard/admin-properties-rentals"
                className="flex items-center text-gray-500 hover:text-gray-800 transition-colors mb-4"
                aria-label="Back to Property List"
            >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">Back</span>
            </Link>

            <div className="lg:flex space-x-10 justify-between items-center mb-10 mt-6 w-full">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800">Create New Property Listing</h1>
                    <p className="text-gray-500 mt-2">Fill out the details to create a comprehensive property listing.</p>
                </div>
                <div className="flex mt-2 items-center gap-4">
                    <button type="button" className="border border-gray-300 text-black flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition shadow-sm">
                        <User className="lg:h-5 lg:w-5" /> Preview Agent Portal
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mx-auto space-y-8">
                {/* Basic Information */}
                <FormCard title="Basic Information">
                    {/* Grid structure adjusted slightly to fit the image design */}
                    <div className="grid grid-cols-12 gap-6">
                        <RHFFormField 
                            label="Property Title" 
                            name="title" 
                            placeholder="Luxury Modern Villa with Pool" 
                            grid="col-span-12"
                            validationRules={{ required: 'Property Title is required' }} 
                        />
                        <RHFFormField 
                            label="Description" 
                            name="description" 
                            isTextArea 
                            placeholder="Describe this property..." 
                            grid="col-span-12" 
                            validationRules={{ required: 'Description is required' }} 
                        />
                        <RHFFormField 
                            label="Price" 
                            name="price" 
                            type="number" 
                            placeholder="0"
                            grid="col-span-12 md:col-span-4"
                            validationRules={{ required: 'Price is required', min: { value: 0, message: 'Price must be non-negative' } }}
                        />
                        <RHFFormField 
                            label="Property Type" 
                            name="propertyType" 
                            type="select" 
                            grid="col-span-12 md:col-span-4"
                            validationRules={{ required: 'Property Type is required' }}
                        >
                            <option value="">Select type</option>
                            <option value="villa">Villa</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="condo">Condo</option>
                        </RHFFormField>
                        <RHFFormField 
                            label="Add Guest" 
                            name="addGuest" 
                            type="number" 
                            placeholder="0"
                            grid="col-span-12 md:col-span-4"
                            validationRules={{ required: true, min: { value: 1, message: 'Must have at least 1 guest capacity.' } }}
                        />
                        <RHFFormField 
                            label="Bedrooms" 
                            name="bedrooms" 
                            type="number" 
                            placeholder="0"
                            grid="col-span-12 sm:col-span-4" 
                            validationRules={{ required: true, min: { value: 1, message: 'Min 1 bedroom.' } }}
                        />
                        <RHFFormField 
                            label="Bathrooms" 
                            name="bathrooms" 
                            type="number" 
                            placeholder="0"
                            grid="col-span-12 sm:col-span-4"
                            validationRules={{ required: true, min: { value: 1, message: 'Min 1 bathroom.' } }}
                        />
                        <RHFFormField 
                            label="Pool" 
                            name="pool" 
                            type="number" 
                            placeholder="0"
                            grid="col-span-12 sm:col-span-4"
                        />
                        <RHFFormField 
                            label="Address" 
                            name="address" 
                            placeholder="Address" 
                            grid="col-span-12 md:col-span-6" 
                            validationRules={{ required: true }}
                        />
                        <RHFFormField 
                            label="City" 
                            name="city" 
                            placeholder="City" 
                            grid="col-span-12 md:col-span-6"
                            validationRules={{ required: true }}
                        />
                    </div>
                </FormCard>

                {/* --- 🖼️ Media & Assets (Multiple Image Upload) --- */}
                <FormCard title="Media & Assets">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {/* Display existing/uploaded images */}
                        {mediaImages.map((image, index) => (
                            <div key={image.id} className="relative border border-gray-300 rounded-xl overflow-hidden h-32 group">
                                {image.isPrimary && !image.url.includes('placehold') ? (
                                    <div className="bg-teal-600 text-white w-full h-full flex flex-col items-center justify-center p-2">
                                        <span className="absolute top-2 left-2 bg-teal-800 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Primary</span>
                                        <h3 className="text-3xl font-bold mt-2">Primary</h3>
                                        <button
                                            onClick={() => handleRemoveImage(image.id, setMediaImages)}
                                            type="button"
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <img src={image.url} alt="Property Preview" className="w-full h-full object-cover"/>
                                        {image.isPrimary && (<span className="absolute top-2 left-2 bg-teal-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Primary</span>)}
                                        
                                        {!image.url.includes('placehold') && (
                                            <>
                                                <button onClick={() => handleRemoveImage(image.id, setMediaImages)} type="button" className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"><X className="w-4 h-4" /></button>
                                                {!image.isPrimary && (
                                                    <button onClick={() => handleSetPrimary(image.id, setMediaImages)} type="button" className="absolute bottom-1 right-1 bg-white text-teal-600 text-xs font-semibold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition shadow-md">Set Primary</button>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}

                        {/* Custom Upload Button Design (Image b88c8f.png matching) */}
                        <label htmlFor="mediaImageUpload" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer text-gray-500 hover:border-teal-500 hover:text-teal-600 transition h-32">
                            <UploadCloud className="w-6 h-6 mb-1" />
                            <p className="text-sm">Upload Multiple Images</p>
                            <input id="mediaImageUpload" type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleImageUpload(e, setMediaImages)}/>
                        </label>
                    </div>

                    <RHFFormField 
                        label="Calendar Link (Calendly/Google)" 
                        name="calendarLink" 
                        placeholder="https://calendly.com/..." 
                        grid="col-span-12" 
                        type='url'
                        validationRules={{ 
                            pattern: {
                                value: /^(ftp|http|https):\/\/[^ "]+$/,
                                message: 'Must be a valid URL format.'
                            }
                        }}
                    />
                </FormCard>
                
                {/* --- 🛏️ Bedrooms Images (Multiple Image Upload) --- */}
                <FormCard title="Bedrooms Images">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {bedroomImages.map((image) => (
                            <div key={image.id} className="relative border border-gray-300 rounded-xl overflow-hidden h-32 group">
                                {image.isPrimary ? (
                                    <div className="bg-teal-600 text-white w-full h-full flex flex-col items-center justify-center p-2">
                                        <span className="absolute top-2 left-2 bg-teal-800 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Primary</span>
                                        <h3 className="text-3xl font-bold mt-2">Primary</h3>
                                        <button onClick={() => handleRemoveImage(image.id, setBedroomImages)} type="button" className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"><X className="w-4 h-4" /></button>
                                    </div>
                                ) : (
                                    <>
                                        <img src={image.url} alt="Bedroom Preview" className="w-full h-full object-cover"/>
                                        <button onClick={() => handleRemoveImage(image.id, setBedroomImages)} type="button" className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"><X className="w-4 h-4" /></button>
                                        <button onClick={() => handleSetPrimary(image.id, setBedroomImages)} type="button" className="absolute bottom-1 right-1 bg-white text-teal-600 text-xs font-semibold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition shadow-md">Set Primary</button>
                                    </>
                                )}
                            </div>
                        ))}
                        
                        <label htmlFor="bedroomImageUpload" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer text-gray-500 hover:border-teal-500 hover:text-teal-600 transition h-32">
                            <UploadCloud className="w-6 h-6 mb-1" />
                            <p className="text-sm">Upload Multiple Images</p>
                            <input id="bedroomImageUpload" type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleImageUpload(e, setBedroomImages)}/>
                        </label>
                    </div>
                </FormCard>


                {/* Location Information - Single line in image */}


                <FormCard title="Location">
                    <div className="grid grid-cols-12 gap-6">
                      
                        <RHFFormField label="Latitude" name="latitude" placeholder="25.79" grid="col-span-12 md:col-span-4" validationRules={{ required: true }}/>
                        <RHFFormField label="Longitude" name="longitude" placeholder="-80.13" grid="col-span-12 md:col-span-4" validationRules={{ required: true }}/>
                        <RHFFormField label="Villa Name" name="villaName" placeholder="e.g. Paradise villa" grid="col-span-12 md:col-span-4" validationRules={{ required: true }}/>
                    </div>
                </FormCard>
                    

                    
                {/* Signature Distinctions (Comma Separated) */}
                <FormCard title="Signature Distinctions">
                    <RHFFormField 
                        label="Add Multiple Item" 
                        name="signatureDistinctions" 
                        isTextArea 
                        placeholder="Location, View, Pool Size (Use comma to separate items)" 
                        grid="col-span-12" 
                    />
                    <div className='text-sm text-gray-500'>
                        <span className="font-semibold">Example:</span> South Beach, Ocean View, 50-Foot Infinity Pool
                    </div>
                </FormCard>

                {/* Floor Details (Amenities - Comma Separated) */}
                <FormCard title="Floor Details">
                    <div className="grid grid-cols-12 gap-6">
                        <RHFFormField 
                            label="Indoor Amenities" 
                            name="amenitiesIndoor" 
                            placeholder="Bluetooth, Satellite" 
                            grid="col-span-12 md:col-span-6" 
                        />
                        <RHFFormField 
                            label="Outdoor Amenities" 
                            name="amenitiesOutdoor" 
                            placeholder="Open-Air Dining Spot" 
                            grid="col-span-12 md:col-span-6" 
                        />
                    </div>
                </FormCard>
                
                {/* Rules & Etiquette (Policies - Comma Separated) */}
                <FormCard title="Rules & Etiquette">
                    <RHFFormField 
                        label="Add Multiple Item" 
                        name="policies" 
                        isTextArea
                        placeholder="Couples - All Welcome (Use comma to separate rules)" 
                        grid="col-span-12" 
                    />
                    <div className='text-sm text-gray-500'>
                        <span className="font-semibold">Example:</span> Couples - All Welcome, No Smoking Indoors
                    </div>
                </FormCard>
                
                {/* Check-in/Out Information */}
                <FormCard title="Check-in Information">
                    <div className="grid grid-cols-12 gap-6">
                        <RHFFormField label="Check In" name="checkIn" placeholder="Check In" grid="col-span-12 md:col-span-6" validationRules={{ required: true }}/>
                        <RHFFormField label="Check Out" name="checkOut" placeholder="Check Out" grid="col-span-12 md:col-span-6" validationRules={{ required: true }}/>
                    </div>
                </FormCard>
                
                {/* Staff */}
                <FormCard title="Staff">
                    <RHFFormField 
                        label="Add Multiple Item" 
                        name="staff" 
                        isTextArea 
                        placeholder="One live-in butler..." 
                        grid="col-span-12" 
                    />
                    <div className="text-sm text-gray-500">
                        <span className="font-semibold">Example:</span> Housekeeper/6 days per week from 9am until 3pm - Summer, Winter & Festive
                    </div>
                </FormCard>

                {/* Booking Date */}
                <FormCard title="Booking Rate">
                    <div className="grid grid-cols-12 gap-6">
                        <RHFFormField label="Add Multiple Booking Rate" name="bookingRateStart" placeholder="Jan 17 - Apr 18 / Nights $512,000" grid="col-span-12" />
                    </div>
                </FormCard>
                
                {/* SEO Optimization */}
                <FormCard title="SEO Optimization">
                    <RHFFormField label="SEO Title" name="seoTitle" placeholder="Property title for search engines" grid="col-span-12" />
                    <RHFFormField label="SEO Description" name="seoDescription" isTextArea placeholder="Brief description for search results" grid="col-span-12" />
                </FormCard>

                {/* Publishing */}
                <FormCard title="Publishing">
                    <div className="grid grid-cols-12 gap-6">
                        <RHFFormField label="Status" name="status" type="select" grid="col-span-12">
                            <option value="Draft">Draft</option>
                            <option value="Pending Review">Pending Review</option>
                            <option value="Published">Published</option>
                            <option value="Archived">Archived</option>
                        </RHFFormField>
                    </div>
                </FormCard>

                {/* --- Submission Buttons (Always Enabled) --- */}
                <div className="flex flex-col gap-3 mt-6 w-full mb-10">
                    <button
                        type="submit"
                        className={`flex items-center justify-center w-full px-4 py-3 text-white rounded-lg transition shadow-md bg-teal-600 border border-teal-700 hover:bg-teal-700`}
                    >
                        <img className='mr-2 w-5 h-5' src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760999922/Icon_41_fxo3ap.png" alt="Create Property Icon" /> Create Property
                    </button>

                    <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow-sm"
                        onClick={() => console.log('Save as Draft clicked')}
                    >
                        <Save className="w-5 h-5 mr-2" /> Save as Draft
                    </button>

                    <Link
                        to="/dashboard/admin-properties-rentals"
                        className="flex items-center justify-center w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow-sm"
                    >
                        Cancel
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default CreatePropertyRentals;