import { services } from '../data/services'

export async function getStaticPaths() {;
  const paths = services?.map((service) => ({
      params:{ slug: service.slug.toString()}
  }))

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }) => {
  try {   
    const data = services.filter(s=> s.slug === params.slug);
    return {
      props: {
        service: data[0],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
