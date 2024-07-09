import dpi from "../../assets/image.png";
const AnimatedImage2 = () => {
  return (
    <>
      <style>
        {`
          @keyframes morph {
            0%, 100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            50% {
              border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%;
            }
          }
          .shape {
            animation: morph 8s ease-in-out infinite;
           max-width: 50%;
            max-height: 50%;
            object-fit: contain;
          }
    @media (max-width: 617px) {
    .shape {
      max-width: 60%; /* Adjust max-width for larger screens */
      max-height: 60%; /* Adjust max-height for larger screens */
    }
  }
        `}
      </style>
      <img
        className=" shape shadow-2xl bg-[#5ea5b6] transition-all duration-2000 ease-in-out z-10 md:mt-[100px]"
        src={dpi}
        alt=""
      />
    </>
  );
};

export default AnimatedImage2;
