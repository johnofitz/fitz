import { useRouteError } from 'react-router-dom';
import MainNav from '../Components/Includes/MainNav';
import PageContent from '../Components/UI/PageContent';

const ErrorPage = () => {
    const error = useRouteError();
  
    let title = 'An error occurred!';
    let message = 'Something went wrong!';
  
    if (error) {
      if (error.status === 500) {
        message = error.data.message;
      } else if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.';
      }
    }
    
    return (
      <>
        <MainNav />
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </>
    );
  };
  
  export default ErrorPage;

