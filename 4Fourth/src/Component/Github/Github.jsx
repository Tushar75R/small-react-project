import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Tushar75R")
    //     .then(res => res.json())
    //     .then(res => setData(res))
    // }, [])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
      <Link to={"https://github.com/Tushar75R"}>Click here</Link>
    </div>
  );
}

export default Github
export const handleLoader = async ()=>{
  const response = await fetch("https://api.github.com/users/Tushar75R");
  return response.json();
}