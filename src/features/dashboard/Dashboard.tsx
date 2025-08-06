"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "./Dashboard.module.scss";
import Button from "@/components/ui/button/Button";
import { H1 } from "@/components/ui/typography/Typography";

const Dashboard = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth");
    }
  }, [router]);

  return user ? (
    <div className={styles.dashboard}>
      <div className={styles.card}>
        <H1>
          Welcome {user.name.first} {user.name.last}
        </H1>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  ) : null;
};

export default Dashboard;
