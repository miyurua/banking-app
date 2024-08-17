import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Miuru" };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title={"Welcome"}
          subtext={
            "Access and manage your account and transactions effectively ."
          }
          user={loggedIn?.firstName || "Guest"}
        />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1240}
        />
      </div>
    </section>
  );
};

export default Home;
