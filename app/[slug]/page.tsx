import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  slug: string;
}

const Page = ({ slug }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div>{slug}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;

  return {
    props: {
      slug,
    },
  };
};

export async function generateStaticParams() {
  return [
    {
      slug: "something",
    },
  ];
}

export default Page;
