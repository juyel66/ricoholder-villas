const Description = () => {
  return (
    <div className="flex mt-10 gap-5 flex-col md:flex-row items-center justify-center ">
      <div className="w-full md:w-1/2  bg-white rounded-lg shadow-lg flex items-center justify-center">
        <div className="h-96 w-full flex items-center justify-center">
          <div className="h-full w-full p-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to St. James, Barbados, where within the elegant enclave of Derricks lies the majestic Seaclusion Villa. This gorgeous, colonial style, private luxury villa is situated on Barbados' platinum coast revealing spectacular panoramic sea views and private beach access to the golden sand and clear waters of Barbados' finest beach. This estate of palatial elegance and incomparable grandeur is completely staffed with world class chefs, internationally trained and professional housekeepers, butlers and the finest private security services on...
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2  flex items-center justify-center">
        <div className="h-[440px] w-full rounded-lg overflow-hidden shadow-lg">
          <img className="h-full w-full object-cover rounded-xl" src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760298884/imgggggggg_barfpz.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;