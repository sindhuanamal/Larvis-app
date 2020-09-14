import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

interface CoffeeOrdersUI {
  id: string;
  code: string;
  operator_name: string;
  delivery_coordinates: string;
  satellite_name: string;
  marshmallow_number: number;
  status: string;
}

function CurrentOrder() {
  const [coffeeOrders, setCoffeeOrders] = useState<CoffeeOrdersUI[]>([])
  const fetchCoffeeOrders = async () => {
  const coffeeOrders = await fetch('/orders/all')
    .then(res => res.json());
    setCoffeeOrders(coffeeOrders)
  };

  useEffect(() => {
    fetchCoffeeOrders();
  }, [coffeeOrders]);

  let orders = coffeeOrders.map((order, key) => {
    return (
      <tr key={key}>
        <td>{order.id}</td>
        <td>{order.code}</td>
        <td>{order.operator_name}</td>
        <td>{order.delivery_coordinates}</td>
        <td>{order.satellite_name}</td>
        <td>{order.marshmallow_number}</td>
        <td>{order.status}</td>
      </tr>
    )
  });
  return (
    <OrderListWrapper>
      <OrderList>
        <h2>Current Orders</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Code</th>
                <th>Operator_Name</th>
                <th>Delivery_Coordinates</th>
                <th>Satellite_Name</th>
                <th>Marshmallow_Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders}
            </tbody>
          </table>
          {
            !orders.length &&
              <NoOrdersText>
                No orders yet... but I can smell them coming!
              </NoOrdersText>
          }
      </OrderList>
    </OrderListWrapper>
  )
}

function Operator() {
  const operatorNameRef = React.useRef<HTMLInputElement>(null);
  const marshMallowNumberRef = React.useRef<HTMLSelectElement>(null);
  const codeRef = React.useRef<HTMLSelectElement>(null);

  let coffees = ['Latte', 'Soy Latte', 'Flat White', 'Long Black', 'Cappuccino', 'Mocha'];
  let marshmallowNumberValues = [1,2,3,4,5,6,7,8];

  let coffeeTypes = coffees.map((coffee, key) => {
    return <option key={key} value={coffee}>{coffee}</option>
  });

  let number_of_marshmallows = marshmallowNumberValues.map((size, key) => {
    return <option key={key} value={size}>{size}</option>
  });

  const placeOrder = async (e) => {
    e.preventDefault();
    let newOrder = {
      operator_name: operatorNameRef && operatorNameRef.current && operatorNameRef.current.value,
      marshmallow_number: marshMallowNumberRef && marshMallowNumberRef.current && marshMallowNumberRef.current.value,
      code: codeRef && codeRef.current && codeRef.current.value,
    };
    await fetch('/orders/createOrder',{
      method:'post',
      headers: {'Content-type':'application/json','Cache-Control': 'no-cache'},
      body:JSON.stringify(newOrder)
    }).then(r=>r.json());
  };

  return (
    <Wrapper>
      <CurrentOrder/>
      <OrderForm>
        <Container>
          <FormHorizontal
            onSubmit={placeOrder}>
            <h2>I want a coffee too!</h2>

            <FormGroup>
              <Label>Your name</Label>
                <FormControl
                  required
                  type="text"
                  ref={operatorNameRef}
                  placeholder="Enter your name"
                />
            </FormGroup>

            <FormGroup>
              <Label>Coffee Type</Label>
              <div>
                <Select
                  required
                  name="coffee"
                  ref={codeRef}>
                  <option defaultValue=''>Please Select</option>
                  {coffeeTypes}
                </Select>
              </div>
            </FormGroup>

            <FormGroup>
                <Label>What Number of Marshmallows?</Label>
              <div>
                <Select
                  required
                  name="marshmallowNumber"
                  ref={marshMallowNumberRef}>
                  <option defaultValue=''>Please Select</option>
                  {number_of_marshmallows}
                </Select>
              </div>
            </FormGroup>
            <PlaceOrder type="submit" value="Place my Order!" />
          </FormHorizontal>
        </Container>
      </OrderForm>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
`;

const OrderListWrapper = styled.div`
  padding: 32px;
`;

const OrderList = styled.div`
  margin-bottom: 16px;
`;

const OrderForm = styled.div`
  display: flex;
  width: 100%;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
`;

const Container = styled.div`
  padding: 32px;
`;

const FormHorizontal = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

const FormControl = styled.input`
  display: flex;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
`;

const Select = styled.select`
  display: flex;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
`;

const Label = styled.label`
  padding-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  font-family: Helvetica, sans-serif;
`;

const NoOrdersText = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
`;

const PlaceOrder = styled.input`
  margin-left: 136px;
  margin-top: 32px;
  background-color: #007DC5;
  height: 32px;
  border-radius: 16px;
  padding: 4px 24px;
  color: #ffffff;
  border: none;
  font-weight: 500;
  font-size: 14px;
  border: none;
`;

export default Operator;
