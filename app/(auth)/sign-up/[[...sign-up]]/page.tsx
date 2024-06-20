import { SignUp } from "@clerk/nextjs";
import CheckAndSignOut from "./../../../../components/shared/components/CheckAndSignOut";
export default function Page() {
  return <SignUp fallbackRedirectUrl="/" />;
}
