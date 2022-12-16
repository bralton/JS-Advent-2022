import type { NextPage } from "next";
import Head from "next/head";
import { Button, Row, Col, Card } from "react-bootstrap";

interface Day {
  number: number;
  title: string;
  description: string;
}

const Home: NextPage = () => {
  const days: Day[] = [
    {
      number: 1,
      title: "Pomodoro Timer",
      description: "A simple pomodoro timer with an alert when it is finished",
    },
    { number: 2, title: "Shop Front", description: "Shopping basket of meals" },
    { number: 3, title: "Coming Soon", description: "Coming Soon" },
    { number: 4, title: "Coming Soon", description: "Coming Soon" },
    { number: 5, title: "Coming Soon", description: "Coming Soon" },
    { number: 6, title: "Coming Soon", description: "Coming Soon" },
    { number: 7, title: "Coming Soon", description: "Coming Soon" },
    { number: 8, title: "Coming Soon", description: "Coming Soon" },
    { number: 9, title: "Coming Soon", description: "Coming Soon" },
    {
      number: 10,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 11,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 12,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 13,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 14,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 15,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 16,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 17,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 18,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 19,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 20,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 21,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 22,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 23,
      title: "Coming Soon",
      description: "Coming Soon",
    },
    {
      number: 24,
      title: "Coming Soon",
      description: "Coming Soon",
    },
  ];

  const renderCard = (day: Day): JSX.Element => {
    return (
      <Card
        bg="light"
        key="day1"
        text="dark"
        style={{ height: "100%" }}
        className="mb-2"
      >
        <Card.Body className="d-flex flex-column">
          <Card.Title>
            Day {day.number} - {day.title}
          </Card.Title>
          <Card.Text>{day.description}</Card.Text>
          <Button
            href={`/days/${day.number}`}
            color="primary"
            disabled={day.title === "Coming Soon"}
            className="mt-auto"
          >
            Take a look
          </Button>
        </Card.Body>
      </Card>
    );
  };

  const renderRow = (daysForRow: Day[]): JSX.Element => {
    return (
      <Row xs="1" sm="2" md="4" className="mx-2">
        {daysForRow.map((day) => (
          <Col key={`day-${day.number}`} className="mb-2">
            {renderCard(day)}
          </Col>
        ))}
      </Row>
    );
  };

  const renderGrid = (): JSX.Element => {
    let grid = [];
    const chunkSize = 4;
    for (let i = 0; i < days.length; i += chunkSize) {
      const chunk = days.slice(i, i + chunkSize);
      grid.push(renderRow(chunk));
    }
    console.log("look here", grid);
    return <>{grid}</>;
  };

  return (
    <div>
      <Head>
        <title>2022 JS Advent Calendar</title>
        <meta name="description" content="2022 Javascript Advent Calendar" />
      </Head>

      <main className="m-0 py-5 bg-dark">{renderGrid()}</main>

      <footer></footer>
    </div>
  );
};

export default Home;
