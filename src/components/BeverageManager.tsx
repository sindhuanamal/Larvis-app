import React, { useEffect, useState } from 'react';
import '../stylesheets/BeverageManager.css';
const FilterableTable = require('react-filterable-table');

interface CoffeeRequestsUI {
  id: string;
  code: string;
  operator_name: string;
  delivery_coordinates: string;
  satellite_name: string;
  marshmallow_number: number;
  status: string;
}

function BeverageManager() {
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

  useEffect(() => {
    fetchCoffeeRequests()
  }, []);

  const fetchCoffeeRequests = async () => {
    const coffeeRequests = await fetch('/orders/all')
      .then(res => res.json());
      setCoffeeRequests(coffeeRequests)
    };

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
