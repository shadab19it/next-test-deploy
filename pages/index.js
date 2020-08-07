import Link from "next/link";
function index() {
  return (
    <div>
      <h1>this is the first page</h1>
      <Link href='Details'>
        <a>Details</a>
      </Link>
      <Link href='about'>
        <a>About</a>
      </Link>
      <Link as='/car/shadab' href='[vechels]/[person]'>
        <a>dynamic</a>
      </Link>
    </div>
  );
}

<style
  jsx={`
  a{
    padding:20px;
  }
`}></style>;

export default index;
