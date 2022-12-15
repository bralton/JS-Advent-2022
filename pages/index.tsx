import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>2022 JS Advent Calendar</title>
        <meta name="description" content="2022 Javascript Advent Calendar" />
      </Head>

      <main>
        <Card
          bg="light"
          key="day1"
          text="dark"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>Day 1 - Pomodoro Timer</Card.Title>
            <Card.Text>
              A simple pomodoro timer with an alert when it is finished.
            </Card.Text>
            <Button href="/days/1" color="primary">
              Take a look
            </Button>
          </Card.Body>
        </Card>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
