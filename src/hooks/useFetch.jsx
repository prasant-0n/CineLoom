/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export default function useFetch(url) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading("loading..");
    setData(null);
    setError(null);
    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
        // console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong...");
      });
  }, [url]);
  return { data, loading, error };
}
