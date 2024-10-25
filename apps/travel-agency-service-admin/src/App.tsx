import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { DestinationList } from "./destination/DestinationList";
import { DestinationCreate } from "./destination/DestinationCreate";
import { DestinationEdit } from "./destination/DestinationEdit";
import { DestinationShow } from "./destination/DestinationShow";
import { AuthTokenList } from "./authToken/AuthTokenList";
import { AuthTokenCreate } from "./authToken/AuthTokenCreate";
import { AuthTokenEdit } from "./authToken/AuthTokenEdit";
import { AuthTokenShow } from "./authToken/AuthTokenShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"TravelAgencyService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="Destination"
          list={DestinationList}
          edit={DestinationEdit}
          create={DestinationCreate}
          show={DestinationShow}
        />
        <Resource
          name="AuthToken"
          list={AuthTokenList}
          edit={AuthTokenEdit}
          create={AuthTokenCreate}
          show={AuthTokenShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
