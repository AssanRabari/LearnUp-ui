import React, { FC, useEffect, useState } from "react";
import { styles } from "../styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";

type Props = {};

const ChangePassword: FC<Props> = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const handlePasswordChange = async (e: any) => {
    e.preventDefault()
    if (newPassword !== confirmNewPassword) {
      toast.error("New passoword should match");
    } else {
      await updatePassword({
        oldPassword,
        newPassword,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password updated successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  return (
    <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-black dark:text-[#fff] pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form
          aria-required
          onSubmit={handlePasswordChange}
          className="flex flex-col items-center"
        >
          <div className="w-[100%] 800px:w-[50%] mt-4">
            <label className="block text-black dark:text-[#fff]">
              Enter your old password
            </label>
            <input
              type="password"
              className={`${styles.input} w-[95%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[50%] mt-4">
            <label className="block text-black dark:text-[#fff]">
              Enter your new password
            </label>
            <input
              type="password"
              className={`${styles.input} w-[95%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[50%] mt-4">
            <label className="block text-black dark:text-[#fff]">
              Confirm new password
            </label>
            <input
              type="password"
              className={`${styles.input} w-[95%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
              required
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <input
              type="submit"
              className={`w-full 800px:w-[250px] h-[40px] rounded-md border border-[#37a39a] text-center text-black dark:text-[#fff] mt-8 cursor-pointer`}
              required
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
