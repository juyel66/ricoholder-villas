import React, { useState } from 'react';
import { User, UploadCloud, X, Save, ChevronDown, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LocationCreateProperty from './LocationCreateProperty';

// Helper function to split comma-separated strings into an array
const splitCommaSeparated = (value) => {
    if (!value) return [];
    return value.split(',').map(item => item.trim()).filter(item => item.length > 0);
};

const CreatePropertyRentals = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit', 
    });

    // Location state
    const [location, setLocation] = useState({
        lat: 25.79,
        lng: -80.13,
        address: '123 Ocean Drive, Miami',
    });

    // Media images state (no primary concept)
    const [media_images, setMediaImages] = useState([]);

    // Bedroom images state (no primary concept)
    const [bedrooms_images, setBedroomImages] = useState([]);

    // --- Image Upload Handler ---
    const handleImageUpload = (e, setState) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const newImages = files.map((file, index) => ({
            id: Date.now() + index + Math.random(),
            url: URL.createObjectURL(file),
            file: file,
        }));

        setState(prev => [...prev, ...newImages]);
    };

    // --- Remove Image ---
    const handleRemoveImage = (id, setState) => {
        setState(prev => prev.filter(img => img.id !== id));
    };

    // --- Core Submission Logic ---
    const onSubmit = (data) => {
        const processedData = {
            ...data,
            location: location,
            signature_distinctions: splitCommaSeparated(data.signature_distinctions),
            interior_amenities: splitCommaSeparated(data.interior_amenities),
            outdoor_amenities: splitCommaSeparated(data.outdoor_amenities),
            rules_and_etiquette: splitCommaSeparated(data.rules_and_etiquette),
            staff_name: splitCommaSeparated(data.staff_name),
        staff_details: splitCommaSeparated(data.staff_details),
        
            media_images: media_images.map(img => ({
                url: img.url,
                file: img.file,
            })),
            bedrooms_images: bedrooms_images.map(img => ({
                url: img.url,
                file: img.file,
            })),
        };

        console.log('Final Processed Data Ready for API:', processedData);
        alert('Form Submission Simulated. Check the console for the API-ready data!');
    };

    // --- Helper Components ---
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
            <Link
                to="/dashboard/admin-properties-rentals"
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

            {/* Location Map */}
            <div className='mb-5'>
                <LocationCreateProperty 
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                    onLocationAdd={(villaData) => {
                        setLocation({
                            lat: villaData.lat,
                            lng: villaData.lng,
                            address: villaData.name,
                            description: villaData.description,
                        });
                    }}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mx-auto space-y-8">
                {/* Basic Information */}
                <FormCard title="Basic Information">
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
                            name="property_type" 
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
                            name="add_guest" 
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

                {/* Media & Assets */}
                <FormCard title="Media & Assets">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {media_images.map((image) => (
                            <div key={image.id} className="relative border border-gray-300 rounded-xl overflow-hidden h-32 group">
                                <img src={image.url} alt="Property Preview" className="w-full h-full object-cover"/>
                                <button
                                    onClick={() => handleRemoveImage(image.id, setMediaImages)}
                                    type="button"
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ))}

                        <label htmlFor="mediaImageUpload" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer text-gray-500 hover:border-teal-500 hover:text-teal-600 transition h-32">
                            <UploadCloud className="w-6 h-6 mb-1" />
                            <p className="text-sm">Upload Multiple Images</p>
                            <input
                                id="mediaImageUpload"
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => handleImageUpload(e, setMediaImages)}
                            />
                        </label>
                    </div>

                    <RHFFormField 
                        label="Calendar Link (Calendly/Google)" 
                        name="calendar_link" 
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

                {/* Bedrooms Images */}
                <FormCard title="Bedrooms Images">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {bedrooms_images.map((image) => (
                            <div key={image.id} className="relative border border-gray-300 rounded-xl overflow-hidden h-32 group">
                                <img src={image.url} alt="Bedroom Preview" className="w-full h-full object-cover"/>
                                <button
                                    onClick={() => handleRemoveImage(image.id, setBedroomImages)}
                                    type="button"
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ))}

                        <label htmlFor="bedroomImageUpload" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer text-gray-500 hover:border-teal-500 hover:text-teal-600 transition h-32">
                            <UploadCloud className="w-6 h-6 mb-1" />
                            <p className="text-sm">Upload Multiple Images</p>
                            <input
                                id="bedroomImageUpload"
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => handleImageUpload(e, setBedroomImages)}
                            />
                        </label>
                    </div>
                </FormCard>

                {/* Signature Distinctions */}
                <FormCard title="Signature Distinctions">
                    <RHFFormField 
                        label="Add Multiple Item" 
                        name="signature_distinctions" 
                        isTextArea 
                        placeholder="Location, View, Pool Size (Use comma to separate items)" 
                        grid="col-span-12" 
                    />
                    <div className='text-sm text-gray-500'>
                        <span className="font-semibold">Example:</span> South Beach, Ocean View, 50-Foot Infinity Pool
                    </div>
                </FormCard>

                {/* Floor Details */}
                <FormCard title="Floor Details">
                    <div className="grid grid-cols-12 gap-6">
                        <RHFFormField 
                            label="Indoor Amenities" 
                            name="interior_amenities" 
                            placeholder="Bluetooth, Satellite" 
                            grid="col-span-12 md:col-span-6" 
                        />
                        <RHFFormField 
                            label="Outdoor Amenities" 
                            name="outdoor_amenities" 
                            placeholder="Open-Air Dining Spot" 
                            grid="col-span-12 md:col-span-6" 
                        />
                    </div>
                </FormCard>

                {/* Rules & Etiquette */}
                <FormCard title="Rules & Etiquette">
                    <RHFFormField 
                        label="Add Multiple Item" 
                        name="rules_and_etiquette" 
                        isTextArea
                        placeholder="Couples - All Welcome (Use comma to separate rules)" 
                        grid="col-span-12" 
                    />
                    <div className='text-sm text-gray-500'>
                        <span className="font-semibold">Example:</span> Couples - All Welcome, No Smoking Indoors
                    </div>
                </FormCard>

                {/* Check-in Information */}
                <FormCard title="Check-in Information">
                    <div className="grid grid-cols-12 gap-6">
                        <RHFFormField label="Check In" name="check_in" placeholder="Check In" grid="col-span-12 md:col-span-6" validationRules={{ required: true }}/>
                        <RHFFormField label="Check Out" name="check_out" placeholder="Check Out" grid="col-span-12 md:col-span-6" validationRules={{ required: true }}/>
                    </div>
                </FormCard>



   {/* Staff */}
<FormCard title="Staff">
    <div className="grid grid-cols-12 gap-6">
        <RHFFormField 
            label="Staff Name (comma-separated)" 
            name="staff_name" 
            placeholder="John Doe, Maria Smith" 
            grid="col-span-12 md:col-span-6" 
            validationRules={{ required: 'Staff name is required' }}
        />
        <RHFFormField 
            label="Staff Details (comma-separated)" 
            name="staff_details" 
            placeholder="Housekeeper/6 days per week, 9am-3pm" 
            grid="col-span-12 md:col-span-6" 
            validationRules={{ required: 'Staff details are required' }}
        />
    </div>
    <div className="text-sm text-gray-500 mt-2">
        <span className="font-semibold">Example:</span> John Doe, Maria Smith | Housekeeper/6 days per week, Butler/Full-time
    </div>
</FormCard>



                {/* Booking Rate */}
                <FormCard title="Booking Rate">
                    <div className="grid grid-cols-12 gap-6">
                        <RHFFormField label="Add Multiple Booking Rate" name="booking_rate_start" placeholder="Jan 17 - Apr 18 / Nights $512,000" grid="col-span-12" />
                    </div>
                </FormCard>

                {/* SEO Optimization */}
                <FormCard title="SEO Optimization">
                    <RHFFormField label="SEO Title" name="seo_title" placeholder="Property title for search engines" grid="col-span-12" />
                    <RHFFormField label="SEO Description" name="seo_description" isTextArea placeholder="Brief description for search results" grid="col-span-12" />
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

                {/* Submission Buttons */}
                <div className="flex flex-col gap-3 mt-6 w-full mb-10">
                    <button
                        type="submit"
                        className="flex items-center justify-center w-full px-4 py-3 text-white rounded-lg transition shadow-md bg-teal-600 border border-teal-700 hover:bg-teal-700"
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