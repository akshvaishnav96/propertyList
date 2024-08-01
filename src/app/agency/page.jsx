import React from "react";
import dataBaseConn from "@/mongodb/connection/dbConn.js";

export default function page() {
  dataBaseConn();
  return <div>agency page</div>;
}
