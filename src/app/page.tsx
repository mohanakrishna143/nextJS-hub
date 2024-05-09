import Image from "next/image";
import SignIn from "./signIn";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh", // Ensure the content takes up the full viewport height
    }}>
        <SignIn />
    </div>
  );
}
