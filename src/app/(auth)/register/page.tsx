"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


export default function SignUp() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [userState, setUserState] = useState({
    email: "",
    password: "",
    name: "",
    password_confirmation: "",
    passportid: "",
    phonenumber: "",
    country: "",
    city: "",
    pin: "",
    package: "",
    currency: "",
  });

  const [errors, setError] = useState<registerErrorType>({});

  const submitForm = async () => {
    setLoading(true);
    
    console.log("The payload is", userState);
    axios
      .post("/api/auth/register", userState)
      .then((res) => {
        setLoading(false);
        console.log("The response is", res.data);
        const response = res.data;
        if (response.status == 200) {
          router.push(`/login?message=${response.msg}`);
        } else if (response?.status == 400) {
          setError(response?.errors);
        } else {
          setError({});
        }
      })
      .catch((err) => console.log("The error is", err));
  };


  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
         
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                mlm authentication
              </h3>
              <h2 className="text-white text-xl font-semibold mt-10">
                Production label Authentication with validations
              </h2>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:pl-80 lg:py-4">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?
              <Link
                href="/login"
                title=""
                className="font-sm text-black transition-all duration-200 hover:underline ml-2"
              >
                Sign In
              </Link>
            </p>
            <form action="#" method="POST" className="mt-2">
              <div className="space-y-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      onChange={(e) =>
                        setUserState({ ...userState, name: e.target.value })
                      }
                    ></input>
                    <span className="text-red-500 font-bold">
                      {errors?.name}
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-sm text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={(e) =>
                        setUserState({ ...userState, email: e.target.value })
                      }
                    ></input>
                    <span className="text-red-500 font-bold">
                      {errors?.email}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-sm text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={(e) =>
                        setUserState({ ...userState, password: e.target.value })
                      }
                    ></input>
                    <span className="text-red-500 font-bold">
                      {errors?.password}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-sm text-gray-900"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Confirm Password"
                      id="password_confirmation"
                      onChange={(e) =>
                        setUserState({
                          ...userState,
                          password_confirmation: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="passport"
                      className="text-base font-sm text-gray-900"
                    >
                      passport
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="passport id"
                      id="passportid"
                      onChange={(e) =>
                        setUserState({
                          ...userState,
                          passportid: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="passport"
                      className="text-base font-sm text-gray-900"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="phone number"
                      id="phonenumber"
                      onChange={(e) =>
                        setUserState({
                          ...userState,
                          phonenumber: e.target.value,
                        })
                      }
                    ></input>
                  </div> <div className="flex items-center justify-between">
                    <label
                      htmlFor="country"
                      className="text-base font-sm text-gray-900"
                    >
                      Country
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="country"
                      id="country"
                      onChange={(e) =>
                        setUserState({
                          ...userState,
                          country: e.target.value,
                        })
                      }
                    ></input>
                  </div> <div className="flex items-center justify-between">
                    <label
                      htmlFor="city"
                      className="text-base font-sm text-gray-900"
                    >
                      City
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="city"
                      id="city"
                      onChange={(e) =>
                        setUserState({
                          ...userState,
                          city: e.target.value,
                        })
                      }
                    ></input>
                  </div> <div className="flex items-center justify-between">
                    <label
                      htmlFor="pin"
                      className="text-base font-sm text-gray-900"
                    >
                      Pin 
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="pin"
                      id="pin"
                      onChange={(e) =>
                        setUserState({
                          ...userState,
                          pin: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="package"
                      className="text-base font-sm text-gray-900"
                    >
                      package
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="package"
                      id="package"
                      onChange={(e) =>
                        setUserState({
                          ...userState,
                          package: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="currency"
                      className="text-base font-sm text-gray-900"
                    >
                      currency
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="package"
                      id="package"
                      onChange={(e) =>
                        setUserState({
                          ...userState,
                          currency: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className={`inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 ${
                      loading ? "bg-gray-700" : "bg-black"
                    }`}
                    onClick={submitForm}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Create Account"}
                  </button>
                </div>
              </div>
            </form>
           
            

            
            
          </div>
        </div>
      </div>
    </section>
  );
}
