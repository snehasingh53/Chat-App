import React from "react";
import Moment from "react-moment";

const Message = ({ message: { text, user, color, time }, nickname }) => {
  const trimmedName = nickname.trim().toLowerCase();
  const firstLetter = user.charAt(0).toUpperCase();
  const isSentByCurrentUser = user.toLowerCase() === trimmedName;

  const calendarStrings = {
    lastDay: "[Yesterday at] LT",
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L",
  };

  return isSentByCurrentUser ? (
    <div className="flex justify-end mb-2">
      <div className="flex flex-col items-end max-w-[80%] bg-green-500 text-white rounded-lg p-2 shadow-md">
        <div className="mb-1 text-xs text-gray-200">
          <Moment calendar={calendarStrings}>{time}</Moment>
        </div>
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div className="flex justify-start mb-2">
      <div className="flex items-start space-x-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: color }}
        >
          {firstLetter}
        </div>
        <div className="flex flex-col max-w-[80%] bg-white text-gray-800 rounded-lg p-2 shadow-md">
          <div className="mb-1 text-xs">
            <span className="font-semibold">{user}</span> ·{" "}
            <Moment calendar={calendarStrings}>{time}</Moment>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
