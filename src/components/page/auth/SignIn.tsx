import { signIn } from "next-auth/react";
import type { ClientSafeProvider, TProviders } from "src/types";

export const SignIn: React.VFC<{ providers: TProviders }> = ({ providers }) => {
  const handleClick = (provider: ClientSafeProvider) => signIn(provider.id);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => handleClick(provider)}>Sign in with {provider.name}</button>
        </div>
      ))}
    </>
  );
};
