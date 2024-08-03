import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./header/index"), { ssr: false });

export default function NoSSRHeader() {
  return <NoSSR />;
}
