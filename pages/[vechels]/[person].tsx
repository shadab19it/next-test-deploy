import { useRouter } from "next/router";
import { NextPageContext } from "next";
// for dinamic routes
function car({ people }: any) {
  const router = useRouter();
  const { vechels, person } = router.query;
  console.log(router.query);
  return (
    <div>
      <h1>
        this is {person}'s {vechels}
      </h1>
    </div>
  );
}

car.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  const res = await fetch("https://jsonplaceholder.typicode.com/users?name=" + query.name);
  const data = await res.json();
  return { people: data };
};

export default car;
