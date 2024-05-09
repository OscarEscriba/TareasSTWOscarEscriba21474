import { useState } from 'react';

const useApi = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string, method: string, body?: any) => {
    setLoading(true);
    setError(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error al realizar la solicitud: ${response.statusText}`);
      }

      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const createData = async (newData: any) => {
    await fetchData('https://us-central1-blogstw2024.cloudfunctions.net/createData', 'POST', newData);
  };

  const getData = async () => {
    await fetchData('https://us-central1-blogstw2024.cloudfunctions.net/getData', 'GET');
  };

  const filterDataByCategory = (category: string) => {
    return data.filter((item: any) => item.category === category);
  };

  const updateData = async (id: string, newData: any) => {
    await fetchData(`https://us-central1-blogstw2024.cloudfunctions.net/updateData/${id}`, 'PUT', newData);
  };

  const deleteData = async (id: string) => {
    await fetchData(`https://us-central1-blogstw2024.cloudfunctions.net/deleteData?id=${id}`, 'DELETE');
  };

  return { data, loading, error, createData, getData, filterDataByCategory, updateData, deleteData };
};

export default useApi;
