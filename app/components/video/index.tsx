const Video = ({ url }: { url: string }) => {
  return (
    <iframe src={url} width={"1200"} height={"700"} allow="autoplay"></iframe>
  );
};

export default Video;
