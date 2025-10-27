

const VideoExperience = () => {
    return (
       <div>
        <div className="text-4xl font-semibold text-gray-900 mb-8 mt-15 items-center">The Video Experience</div>
         <div className="mt-10">
           <div className="lg:flex hidden">
           <iframe width="860" height="515" src="https://www.youtube.com/embed/1dxrO79dbCg?si=i6rNvszkd1ffSQQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </div>

           <div className="flex lg:hidden">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1dxrO79dbCg?si=i6rNvszkd1ffSQQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </div>

            
        </div>
       </div>
    );
};

export default VideoExperience;