"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneSchema, PhoneSchema } from "@/lib/validation";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import { useAuth } from "@/context/AuthContext";
import styles from "./Auth.module.scss";

const Auth: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneSchema>({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=1");
      const data = await res.json();
      const user = data.results[0];
      login(user);
      router.push("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="container" className={styles.authFormContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
        <Input
          label="Phone Number"
          type="number"
          placeholder="09xxxxxxxxx"
          maxLength={11}
          {...register("phone")}
          error={errors.phone?.message}
        />
        <Button type="submit">{loading ? "Loading..." : "Login"}</Button>
      </form>
    </div>
  );
};

export default Auth;
