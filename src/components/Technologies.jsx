import React from "react";
import { useEffect, useState } from "react";

const AnimatedTechnologies = () => {
  const [position, setPosition] = useState(100);

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition((prev) => (prev <= -100 ? 100 : prev - 0.5));
    }, 50);

    return () => clearInterval(animation);
  }, []);

  const technologies = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="60"
      fillRule="evenodd"
      className="text-gray-400"
    >
      <g transform="matrix(.06928 0 0 .06928 7.367398 13.505331)" fill="none">
        <circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff"></circle>
        <g stroke="#00d8ff" strokeWidth="24">
          <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"></path>
          <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"></path>
          <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"></path>
        </g>
      </g>
    </svg>,
    <svg width="82" height="40" viewBox="0 0 148 90" className="text-black">
      <path
        d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64z"
        fill="currentColor"
        fillRule="nonzero"
      ></path>
    </svg>,
    <svg viewBox="0 0 248 31" className="w-auto h-5 text-slate-900">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0z"
        fill="#38bdf8"
      ></path>
    </svg>,
  ];

  return (
    <div className="max-w-3xl mx-auto px-5 mt-28">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Technologies & Tools</h2>
          <p className="max-w-md mx-auto mt-2 text-gray-500">
            Experienced with the following set of tools and technologies.
          </p>
        </div>

        <div className="relative overflow-hidden h-32 mt-8">
          <div
            className="flex gap-16 absolute"
            style={{
              transform: `translateX(${position}%)`,
              transition: "transform 0.05s linear",
            }}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="transform transition duration-500 hover:scale-110"
              >
                {tech}
              </div>
            ))}
            {/* Duplicate icons to create seamless loop */}
            {technologies.map((tech, index) => (
              <div
                key={`duplicate-${index}`}
                className="transform transition duration-500 hover:scale-110"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTechnologies;
