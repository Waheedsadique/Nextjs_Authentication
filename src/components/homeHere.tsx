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
export default async function HomeHere() {
  const allusers = await getallusers();
  return (
    <div>
      <div
        className="w-full  flex justify-center items-center"
       
      >
        <h1 className="text-4xl font-bold text-white bg-[]">Hello User</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
      {allusers.map((user: any) => (
        <div key={user._id}>
          <h1> " name",  { user.name}</h1>
          <h1>{user.email}</h1>
          <h1>{user.role}</h1>
          <h1>{user.passportid}</h1>
          <h1>{user.phonenumber}</h1>
          <h1>{user.country}</h1>
          <h1>{user.city}</h1>
        </div>
      ))}
      </div>
    </div>
  );
}
