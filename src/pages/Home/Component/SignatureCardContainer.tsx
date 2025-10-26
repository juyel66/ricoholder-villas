
import { villaData } from "@/FakeJson"; // Assuming this path for your fake data
import SignatureCard from "./SignatureCard";


const SignatureCardContainer = () => {
    // Get the data from the imported JSON
    const signatureCardData = villaData;
    
    // Log the data for debugging (as you requested)
    // console.log(signatureCardData); 

    return (
        <div itemID="signatureVilla" className="py-12 p-2 ">
            <div className="">
                
                {/* Section Title (Optional, but good practice) */}
                <h2 className="lg:text-5xl text-2xl  font-extrabold text-gray-900 text-center mb-10">
                    Our <span className="text-[#009689] italic ">Signature</span> Villa 
                </h2>

                {/* Grid Layout for the Cards */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    
                    {/* Map Functionality */}
                    {signatureCardData.map((villa) => (
                        <SignatureCard 
                            key={villa.id} // Essential for list performance in React
                            villa={villa} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SignatureCardContainer;