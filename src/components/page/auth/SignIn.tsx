import { signIn } from "next-auth/react";
import type { ClientSafeProvider, TProviders } from "src/types";

export const SignIn: React.VFC<{ providers: TProviders }> = ({ providers }) => {
  const handleClick = (provider: ClientSafeProvider) => signIn(provider.id, { callbackUrl: "/" });
  return (
    <div className="flex flex-col justify-center items-center py-2 px-14 -mt-32 min-h-screen text-center">
      <img src="/images/2880px-Instagram_logo.png" alt="" className="w-80" />
      <p className="text-xs italic">本物のアプリではありません。学習用の目的で作成したものです。</p>
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="p-3 text-white bg-blue-500 rounded-lg " onClick={() => handleClick(provider)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
