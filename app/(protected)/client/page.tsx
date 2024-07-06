import { UserInfo } from "@/hooks/user-info";
import { currentUser } from "@/lib/auth";

const ClientPage = async () => {
  const user = await currentUser();
  return <UserInfo user={user} label="📱 Client Component" />;
};

export default ClientPage;
