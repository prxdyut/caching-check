import { connectDB, disconnectDB } from "./mongoose";

export default async (callback: any) => {
  await connectDB();
  const data = await callback();
  await disconnectDB();
  return data
};
