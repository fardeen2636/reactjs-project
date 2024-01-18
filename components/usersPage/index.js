import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./user";
import { loadData } from "@/reducers/usersSlice";
import ContentLoader from "react-content-loader";
import { useDispatch, useSelector } from "react-redux";
import NextButton from "./nextButton";

function UsersPage() {
  // const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const userObj = useSelector((state) => state.users);

  const getUsersData = ({ page }) => {
    setIsLoading(true);

    axios
      .get("https://reqres.in/api/users", {
        params: {
          page: page,
        },
      })
      .then(function (res) {
        // setUsersData(res.data.data);
        dispatch(loadData(res.data));
      })
      .catch(function (error) {
        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          alert(error.message);
        }
      })
      .finally(() => {
        // setIsLoading(false);
        setTimeout(() => {
          setIsLoading(false); // Set loading to false after 2 seconds
        }, 2000);
      });
  };

  useEffect(() => {
    getUsersData({ page: 1});
  }, []);

  const Loader1 = () => (
    <ContentLoader
      speed={2}
      width={1000}
      height={460}
      viewBox="0 0 400 190"
      backgroundColor="#ffffff"
      foregroundColor="#d4d3d3"
      // {...props}
      uniqueKey="loader-key"
    >
      {/* <circle cx="10" cy="30" r="8" /> */}
      <rect x="25" y="15" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="70" r="8" /> */}
      <rect x="25" y="55" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="110" r="8" /> */}
      <rect x="25" y="95" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="150" r="8" /> */}
      <rect x="25" y="140" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="190" r="8" /> */}
      <rect x="25" y="200" rx="5" ry="5" width="520" height="30" />
    </ContentLoader>
  );

  const Loader2 = () => (
    <ContentLoader
      speed={2}
      width={1000}
      height={460}
      viewBox="0 0 400 190"
      backgroundColor="#ffffff"
      foregroundColor="#d4d3d3"
      // {...props}
      uniqueKey="loader-key"
    >
      {/* <circle cx="10" cy="30" r="8" /> */}
      <rect x="25" y="15" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="70" r="8" /> */}
      <rect x="25" y="55" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="110" r="8" /> */}
      <rect x="25" y="95" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="150" r="8" /> */}
      <rect x="25" y="140" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="190" r="8" /> */}
      <rect x="25" y="200" rx="5" ry="5" width="520" height="30" />
    </ContentLoader>
  );

  const Loader3 = () => (
    <ContentLoader
      speed={2}
      width={1000}
      height={460}
      viewBox="0 0 400 190"
      backgroundColor="#ffffff"
      foregroundColor="#d4d3d3"
      // {...props}
      uniqueKey="loader-key"
    >
      {/* <circle cx="10" cy="30" r="8" /> */}
      <rect x="25" y="15" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="70" r="8" /> */}
      <rect x="25" y="55" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="110" r="8" /> */}
      <rect x="25" y="95" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="150" r="8" /> */}
      <rect x="25" y="140" rx="5" ry="5" width="520" height="30" />
      {/* <circle cx="10" cy="190" r="8" /> */}
      <rect x="25" y="200" rx="5" ry="5" width="520" height="30" />
    </ContentLoader>
  );

  return (
    <section className="user-list my-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>User List</h2>
            <p>
              The company itself is a very successful company. I will explain what the pain pains pains during the exercise!
            </p>
          </div>
          <div className="col">
            <div className="candidate-list">
              {isLoading &&
                (currentPage === 1 ? (
                  <Loader1 />
                ) : currentPage === 2 ? (
                  <Loader2 />
                ) : (
                  <Loader3 />
                ))}
              {!isLoading &&
                userObj.data.map((userData) => (
                  <User key={userData.id} data={userData} />
                ))}
            </div>

            <NextButton
          totalPages={userObj.totalPages}
          getUsersData={getUsersData}
          currentPage={userObj.currentPage}
        />

             {/* <MyPagination
          totalPages={userObj.totalPages}
          currentPage={userObj.currentPage}
          getUsersData={getUsersData}
        /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsersPage;