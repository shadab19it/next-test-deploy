import Link from "next/link";
function index() {
  return (
    <div>
      <h1>This is the first Next.js app that I deploy</h1>
      <Link href='Details'>
        <a>Details</a>
      </Link>
      <Link href='about'>
        <a>About</a>
      </Link>
      <Link as='/car/shadab' href='[vechels]/[person]'>
        <a>dynamic</a>
      </Link>
      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          a {
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default index;
