import React, {useState} from 'react';

const Error = () => {
  const [error, setError] = useState<boolean>(true);
  if (error) return <div className="error">Hoppsan, något gick fel..</div>;
  return null;
};

export default Error;
