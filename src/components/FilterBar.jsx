import React from "react";

function FilterBar({
  genderFilter,
  setGenderFilter,
  experienceFilter,
  setExperienceFilter,
  handleFilterChange,
}) {
  return (
    <div className="flex gap-2">
      <div className="relative">
        <label
          htmlFor="gender-filter"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Gender
        </label>
        <select
          id="gender-filter"
          value={genderFilter}
          onChange={(e) => {
            setGenderFilter(e.target.value);
            handleFilterChange();
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
      </div>

      <div className="relative">
        <label
          htmlFor="experience-filter"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Experience
        </label>
        <select
          id="experience-filter"
          value={experienceFilter}
          onChange={(e) => {
            setExperienceFilter(e.target.value);
            handleFilterChange();
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
          <option value="5">5 Years</option>
          <option value="6">6 Years</option>
          <option value="7">7 Years</option>
          <option value="8">8 Years</option>
          <option value="9">9 Years</option>
          <option value="10">10 Years</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
