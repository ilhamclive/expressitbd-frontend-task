import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaDesktop } from "react-icons/fa";
import CreateProductHeader from "./CreateProductHeader/CreateProductHeader";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../Api/ProductApi";
import { toast } from "react-toastify";
import { Globe, Mail, MapPin, Tags, Wallet } from "lucide-react"

function CreateProduct() {
  const [domainAvailability, setDomainAvailability] = useState(null);
  const postProfile = useMutation({
    mutationFn: (data) => postProduct(data),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Duplicate Product");
      }
      if (data.data.succcess) {
        toast.success("Operation Successfull");
        reset();
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const parentVarient = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  };
  const childVarient = {
    initial: {
      opacity: 0,
      y: -20,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };
  const checkDomainAvailability = async (domain) => {
    if (!domain) return;
    try {
      const response = await axios.get(
        `https://interview-task-green.vercel.app/task/domains/check/${domain}`
      );
      setDomainAvailability(response.data.succcess);
    } catch (error) {
      console.error("Error checking domain availability", error);
    }
  };
  const data = [
    {
      Title: "Give your online store a name",
      Description: `A great store name is a big part of your success. Make sure it aligns with your brand and products.`,
      icon: <FaDesktop size={20} color="blue" />,
      input: (
        <div className="w-[100%] translate-x-0 lg:w-[100%]">
          <input
            type="text"
            placeholder="How'd you like to call your store?"
            className="w-full mt-1 p-2 border rounded-lg"
            {...register("name", {
              required: "Store name is required",
              minLength: {
                value: 3,
                message: "Store name must be 3 character long",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              Store name must be at least 3 characters long
            </p>
          )}
        </div>
      ),
    },

    {
      Title: "Your online store subdomain",
      Description: `A SEO-friendly store name is a crucial part of your success. Make sure it aligns with your brand and products.`,
      icon: <Globe size={20} color="blue" />,
      input: (
        <div>
          <input
            type="text"
            placeholder={`enter your domain name${'\u00A0'.repeat(90)}expressitbd.com`} 
            className="w-full mt-1 p-2 border rounded-lg"
            {...register("domain", {
              required: "Domain is required",
              onChange: (e) => checkDomainAvailability(e.target.value),
            })}
          />
          {!domainAvailability && (
            <p className="text-red-500 text-xs mt-1">
              Not Available Domain, Re-enter
            </p>
          )}
        </div>
      ),
    },

    {
      Title: "Where's your store located?",
      Description: `Set your store's default location so we can optimize store access and speed for your customers.`,
      icon: <MapPin size={20} color="blue" />,
      input: (
        <div>
          <select
            className="w-full mt-1 p-2 border rounded-lg"
            {...register("country")}
          >
            <option>Bangladesh</option>
          </select>
        </div>
      ),
    },

    {
      Title: "What's your Category?",
      Description: `Set your store's default category so that we can optimize store access and speed for your customers.`,
      icon: <Tags size={20} color="blue" />,
      input: (
        <div>
          <select
            className="w-full mt-1 p-2 border rounded-lg"
            {...register("category")}
          >
            <option>Any</option>
          </select>
        </div>
      ),
    },

    {
      Title: "Choose store currency",
      Description: `This is the main currency you wish to sell in.`,
      icon: <Wallet size={20} color="blue" />,
      input: (
        <div>
          <select
            className="w-full mt-1 p-2 border rounded-lg"
            {...register("currency")}
          >
            <option>BDT</option>
          </select>
        </div>
      ),
    },
    {
      Title: "Store contact email",
      Description: `This is the email you'll use to send notifications to and receive orders from customers.`,
      icon: <Mail size={20} color="blue" />,
      input: (
        <div>
          <input
            type="email"
            placeholder="yourstore@email.com"
            className="w-full mt-1 p-2 border rounded-lg"
            {...register("email", {
              required: "Email is requied",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid Email Format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Invalid email format!</p>
          )}
        </div>
      ),
    },
  ];

  const MySubmit = (data) => {
    postProfile.mutate(data);
  };

  return (
    <div className="p-5">
      <CreateProductHeader />
      <form onSubmit={handleSubmit(MySubmit)}>
        <motion.div
          variants={parentVarient}
          initial="initial"
          animate="final"
          className="flex justify-center items-center flex-col translate-y-3 "
        >
          {data.map((d, i) => (
            <motion.div
              variants={childVarient}
              key={i}
              className="mb-4 flex md:justify-center md:items-center w-full space-y-1 md:space-x-2 px-1 flex-col md:flex-row"
            >
              <div className="flex space-x-2 justify-center items-start">
                <div className="translate-y-2">
                  {d.icon}
                </div>
                <div className="w-[44rem]  flex flex-col justify-center items-baseline">
                  <label className="block font-medium text-xs md:text-lg">
                    {d.Title}
                  </label>
                  <p className="text-xs md:text-lg">{d.Description}</p>
                </div>
              </div>
              <div className="w-[91%] translate-x-7 md:translate-x-0 lg:w-[50%]">
                {d.input}
              </div>
            </motion.div>
          ))}
          <div className="-translate-y-4 w-full p-2 my-1 mb-2 flex justify-end">
            <button className="p-2 py-1 rounded bg-blue-400 text-white active:scale-95 cursor-pointer">
              Create Store
            </button>
          </div>
        </motion.div>
      </form>
    </div>
  );
}

export default CreateProduct;
