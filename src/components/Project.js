import React, { useState, useEffect } from "react";

function Project() {
  return (
      <div class="rounded overflow-hidden shadow-lg bg-cards transform hover:scale-105 duration-500 ease-in-out">
        <div class="px-4 py-2">
          <div class="font-bold text-xl mb-2 text-offWhite">Extra Project</div>
          <p class="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-accent rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            HTML
          </span>
          <span class="inline-block bg-accent rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Tailwind CSS
          </span>
          <span class="inline-block bg-accent rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            React
          </span>
        </div>
      </div>
  );
}

export default Project;
