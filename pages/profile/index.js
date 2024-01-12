import React from 'react'
import ProfilePage from "@/components/profilePage";
import LayoutPage from '@/components/layout';
import BecomeAnInstructor from '@/components/landingPage/becomeAnIstructor';
import ReviewRating from '@/components/landingPage/reviewRatings';
function Profile() {
  return (
  <>
  <ProfilePage />
  <BecomeAnInstructor/>
  <ReviewRating/>
</>
 )
};

Profile.getLayout = function getLayout(page){
  return <LayoutPage>{page}</LayoutPage>;
};


export default Profile;