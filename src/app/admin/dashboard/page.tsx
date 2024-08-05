import {
  CustomSession,
  authOptions,
} from "@/app/api/auth/[...nextauth]/options";
import SignoutButton from "@/components/signoutButton";
import { getServerSession } from "next-auth";

import React from "react";


const getallusers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/admin/allusers", {
      
      cache: "no-store",
      
    })
    
    const data = await res.json();
    return data;
    
  } catch (error) {
    console.log("The error is ", error);
  }
};

export default async function AdminDashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);

  const allusers  = await getallusers();
  return (
  

    <>
      <div className="flex justify-center items-center px-10 pt-10 flex-col">
        <h1>Hello Admin How are you </h1>
        <h1 className="text-sm font-bold">
          {session && JSON.stringify(session)}
        </h1>

        <SignoutButton type="Admin" />
      </div>
      <div>
        <h1>All Users</h1>
        
        

        {allusers.map((user: any) => (
          <div className="flex justify-center items-center px-10 pt-10 flex-col" key={user._id}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.role}</h1>
            <h1>{user.passportid}</h1>
            <h1>{user.phonenumber}</h1>
            <h1>{user.country}</h1>
            <h1>{user.city}</h1>
            <h1>{user.pin}</h1>
            <h1>{user.package}</h1>
            <h1>{user.currency}</h1>
            
          </div>
        ))}
      </div>



    </>
   




  );
}
