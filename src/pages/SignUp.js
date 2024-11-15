import React from 'react';

const SignUp = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-blue-50" 
      style={{
        backgroundImage: "url('https://blogger.googleusercontent.com/img/a/AVvXsEifPwccPsRNlw_BOO3PFlxpPB4dYEDz8GT_sA0Lten7zu83Il-7zNvqYF2gvk3NdQPduvXgMdkQqL7VLyDmydZJ8HfkRPtn-HN2RRnljY1Y0FbHj1o-YzX_porj3QiNpQGQam4DaiOThS2_VrjklPlS8kXPoJ37G-VFzJTZggWrIUeuPoXuWuuW8jy0n18=w625-h445')", // Ganti dengan URL gambar yang sesuai
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Sign Up</h2>
      {/* Add your sign-up form here */}
      <p className="text-gray-600">Sign up form goes here.</p>
    </div>
  );
};

export default SignUp;
