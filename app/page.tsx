import fetchDB from "@/lib/db/fetchDB";
import { Users } from "@/lib/db/models";
import { connectDB, disconnectDB } from "@/lib/db/mongoose";
import { unstable_cache as cache, revalidateTag } from "next/cache";
import Image from "next/image";

export default async function Home() {
  const getData = cache(
    async () =>
      await fetchDB(() => Users.findById("65dc92abb0c58078ba3a4010").exec()),
    ["fetch-users"],
    { tags: ["users"] }
  );
  
  const handleSubmit = async (formData: FormData) => {
    "use server";

    try {
      await fetchDB(
        async () =>
          await Users.updateOne(
            { _id: "65dc92abb0c58078ba3a4010" },
            {
              $set: {
                firstName: formData.get("firstname"),
              },
            }
          )
      );
      revalidateTag('users')
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {JSON.stringify(await getData().then((data) => data.firstName))}
      <form action={handleSubmit}>
        <input type="text" name="firstname" />
        <input type="submit" />
      </form>
    </div>
  );
}
