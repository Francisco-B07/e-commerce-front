import { ProfileComponent } from "@/components/profile";
import { Layout } from "components/layout";
import { useMe } from "lib/hooks";

export default function UsersPage() {
  const myData = useMe();
  return (
    <>
      <Layout>
        <ProfileComponent />
        {/* <div>{JSON.stringify(myData)}</div> */}
      </Layout>
    </>
  );
}
