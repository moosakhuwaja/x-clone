import { signIn } from "next-auth/react";
import Image from "next/image";
function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://rb.gy/k3rq73"
        width={150}
        height={150}
        objectFit="contain"
        alt="x-logo"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Login
              </span>
              <span class="relative invisible">Button Text</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
