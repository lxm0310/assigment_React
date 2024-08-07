import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AccessDenied from './accessDenied'; // Import the AccessDenied component

type Props = {
  children: React.ReactNode;
};

const PrivateRouter = ({ children }: Props) => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem('user');
  const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null);

  useEffect(() => {
    if (user) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [user]);

  if (isAuthorized === null) {
    return null; // Or you could return a loading spinner or some placeholder
  }

  return isAuthorized ? <>{children}</> : <AccessDenied />;
};

export default PrivateRouter;
