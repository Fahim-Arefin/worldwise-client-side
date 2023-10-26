import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CitiesProvider>
      <App />
    </CitiesProvider>
  </AuthProvider>
);

/*
                                        React Router
-------------------------------------------------------------------------------------------------

### Setup
-------------

1. install "npm i react-router-dom" 
2. create pages folder insied src and create some pages inside pages folder
3. go to App.jsx and declare all the existing Routes

##
            import { BrowserRouter, Route, Routes } from "react-router-dom"
            import Product from './pages/Product'
            import Pricing from './pages/Pricing'
            import Homepage from './pages/Homepage'
            import PageNotFound from './pages/PageNotFound'

            function App() {
              return (
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="product" element={<Product/>}/>
                    <Route path="pricing" element={<Pricing/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                  </Routes>
                </BrowserRouter>
              )
            }

            export default App

    if we write "http://localhost:5173/product" on browser React Router will render Product component
    if we write "http://localhost:5173/asdasd" on browser React Router will render PageNotFound bcz no path is matched



##
        function App() {
        return (
          <>
          <h1>Hello </h1> //stay always
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="product" element={<Product/>}/>
              <Route path="pricing" element={<Pricing/>}/>
            </Routes>
          </BrowserRouter>
          </>
        )
        }

        if we "<h1>Hello </h1>"" write this it will stay always in every routes

### Single Page Application
--------------------------------------------

## we dont want to reload a page rather we just replace DOM element and make 
   user feel that we actually reload which is just a feel
   
## if we add "<a href="/pricing">go to pricing</a>" and click this 
   our pricing route will execute and we will see Pricing component reloaded
   But in this way we actually reload the whole page.
   In Single Page Application we dont want to do this


## <Link to="/pricing" >go to pricing</Link> we do it it will not reload page
   Maintaining SPA we use Link rather than anchor tag
   

## <NavLink> is used instead of <Link> bcz its add active class to the currently activated link


Css module
-------------------------
## same name as component  
## import Styles from "./name.module.css"; 
## className={Styles.classnames}

Global Css
---------------------------
## index.css is a global css file 


##We use global class active which will be added to link when a link is activated

  .nav :global(.active) {
    background-color: green;
  }

        instal lMap
------------------------------
## using react leaflet library we impliment map

# go to react leatlet website and read doc

# install ->  npm i react-leaflet leaflet

# go to https://unpkg.com/leaflet@1.9.4/dist/leaflet.css this link and 
  import the css link into index.css file

# go https://react-leaflet.js.org/ here and copy paste the render code inside your component (Map component in our case)

                              
                      render(
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={position}>
                            <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                          </Marker>
                        </MapContainer>
                      )

#now import this in the component import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

# we should give a heght and width of the map container otherwise map will not shown

## to customize map pop up style we use Map.module.css file 
react leaflet will add some classes glabally to the marked popup item 
so we need to grab it globally

install daisy ui -> just import it and use as a plugin

## for use date picker we use React datePicker package 'npm i react-datepicker' 
*/
