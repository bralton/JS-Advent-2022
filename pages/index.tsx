import type { NextPage } from "next";
import Head from "next/head";
import { Button, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface Day{
  number: number;
  title: string;
  description: string;
}

const Home: NextPage = () => {
  const days:Day[] = [
    {"number":1, "title": "Pomodoro Timer", "description":"A simple pomodoro timer with an alert when it is finished"},
    {"number":2, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":3, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":4, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":5, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":6, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":7, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":8, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":9, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":10, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":11, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":12, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":13, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":14, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":15, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":16, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":17, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":18, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":19, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":20, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":21, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":22, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":23, "title": "Shop Front", "description":"Shopping basket of meals"},
    {"number":24, "title": "Shop Front", "description":"Shopping basket of meals"}
  ]
    
    const renderCard = (day:Day):JSX.Element => {
      return (
      <Card
          bg="light"
          key="day1"
          text="dark"
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>Day {day.number} - {day.title}</Card.Title>
            <Card.Text>
             {day.description}
            </Card.Text>
            <Button href={`/days/${day.number}`} color="primary">
              Take a look
            </Button>
          </Card.Body>
        </Card>  
      )
    }
    
   const renderRow = (daysForRow: Day[]):JSX.Element => {
     return (
       <Row xs='1' sm='2' md='4' className='m-2'>
       {daysForRow.map((day) => <Col key={`day-${day.number}`}>{renderCard(day)}</Col>)}
       </Row>
     )
   }
   
  const renderGrid = ():JSX.Element => { 
    let grid = [];
    const chunkSize = 4;
    for (let i = 0; i < days.length; i += chunkSize) {
      const chunk = days.slice(i, i + chunkSize);
      grid.push(renderRow(chunk));
    }
    console.log("look here", grid)
    return (<>{grid}</>);
  }  
  
  return (
    <div>
      <Head>
        <title>2022 JS Advent Calendar</title>
        <meta name="description" content="2022 Javascript Advent Calendar" />
      </Head>

      <main>
        {renderGrid()}
      </main>
      
      <footer></footer>
    </div>
  );
};

export default Home;
