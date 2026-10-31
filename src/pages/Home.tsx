import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return( 
    <Fragment>
      <h1>Home Page</h1>
      <button onClick={() => window.location.href = '/login'}>Go to Login</button>
    </Fragment>
  );
}
