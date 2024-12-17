"use client";

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "../components/Loader/Loader";

export const Custom: React.FC<{children: React.ReactNode}> = ({children}) => {
    const {isLoading} = useLoadUserQuery({});
    return (
      <>
        {isLoading ? <Loader /> :<> {children} </>}
      </>
    )
  }