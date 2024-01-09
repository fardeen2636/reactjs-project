// import Image from "next/image";
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import axios from "axios";

import User from "./user";
import { Button } from "react-bootstrap";

function UsersPage() {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);


  const getUsersData = () => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then(function (res) {
        setUsersData(res.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);

        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          alert(error.message);
        }

      });
  };

  useEffect(() => {
    getUsersData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
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
            {isLoading ? (
              <ContentLoader
                speed={2}
                width={400}
                height={160}
                viewBox="0 0 400 160"
                backgroundColor="#d9d9d9" 
                foregroundColor="#ededed"
              // {...props}
              >
                <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
                <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
                <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
                
              </ContentLoader>
            ) : (
              <>
                <div className="candidate-list">
                  {usersData.map((userData) => {
                    return <User key={userData.id} data={userData} />;
                  })}
                </div>

                <div className="pagination">
                  <Button
                    variant="dark"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>

                  <div className="m-4">Page {currentPage}</div>

                  <Button
                    variant="primary"
                    onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                  </Button>
                </div>
              </>

            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsersPage;