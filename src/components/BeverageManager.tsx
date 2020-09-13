import React, { useEffect, useState } from 'react';

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
    const [coffeeRequests, setCoffeeRequests] = useState<CoffeeRequestsUI[]>([])

    // Create async function for fetching welcome message
    const fetchMessage = async () => {
        // Use Fetch API to fetch '/api' endpoint
        const message = await fetch('/api')
            .then(res => res.text()) // process incoming data

        // Update welcomeMessage state
        // setWelcomeMessage(message)
    }

    // Use useEffect to call fetchMessage() on initial render
    useEffect(() => {
        fetchMessage()
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
        <div>
            <button onClick={fetchCoffeeRequests}>Fetch users</button>
            {coffeeRequests.length > 0 && <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Delivery Coordinates</th>
                        <th>Marshmallow Number</th>
                        <th>Satellite Name</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {coffeeRequests.map((coffeeRequest: CoffeeRequestsUI) => (
                        <tr key={coffeeRequest.ID}>
                            <td>{coffeeRequest.ID}</td>
                            <td>{coffeeRequest.CODE}</td>
                            <td>{coffeeRequest.DELIVERY_COORDINATES}</td>
                            <td>{coffeeRequest.SATELLITE_NAME}</td>
                            <td>{coffeeRequest.MARSHMALLOW_NUMBER}</td>
                            <td>{coffeeRequest.STATUS}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    )
}

export default BeverageManager;