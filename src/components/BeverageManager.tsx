import React, { useEffect, useState } from 'react';
import './BeverageManager.css';
const FilterableTable = require('react-filterable-table');


// Create interface for user object (TypeScript only)
interface CoffeeRequestsUI {
  ID: string;
  CODE: string;
  DELIVERY_COORDINATES: string;
  SATELLITE_NAME: string;
  MARSHMALLOW_NUMBER: number;
  STATUS: string;
}

function BeverageManager() {
// Prepare state hook for welcome message
    // const [welcomeMessage, setWelcomeMessage] = useState('')

    // Prepare state hook for users list
    // Note: <UserUI[]> is for TypeScript
    // It specifies the shape of usersList state
    const [coffeeRequests, setCoffeeRequests] = useState<CoffeeRequestsUI[]>([]);
    const columns = [
      {name: 'id', displayName: 'ID', inputFilterable: true, sortable: true},
      {name: 'code', displayName: 'Code', inputFilterable: true, sortable: true},
        {name: 'operator_name', displayName: 'Operator_name', inputFilterable: true, sortable: true},
      {name: 'delivery_coordinates', displayName: 'Delivery_coordinates', inputFilterable: true, sortable: true},
      {name: 'satellite_name', displayName: 'Satellite_name', inputFilterable: true, sortable: true},
      {name: 'marshmallow_number', displayName: 'Marshmallow_number', inputFilterable: true, sortable: true},
      {name: 'status', displayName: 'Status', inputFilterable: true, sortable: true}
    ];


    // Use useEffect to call fetchMessage() on initial render
    useEffect(() => {
        fetchCoffeeRequests()
    }, []);

    // Create async function for fetching users list
    const fetchCoffeeRequests = async () => {
        const coffeeRequests = await fetch('/orders/all')
            .then(res => res.json());// Process the incoming data

        // Update usersList state
        setCoffeeRequests(coffeeRequests)
    };
    if (coffeeRequests) {
        console.log('usersList', coffeeRequests);
    }

    return (
        <>
        {coffeeRequests ? <FilterableTable
        initialSort="name"
        initialSortDir={true}
        data={coffeeRequests}
        fields={columns}
        noRecordsMessage="There are no coffee requests to display"
        headerVisible={true}
        bottomPagerVisible={false}
        recordCountNamePlural="Coffee Requests"
        loadingMessage="Brewing Coffees, Please wait"
        noFilteredRecordsMessage="No Coffee Requests Found"
        pagersVisible={true}
        pageSizes={null}
        autofocusFilter={true}
      /> : null }
      </>
    )
}

export default BeverageManager;