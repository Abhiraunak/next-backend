import axios from "axios";
import { Appbar } from "./components/Appbar";

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }

}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <>
      <Appbar />
      <div className="flex flex-col justify-center h-screen bg-zinc-700">
        <div className="max-w-screen-xl mx-auto ">
          <div className="px-10 py-4 rounded-full bg-zinc-400 text-zinc-600">
            {/* {userData.email} */}
          </div>
          <div className="mt-10 px-20 py-4 rounded-full bg-zinc-400 text-zinc-600">
            {/* {userData.email} */}
          </div>
        </div>
      </div>
    </>
  );
}
