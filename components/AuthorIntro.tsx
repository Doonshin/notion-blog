import siteConfig from "@/site.config";
import Image from "next/image";

const AuthorIntro = () => (
  <div className="flex justify-start">
    <div className="w-full">
      {/* AUTHOR INTRO STARTS */}
      <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-md">
        <Image
          className="w-30 h-30 rounded-full"
          src="/pic/shinji.png"
          alt="Author"
          width={64}
          height={64}
        />
        <div className="text-white">
          <h2 className="text-lg font-bold mb-1">Hi, welcome to my blog!</h2>
            <p className="!text-white">
            My name is Shinji Kato and I am passionate about software engineering and data sience .
            Here, I share my thoughts, tutorials, and experiences in the tech world.
            I hope you find the content informative and engaging. Feel free to connect with me!
            </p>
            {/* <hr className="border-gray-300 my-6" /> */}
                    <div className="flex justify-center mb-6 text-white">
                      {/* Twitter */}
                      {siteConfig.twitterUrl && (
                        <a href={siteConfig.twitterUrl}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="twitter"
                            className="w-6 h-full mx-4 hover:text-blue-500"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            ></path>
                          </svg>
                        </a>
                      )}
             
                      {/* Instagram */}
                      {siteConfig.instagramUrl && (
                        <a href={siteConfig.instagramUrl}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="instagram"
                            className="w-6 h-full mx-4 hover:text-blue-500"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path>
                          </svg>
                        </a>
                      )}
             
                      {/* Github */}
                      {siteConfig.githubUrl && (
                        <a href={siteConfig.githubUrl}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="github"
                            className="w-6 h-full mx-4 hover:text-blue-500"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path
                              fill="currentColor"
                              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            ></path>
                          </svg>
                        </a>
                      )}
                      {/* LinkedIn */}
                      {siteConfig.linkedinUrl && (
                        <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="linkedin"
                            className="w-6 h-full mx-4 hover:text-blue-500"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.46 0 53.79 0 24.09 24.09 0 53.79 0c29.7 0 53.79 24.09 53.79 53.79-.01 29.67-24.09 54.31-53.79 54.31zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.8-55.7 76.8V448H158.5V148.9h89V184h1.3c12.4-23.5 42.6-48.3 87.8-48.3 94 0 111.4 61.9 111.4 142.3V448z"
                            ></path>
                          </svg>
                        </a>
                      )}
                      {/* Gmail */}
                      {siteConfig.gmailUrl && (
                        <a href={`mailto:${siteConfig.gmailUrl}`} target="_blank" rel="noopener noreferrer">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="envelope"
                            className="w-6 h-full mx-4 hover:text-blue-500"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M502.3 190.8L327.4 321.4c-14.9 11.5-32.8 17.3-51.4 17.3s-36.5-5.8-51.4-17.3L9.7 190.8C3.5 186.5 0 179.7 0 172.4V108c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v64.4c0 7.3-3.5 14.1-9.7 18.4zM48 96c-6.6 0-12 5.4-12 12v40.4l188.2 144.3c14.9 11.5 32.8 17.3 51.4 17.3s36.5-5.8 51.4-17.3L476 148.4V108c0-6.6-5.4-12-12-12H48zm464 90.1V392c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V186.1l178.5 137c25 19.1 55.2 29.2 86.5 29.2s61.5-10.1 86.5-29.2L512 186.1z"
                            ></path>
                          </svg>
                        </a>
                      )}
                    </div>
                    <hr className="border-gray-300 my-6" />


        </div>

      </div>
      {/* AUTHOR INTRO ENDS */}
      
    </div>
  </div>
);

export default AuthorIntro;