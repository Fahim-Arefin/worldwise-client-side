# WorldWise

WorldWise is a web-based platform designed to empower users to record details about cities they've recently visited by locating them on a world map. It provides an interactive map that facilitates precise location selection. Users have the ability to create entries for cities, complete with visitation dates. Additionally, they can access a comprehensive list of their visited cities and have the option to remove cities from this list.

## Live Application

To access the live version of WorldWise and start tracking your visited cities, please visit [WorldWise Web App](https://world-wise-application.netlify.app/).

## Key Features

1. **Integration of World Map**

   - Seamlessly integrates a world map with interactive capabilities.
   - Allows users to search for and choose cities on the map to mark as visited.
   - Visited cities are represented as markers on the map for easy reference.

2. **Browse Visited City List**

   - Users can effortlessly review their recently visited cities, with the option to click on them for quick navigation to the corresponding map location.
   - The "Read" operation permits the viewing of the list of visited cities, presenting details such as city names, visitation dates, and user-supplied notes.
   - This feature ensures easy access to reminisce about the places users have explored.

3. **Adding New Visited Cities**

   - The "Create" feature enables users to append new cities to their list of visited places.
   - Users can input the city's name they visited, along with optional information such as the date of the visit and personal notes.
   - After providing the necessary information and clicking the "Submit" button, the new city is added to the list of visited cities within the app.

4. **City Deletion**

   - The "Delete" functionality grants users the ability to eliminate cities from their list.
   - Users might want to remove cities that were added in error or are no longer relevant.
   - The "Delete" option offers users the ability to efficiently manage and streamline their list of visited cities.

5. **Optimization for Enhanced Performance**

   - Lazy loading of the `bundle.js` file enhances app performance, ensuring a smooth and responsive user experience without extended loading times.
   - The entire app is optimized through techniques like React memoization, `useMemo`, and `useCallback` hooks to minimize unnecessary re-renders and enhance efficiency.

6. **Responsive Design for All Devices**

   - The application is developed with responsiveness in mind, ensuring a seamless user experience across various devices, including mobile phones, tablets, laptops, and desktop computers.

## State Management

- State management within the app is achieved through the utilization of the `useReducer` hook. The initial state, defined as `initialValue`, encompasses fields for `cities`, `isLoading`, `currentCity`, and `error`.
- The `reducer` function is responsible for overseeing state transitions in response to various actions. It updates the state based on different action types, such as "loading," "cities/loaded," "city/loaded," "cities/created," "cities/deleted," and "rejected."
- The reducer handles each action type as follows:
  - "loading": Sets `isLoading` to true.
  - "cities/loaded": Sets `isLoading` to false and updates the `cities` state with the loaded data.
  - "city/loaded": Sets `isLoading` to false and updates the `currentCity` state with the loaded data.
  - "cities/created": Sets `isLoading` to false, updates the `currentCity` state with the newly created city, and adds it to the `cities` list.
  - "cities/deleted": Sets `isLoading` to false and removes the deleted city from the `cities` list.
  - "rejected": Sets `isLoading` to false and updates the `error` state with an error message.
