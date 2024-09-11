# Contact Management App with Charts and Maps

## Description

This project is a contact management application built with React, TypeScript, TailwindCSS, and Redux for handling contacts, and React Query for fetching and managing COVID-19 data. The app includes a dashboard with a line graph and a React Leaflet map that visualizes global and country-specific COVID-19 data.

## Features

- **Contact Management**:
  - Form for adding new contacts
  - List of all added contacts
  - View, edit, and delete contacts
  - Redux for state management

- **Dashboard**:
  - Line graph showing COVID-19 case fluctuations over time
  - React Leaflet map with markers showing country-specific COVID-19 data (active cases, recovered cases, deaths)

## Technologies Used

- **Frontend**: React, TypeScript, TailwindCSS
- **State Management**: Redux
- **Data Fetching**: React Query
- **Charts**: Recharts
- **Maps**: React Leaflet

## API Endpoints Used

- **Worldwide Data of Cases**:
  - **URL**: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
  - **Description**: Provides the total number of cases, deaths, and recovered cases worldwide.

- **Country Specific Data of Cases**:
  - **URL**: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
  - **Description**: Provides COVID-19 data for each country including active cases, recovered cases, and deaths.

- **Graph Data for Cases with Date**:
  - **URL**: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)
  - **Description**: Provides historical data of cases over time for generating the line graph.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/munjalSaksham71/taiyo-assignment.git
   cd taiyo-assignment
   npm install
   npm start
   ```
The application will be available at http://localhost:5173.


- **Running the App**:
  After following the setup instructions, the app should start locally, and you can interact with both the contact management features and the COVID-19 dashboard.
