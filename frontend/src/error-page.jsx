import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="hero  is-fullheight">
      <div className="hero-body content is-align-self-center has-text-centered">
        <div>
          <h1>Oops! </h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <h2 className="has-text-weight-light mt-0">
            {error.status} | <i>{error.statusText || error.message}</i>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
