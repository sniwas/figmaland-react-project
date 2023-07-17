import React from "react";

export default function Fotter() {
  return (
    <div>
      <footer className="md:p-20 p-5">
        <div className="bg-black mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-1 px-1 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-xl font-medium text-white ">Fingertipe</h2>
              <ul className="text-white font-normal">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Examples
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-medium text-white ">Resources</h2>
              <ul className="text-white font-normal">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Examples
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-medium text-white">About</h2>
              <ul className="text-white font-normal">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Examples
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="text-white font-normal">
                <li className="mb-4 flex flex-row">
                  <svg
                    width="32"
                    height="40"
                    viewBox="0 0 32 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8885 38.8806C15.2129 39.1123 15.6015 39.2368 16.0001 39.2368C16.3987 39.2368 16.7874 39.1123 17.1118 38.8806C17.6945 38.4686 31.389 28.5805 31.3335 16.2371C31.3335 7.78273 24.4545 0.903809 16.0001 0.903809C7.54571 0.903809 0.666795 7.78272 0.666795 16.2276C0.611211 28.5805 14.3058 38.4686 14.8885 38.8806ZM16.0001 4.73714C22.3424 4.73714 27.5001 9.89489 27.5001 16.2467C27.5404 24.7529 19.0898 32.3908 16.0001 34.8959C12.9124 32.3889 4.45988 24.7491 4.50013 16.2371C4.50013 9.89489 9.65788 4.73714 16.0001 4.73714Z"
                      fill="white"
                    />
                  </svg>
                  <p className="pl-5">7480 Mockingbird Hill undefined</p>
                </li>
                <li className="mb-4 flex flex-row ">
                  <svg
                    width="21"
                    height="33"
                    viewBox="0 0 21 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3333 0.0288086H4.66663C2.24579 0.0288086 0.291626 1.98298 0.291626 4.40381V27.7371C0.291626 30.158 2.24579 32.1121 4.66663 32.1121H16.3333C18.7541 32.1121 20.7083 30.158 20.7083 27.7371V4.40381C20.7083 1.98298 18.7541 0.0288086 16.3333 0.0288086ZM13.4166 29.1955H7.58329V27.7371H13.4166V29.1955ZM18.1562 24.8205H2.84371V4.40381H18.1562V24.8205Z"
                      fill="white"
                    />
                  </svg>
                  <p className="pl-5">(239) 555-0108</p>
                </li>
                <li className="mb-4 flex flex-row space-x-4">
                  <svg
                    width="41"
                    height="42"
                    viewBox="0 0 41 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.145 10.2488C35.9202 10.7771 34.5873 11.1574 33.2144 11.3055C34.6398 10.4586 35.7072 9.12084 36.2164 7.54301C34.8788 8.33869 33.4136 8.89663 31.8855 9.19208C31.2469 8.50935 30.4745 7.96545 29.6165 7.59428C28.7585 7.22311 27.8332 7.03262 26.8983 7.03468C23.1159 7.03468 20.0739 10.1007 20.0739 13.8631C20.0739 14.3915 20.1379 14.9198 20.242 15.4281C14.5783 15.1319 9.52705 12.4262 6.16887 8.28349C5.55697 9.32863 5.23632 10.5186 5.24026 11.7297C5.24026 14.0993 6.44505 16.1886 8.28224 17.4174C7.19955 17.3748 6.14222 17.0772 5.19624 16.5489V16.6329C5.19624 19.9511 7.54176 22.7009 10.6678 23.3333C10.0808 23.4857 9.47704 23.5637 8.87062 23.5654C8.42633 23.5654 8.00606 23.5214 7.58178 23.4613C8.44634 26.1671 10.964 28.1324 13.9619 28.1964C11.6164 30.0336 8.67849 31.1143 5.48843 31.1143C4.91605 31.1143 4.38771 31.0943 3.83936 31.0303C6.86532 32.9715 10.4556 34.0922 14.3222 34.0922C26.8743 34.0922 33.7428 23.6935 33.7428 14.6676C33.7428 14.3714 33.7428 14.0753 33.7227 13.7791C35.0516 12.8064 36.2164 11.6016 37.145 10.2488Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.2103 0.553223H1.75117C1.04271 0.553223 0.470337 1.12559 0.470337 1.83405V31.2932C0.470337 32.0016 1.04271 32.574 1.75117 32.574H31.2103C31.9187 32.574 32.4911 32.0016 32.4911 31.2932V1.83405C32.4911 1.12559 31.9187 0.553223 31.2103 0.553223ZM27.5119 9.89929H24.9542C22.9489 9.89929 22.5607 10.8519 22.5607 12.2528V15.3388H27.3478L26.7234 20.17H22.5607V32.574H17.5694V20.174H13.3947V15.3388H17.5694V11.7765C17.5694 7.64182 20.0951 5.38836 23.7855 5.38836C25.5546 5.38836 27.0716 5.52045 27.5159 5.58048V9.89929H27.5119Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.1981 0.553223H1.73896C1.0305 0.553223 0.45813 1.12559 0.45813 1.83405V31.2932C0.45813 32.0016 1.0305 32.574 1.73896 32.574H31.1981C31.9065 32.574 32.4789 32.0016 32.4789 31.2932V1.83405C32.4789 1.12559 31.9065 0.553223 31.1981 0.553223ZM9.95629 27.8389H5.20521V12.557H9.95629V27.8389ZM7.58275 10.4677C7.03811 10.4677 6.50569 10.3061 6.05283 10.0036C5.59997 9.70097 5.24701 9.27089 5.03859 8.7677C4.83016 8.26451 4.77562 7.71081 4.88188 7.17663C4.98813 6.64245 5.25041 6.15177 5.63553 5.76665C6.02066 5.38152 6.51133 5.11925 7.04552 5.013C7.5797 4.90674 8.13339 4.96127 8.63658 5.1697C9.13977 5.37813 9.56985 5.73109 9.87244 6.18395C10.175 6.63681 10.3365 7.16922 10.3365 7.71387C10.3325 9.23486 9.09974 10.4677 7.58275 10.4677ZM27.7438 27.8389H22.9968V20.4061C22.9968 18.633 22.9647 16.3555 20.5272 16.3555C18.0576 16.3555 17.6773 18.2847 17.6773 20.278V27.8389H12.9342V12.557H17.4892V14.6464H17.5532C18.1856 13.4456 19.7346 12.1768 22.0481 12.1768C26.8593 12.1768 27.7438 15.3428 27.7438 19.4575V27.8389Z"
                      fill="white"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
