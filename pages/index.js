import Head from "next/head";

// components import
import Feed from "@/components/Feed";

// next-auth
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "@/components/Login";
import Modal from "@/components/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtom";
import Widgets from "@/components/Widgets";
import Sidebar from "@/components/Sidebar";

export default function Home({ trendingResults, followResults, providers }) {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />;
  return (
    <div>
      <Head>
        <title>X</title>
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://www.jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://www.jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session
    }
  };
}
