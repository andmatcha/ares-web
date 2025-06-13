const Home = async ({ params }: { params: { lang: string } }) => {
  const lang = params.lang;
  return <div>{lang}</div>;
};

export default Home;
