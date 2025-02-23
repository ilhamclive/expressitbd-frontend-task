import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProduct } from "../Api/ProductApi";
import Card from "./Card";

function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getProduct"],
    queryFn: () => getProduct(),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  
  if (isError) {
    return (
      <div className="text-red-500 text-center">
        Error fetching products. <br />
        It seems that the backend is currently only allowing CORS requests from <strong>localhost:5173</strong>.
        To access this site from <strong>https://expressitbd-frontend-task.vercel.app</strong>, you need to add CORS access for that domain.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pl-4 pr-4 mt-4 mb-4">
      {data?.data?.data?.map((Product, i) => (
        <Card Product={Product} key={i} />
      ))}
    </div>
  );
}

export default Home;
