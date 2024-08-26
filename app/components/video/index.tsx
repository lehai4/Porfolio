const Video = ({ url }: { url: string }) => {
  return (
    <iframe
      src={url}
      width="100%"
      height="100%"
      allow="autoplay"
      className="w-full h-full sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[500px] lg:w-[1200px] lg:h-[700px]"
    ></iframe>
  );
};

export default Video;
