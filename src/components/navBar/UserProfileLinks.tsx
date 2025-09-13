/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function UserProfileLinks({links, text}: any) {
  return (
   
      <div className="mt-3 px-2 space-y-1 flex flex-col">
        <a
          href={links}
          className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
          target="_blank"
        >
          {text}
        </a>

      </div>
  );
}
