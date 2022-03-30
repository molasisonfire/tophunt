import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";

export function UserDataGet() {
  // here you set a state to tell the component it need to wait
  //  until the result is fetched from the api
  const [loadingData, setLoadingData] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://cnnijjoiv0.execute-api.sa-east-1.amazonaws.com/Production/allusers");
      setData(result.data['message']);
    })();
  }, []);


  return (
    <div>
        <UserTable  dados={data} />
    </div>
  );
}

