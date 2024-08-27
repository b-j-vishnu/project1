import Revenue from "./Revenue";
import flightIcon from "../../../Images/flight.png";
import hotelIcon from "../../../Images/hotel.png";
import carIcon from "../../../Images/car.png";
import downIcon from "../../../Images/down.png";
import upIcon from "../../../Images/up.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import LineChartComponent from "./LineChartComponent";
import "./DashboardCss/DashboardCalendar.scss";

const DashBoard = () => {
  const sampleDatas = [
    {
      id: 1,
      name: "Hakeem Chan",
      email: "hakeen chan@gmail.com",
      number: "1234567890",
      userID: "#9236",
      depature: "11.00PM",
      arrival: "10.00AM",
      status: "Waiting",
      img: "../../../Images/image.png",
    },
    {
      id: 2,
      name: "Hakeem Chan",
      email: "hakeen chan@gmail.com",
      number: "1234567890",
      userID: "#9236",
      depature: "11.00PM",
      arrival: "10.00AM",
      status: "Waiting",
      img: "../../../Images/image.png",
    },
    {
      id: 3,
      name: "Hakeem Chan",
      email: "hakeen chan@gmail.com",
      number: "1234567890",
      userID: "#9236",
      depature: "11.00PM",
      arrival: "10.00AM",
      status: "Waiting",
      img: "../../../Images/image.png",
    },
    {
      id: 4,
      name: "Hakeem Chan",
      email: "hakeen chan@gmail.com",
      number: "1234567890",
      userID: "#9236",
      depature: "11.00PM",
      arrival: "10.00AM",
      status: "Waiting",
      img: "../../../Images/image.png",
    },
    {
      id: 5,
      name: "Hakeem Chan",
      email: "hakeen chan@gmail.com",
      number: "1234567890",
      userID: "#9236",
      depature: "11.00PM",
      arrival: "10.00AM",
      status: "Waiting",
      img: "../../../Images/image.png",
    },
  ];

  return (
    <div className="w-[100%] flex mt-16  justify-end">
      <div className="  md:w-[93%]  px-4 lg:w-[80%]   items-end bg-gray-100 ">
        <div className=" lg:px-2">
          <h3 className="poppins-bold text-xl mt-3">Dashboard</h3>
          <p className="lato-thin text-gray-500 my-1">
            Lates update for 1 month
          </p>
          <div className="my-4 flex w-full  items-center md:gap-x-4 lg:justify-between ">
            <Revenue
              Content={"Flight Bookings"}
              Icon={flightIcon}
              textColor={"text-red-700"}
              StockIcon={downIcon}
              Value={86}
              Percent={2.2}
            />
            <Revenue
              Content={"Hotel Booking"}
              Icon={hotelIcon}
              StockIcon={upIcon}
              Value={43}
              Percent={4.3}
              textColor={"text-green-500"}
            />
            <Revenue
              Content={"Total Vehicle"}
              Icon={carIcon}
              StockIcon={upIcon}
              Value={17}
              textColor={"text-green-500"}
              Percent={0.3}
            />
          </div>
          <div className="grid grid-cols-2 my-10 ">
            <div className="flex flex-col  ">
              <section className="md:w-[92%] lg:w-[95%] border-2 flex flex-col grid-rows-1  bg-white items-center px-4 py-3 rounded-xl">
                <div className=" flex mb-5 w-full justify-between ">
                  <h2 className="poppins-bold">Growth</h2>
                  <select className="border-none outline-none">
                    <option>Weekly</option>
                  </select>
                </div>
                <LineChartComponent />
              </section>

              <section className=" md:w-[92%] lg:w-[95%] bg-white my-4 py-5 px-2 rounded-xl">
                <div className="flex gap-x-3 items-center">
                  <svg
                    width="47"
                    height="41"
                    viewBox="0 0 47 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="47" height="41" rx="10" fill="#E2FBBE" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.5574 6H26.7682C29.8458 6 32.2837 6 34.1909 6.25354C36.1533 6.51537 37.7423 7.06554 38.9965 8.30509C40.5436 9.83794 41.0376 11.8895 41.2167 14.5525C42.1829 14.9718 42.9129 15.8617 42.9916 16.9885C43 17.0896 43 17.1973 43 17.2967V23.7033C43 23.8027 43 23.9104 42.9933 24.0098C42.9129 25.1367 42.1829 26.0282 41.2167 26.4491C41.0376 29.1105 40.5436 31.1621 38.9965 32.6949C37.7423 33.9345 36.1533 34.4846 34.1909 34.7465C32.282 35 29.8458 35 26.7682 35H21.5574C18.4798 35 16.0419 35 14.1347 34.7465C12.1723 34.4846 10.5833 33.9345 9.32912 32.6949C8.07665 31.4537 7.52074 29.8811 7.25619 27.9389C7 26.0498 7 23.6386 7 20.5928V20.4072C7 17.3614 7 14.9486 7.25619 13.0611C7.52074 11.1189 8.07665 9.54629 9.32912 8.30509C10.5833 7.06554 12.1723 6.51537 14.1347 6.25354C16.0435 6 18.4798 6 21.5574 6ZM38.6766 26.7143H35.4316C31.84 26.7143 28.7658 24.0165 28.7658 20.5C28.7658 16.9835 31.84 14.2857 35.43 14.2857H38.675C38.4841 12.0635 38.0538 10.8886 37.2182 10.0633C36.51 9.36234 35.5388 8.94143 33.8543 8.71771C32.1347 8.48903 29.8659 8.48571 26.6727 8.48571H21.6495C18.4564 8.48571 16.1892 8.48903 14.4662 8.71771C12.7834 8.94143 11.8123 9.36234 11.104 10.0633C10.3957 10.7643 9.97042 11.7254 9.74437 13.3925C9.5133 15.0961 9.50995 17.3398 9.50995 20.5C9.50995 23.6602 9.5133 25.9056 9.74437 27.6091C9.97042 29.2746 10.3957 30.2357 11.104 30.9367C11.8123 31.6377 12.7834 32.0586 14.4679 32.2823C16.1892 32.511 18.4564 32.5143 21.6495 32.5143H26.6727C29.8659 32.5143 32.1347 32.511 33.856 32.2823C35.5388 32.0586 36.51 31.6377 37.2182 30.9367C38.0538 30.1114 38.4858 28.9382 38.6766 26.7143ZM13.6977 13.8714C13.6977 13.5418 13.83 13.2257 14.0655 12.9926C14.301 12.7595 14.6204 12.6286 14.9535 12.6286H21.6512C21.9842 12.6286 22.3036 12.7595 22.5392 12.9926C22.7747 13.2257 22.907 13.5418 22.907 13.8714C22.907 14.2011 22.7747 14.5172 22.5392 14.7503C22.3036 14.9833 21.9842 15.1143 21.6512 15.1143H14.9535C14.6204 15.1143 14.301 14.9833 14.0655 14.7503C13.83 14.5172 13.6977 14.2011 13.6977 13.8714ZM39.9425 16.7714H35.4316C33.0473 16.7714 31.2774 18.5263 31.2774 20.5C31.2774 22.4737 33.0473 24.2286 35.43 24.2286H39.981C40.326 24.207 40.475 23.9767 40.4867 23.8375V17.1625C40.475 17.0233 40.326 16.793 39.981 16.7731L39.9425 16.7714Z"
                      fill="#0FA958"
                    />
                  </svg>
                  <p className="poppins-bold">0</p>
                </div>
                <p className="poppins-light poppins-regular ">
                  Total Invoice / Bill Paid Amount
                </p>
                <div className="flex gap-x-3 mt-3 items-center">
                  <svg
                    width="47"
                    height="41"
                    viewBox="0 0 47 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="47" height="41" rx="10" fill="#FBE2BE" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.5574 6H26.7682C29.8458 6 32.2837 6 34.1909 6.25354C36.1533 6.51537 37.7423 7.06554 38.9965 8.30509C40.5436 9.83794 41.0376 11.8895 41.2167 14.5525C42.1829 14.9718 42.9129 15.8617 42.9916 16.9885C43 17.0896 43 17.1973 43 17.2967V23.7033C43 23.8027 43 23.9104 42.9933 24.0098C42.9129 25.1367 42.1829 26.0282 41.2167 26.4491C41.0376 29.1105 40.5436 31.1621 38.9965 32.6949C37.7423 33.9345 36.1533 34.4846 34.1909 34.7465C32.282 35 29.8458 35 26.7682 35H21.5574C18.4798 35 16.0419 35 14.1347 34.7465C12.1723 34.4846 10.5833 33.9345 9.32912 32.6949C8.07665 31.4537 7.52074 29.8811 7.25619 27.9389C7 26.0498 7 23.6386 7 20.5928V20.4072C7 17.3614 7 14.9486 7.25619 13.0611C7.52074 11.1189 8.07665 9.54629 9.32912 8.30509C10.5833 7.06554 12.1723 6.51537 14.1347 6.25354C16.0435 6 18.4798 6 21.5574 6ZM38.6766 26.7143H35.4316C31.84 26.7143 28.7658 24.0165 28.7658 20.5C28.7658 16.9835 31.84 14.2857 35.43 14.2857H38.675C38.4841 12.0635 38.0538 10.8886 37.2182 10.0633C36.51 9.36234 35.5388 8.94143 33.8543 8.71771C32.1347 8.48903 29.8659 8.48571 26.6727 8.48571H21.6495C18.4564 8.48571 16.1892 8.48903 14.4662 8.71771C12.7834 8.94143 11.8123 9.36234 11.104 10.0633C10.3957 10.7643 9.97042 11.7254 9.74437 13.3925C9.5133 15.0961 9.50995 17.3398 9.50995 20.5C9.50995 23.6602 9.5133 25.9056 9.74437 27.6091C9.97042 29.2746 10.3957 30.2357 11.104 30.9367C11.8123 31.6377 12.7834 32.0586 14.4679 32.2823C16.1892 32.511 18.4564 32.5143 21.6495 32.5143H26.6727C29.8659 32.5143 32.1347 32.511 33.856 32.2823C35.5388 32.0586 36.51 31.6377 37.2182 30.9367C38.0538 30.1114 38.4858 28.9382 38.6766 26.7143ZM13.6977 13.8714C13.6977 13.5418 13.83 13.2257 14.0655 12.9926C14.301 12.7595 14.6204 12.6286 14.9535 12.6286H21.6512C21.9842 12.6286 22.3036 12.7595 22.5392 12.9926C22.7747 13.2257 22.907 13.5418 22.907 13.8714C22.907 14.2011 22.7747 14.5172 22.5392 14.7503C22.3036 14.9833 21.9842 15.1143 21.6512 15.1143H14.9535C14.6204 15.1143 14.301 14.9833 14.0655 14.7503C13.83 14.5172 13.6977 14.2011 13.6977 13.8714ZM39.9425 16.7714H35.4316C33.0473 16.7714 31.2774 18.5263 31.2774 20.5C31.2774 22.4737 33.0473 24.2286 35.43 24.2286H39.981C40.326 24.207 40.475 23.9767 40.4867 23.8375V17.1625C40.475 17.0233 40.326 16.793 39.981 16.7731L39.9425 16.7714Z"
                      fill="#A9610F"
                    />
                  </svg>
                  <p className="poppins-bold">2400000</p>
                </div>
                <p className="poppins-light poppins-regular text-">
                  Total Invoice / Bill Paid Amount
                </p>
              </section>
            </div>

            <div className="flex justify-end ">
              <div className="h-[430px] w-[93%] bg-white rounded-3xl px-3 py-1 ">
                <article className="">
                  <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    height={385}
                  />
                </article>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <section className="basis-[47%] rounded-2xl p-5 bg-white flex flex-col gap-y-5 ">
              <p className="mb-3 poppins-semibold">Bookings</p>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#69E26D" />
                  </svg>

                  <p>Confirmed</p>
                </div>
                <p>12,368,79</p>
              </div>
              <div className="w-11/12  flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#3257EB" />
                  </svg>

                  <p className="">Pending</p>
                </div>
                <p>1,89,32</p>
              </div>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#FFAE00" />
                  </svg>

                  <p>Wait</p>
                </div>
                <p>12,0000</p>
              </div>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#00693C" />
                  </svg>

                  <p>On Trip</p>
                </div>
                <p>13,456,12</p>
              </div>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#FF0000" />
                  </svg>

                  <p className="">Cancelled</p>
                </div>
                <p>12,904,90</p>
              </div>
            </section>
            <section className=" basis-[47%] rounded-2xl p-5 bg-white flex flex-col gap-y-5 ">
              <p className="mb-3 poppins-semibold">Leads</p>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#066F36" />
                  </svg>

                  <p className="w-[#066F36]">Converted to Deal</p>
                </div>
                <p>12,368,79</p>
              </div>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#FF0000" />
                  </svg>

                  <p className="text-[#FF0000]">Cancelled</p>
                </div>
                <p>1,89,32</p>
              </div>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#FFC267" />
                  </svg>
                  <p className="text-[#FFC267]">Proposal Sent</p>
                </div>
                <p>12,0000</p>
              </div>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#EF48F2" />
                  </svg>

                  <p className="text-[#EF48F2]">Meeting Fixed</p>
                </div>
                <p>13,456,12</p>
              </div>
              <div className="w-11/12 flex justify-between">
                <div className="flex gap-x-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#003BA8" />
                  </svg>

                  <p className="text-[#003BA8]">Yes to Confirm</p>
                </div>
                <p>12,904,90</p>
              </div>
            </section>
          </div>
          <section className=" bg-white my-10 p-4 rounded-lg poppins-light ">
            <div className="flex justify-between my-4 ">
              <p className="poppins-regular poppins-semibold">
                The Trip Scheduled for Today
              </p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00002 3.79167C8.04706 3.79167 8.89585 2.94287 8.89585 1.89583C8.89585 0.848793 8.04706 0 7.00002 0C5.95298 0 5.10419 0.848793 5.10419 1.89583C5.10419 2.94287 5.95298 3.79167 7.00002 3.79167Z"
                  fill="#9EA9B4"
                />
                <path
                  d="M7.00002 8.89616C8.04706 8.89616 8.89585 8.04737 8.89585 7.00033C8.89585 5.95329 8.04706 5.10449 7.00002 5.10449C5.95298 5.10449 5.10419 5.95329 5.10419 7.00033C5.10419 8.04737 5.95298 8.89616 7.00002 8.89616Z"
                  fill="#9EA9B4"
                />
                <path
                  d="M7.00002 13.9997C8.04706 13.9997 8.89585 13.1509 8.89585 12.1038C8.89585 11.0568 8.04706 10.208 7.00002 10.208C5.95298 10.208 5.10419 11.0568 5.10419 12.1038C5.10419 13.1509 5.95298 13.9997 7.00002 13.9997Z"
                  fill="#9EA9B4"
                />
              </svg>
            </div>
            <table className="md:w-[80%] lg:w-full rounded-lg  text-xs  ">
              <tr className="poppins-regular  bg-gray-100">
                <th className="border flex items-center text-gray-400 justify-around  poppins-regular whitespace-nowrap border-gray-300 poppins-bold py-2">
                  <p>Full Name </p>
                  <div>
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.17188 0.75L9.67188 4.75H0.671875L5.17188 0.75Z"
                        fill="#A5ABB3"
                      />
                    </svg>
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_320)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.17188 4.75L9.67188 0.75H0.671875L5.17188 4.75Z"
                          fill="#A5ABB3"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_320">
                          <rect
                            width="9"
                            height="4"
                            fill="white"
                            transform="translate(0.671875 0.75)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </th>
                <th className="border py-2 poppins-bold text-gray-400  whitespace-nowrap border-gray-300 ">
                  <div className="flex justify-start gap-x-6 px-4 items-center">
                    <p>Email</p>
                    <div className="">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.17188 0.75L9.67188 4.75H0.671875L5.17188 0.75Z"
                          fill="#A5ABB3"
                        />
                      </svg>
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_320)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.17188 4.75L9.67188 0.75H0.671875L5.17188 4.75Z"
                            fill="#A5ABB3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_320">
                            <rect
                              width="9"
                              height="4"
                              fill="white"
                              transform="translate(0.671875 0.75)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="border py-2  poppins-bold text-gray-400 whitespace-nowrap border-gray-300  ">
                  Phone Number
                </th>
                <th className="border py-2  poppins-bold text-gray-400 whitespace-nowrap border-gray-300 ">
                  <div className="flex justify-around items-center">
                    <p>User ID</p>
                    <div className="">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.17188 0.75L9.67188 4.75H0.671875L5.17188 0.75Z"
                          fill="#A5ABB3"
                        />
                      </svg>
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_320)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.17188 4.75L9.67188 0.75H0.671875L5.17188 4.75Z"
                            fill="#A5ABB3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_320">
                            <rect
                              width="9"
                              height="4"
                              fill="white"
                              transform="translate(0.671875 0.75)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="border py-2 poppins-bold text-gray-400 whitespace-nowrap border-gray-300 ">
                  <div className="flex justify-evenly items-center">
                    <p>Time</p>
                    <div className="">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.17188 0.75L9.67188 4.75H0.671875L5.17188 0.75Z"
                          fill="#A5ABB3"
                        />
                      </svg>
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_320)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.17188 4.75L9.67188 0.75H0.671875L5.17188 4.75Z"
                            fill="#A5ABB3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_320">
                            <rect
                              width="9"
                              height="4"
                              fill="white"
                              transform="translate(0.671875 0.75)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="border py-2 poppins-bold text-gray-400 whitespace-nowrap border-gray-300 ">
                  <div className="flex justify-around items-center">
                    <p>Status</p>
                    <div className="">
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.17188 0.75L9.67188 4.75H0.671875L5.17188 0.75Z"
                          fill="#A5ABB3"
                        />
                      </svg>
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_320)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.17188 4.75L9.67188 0.75H0.671875L5.17188 4.75Z"
                            fill="#A5ABB3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_320">
                            <rect
                              width="9"
                              height="4"
                              fill="white"
                              transform="translate(0.671875 0.75)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </th>
              </tr>
              {sampleDatas.map((data) => (
                <tr className="w-full" key={data.id}>
                  <td className="border border-gray-300   lg:py-2 text-sm  ">
                    <div className="flex md:flex-col lg:flex-row lg:ml-8 lg:mx-2 items-center ">
                      <img
                        className="md:w-6 md:h-6 lg:w-8 lg:h-8"
                        src={data.img}
                      />
                      <p className="poppins-semibold mx-2 md:text-xs whitespace-nowrap ">
                        {data.name}
                      </p>
                    </div>
                  </td>
                  <td className="border lato-regular border-gray-300 whitespace-nowrap pl-4 md:py-1 lg:py-2 md:text-xs lg:text-sm">
                    {data.email}
                  </td>
                  <td className="border lato-regular border-gray-300 text-center md:py-1 lg:py-2 md:text-xs lg:text-sm">
                    {data.number}
                  </td>
                  <td className="border lato-regular border-gray-300 text-center md:py-1 lg:py-2  md:text-xs lg:text-sm">
                    {data.userID}
                  </td>
                  <td className="border flex items-center  lato-regular py-4  border-gray-300">
                    <div className="w-full flex md:px-2 lg:px-0 justify-center items-center ">
                      <span className="text-sm ">{data.depature}</span>
                      <span className="text-xs mx-1">transit</span>
                      <span className="text-sm ">{data.arrival}</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 md:py-1 lg:py-2  lato-regular text-xs">
                    <div className="flex justify-center gap-x-2 md:px-1 border-none outline-none items-center">
                      <svg
                        className="md:w-2 md:h-2 lg:w-4 lg:h-4"
                        viewBox="0 0 7 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.5"
                          width="7"
                          height="7"
                          rx="3.5"
                          fill="#FF5C00"
                          fillOpacity="0.5"
                        />
                      </svg>
                      <p className="lato-regular">{data.status}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
