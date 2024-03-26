import React from 'react';

// Importing all of everything
import Home from "./components/Home.js";

import Place1 from "./components/towns/place1/Place.js";
import Place2 from "./components/towns/place2/Place.js";
import Place3 from "./components/towns/place3/Place.js";
import Place4 from "./components/towns/place4/Place.js";
import Place5 from "./components/towns/place5/Place.js";
import Place6 from "./components/towns/place6/Place.js";
import Place7 from "./components/towns/place7/Place.js";
import Place8 from "./components/towns/place8/Place.js";
import Place9 from "./components/towns/place9/Place.js";
import Place10 from "./components/towns/place10/Place.js";

// Importing Router Dom which allows us to link to different pages
import { Route, Routes, useLocation} from 'react-router-dom';

function AllRoutes() {
    // Making the website understand where it is
    const location = useLocation();
    return (
        // Making the routes
        <Routes location={location} key={location.pathname}>
            {/* The index is the main page. Whenever the website is loaded, it loads home */}
            <Route index element={<Home />} />

            {/* Creating routes to all of the other pages. it is named this way so we can use a for loop to link to each product */}
            <Route path="place1" element={<Place1 />} />
            <Route path="place2" element={<Place2 />} />
            <Route path="place3" element={<Place3 />} />
            <Route path="place4" element={<Place4 />} />
            <Route path="place5" element={<Place5 />} />
            <Route path="place6" element={<Place6 />} />
            <Route path="place7" element={<Place7 />} />
            <Route path="place8" element={<Place8 />} />
            <Route path="place9" element={<Place9 />} />
            <Route path="place10" element={<Place10 />} />

        </Routes>
    );
}

export default AllRoutes;