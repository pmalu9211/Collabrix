import { useRouter } from "next/navigation";

const RedirectToSignin = () => {
  const { push } = useRouter();

  return (
    <>
      {push(
        "https://normal-shad-2.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
      )}
    </>
  );
};

export default RedirectToSignin;
