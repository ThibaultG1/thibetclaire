import React, { useEffect, useState } from "react";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const Timer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Card
      variant="outlined"
      sx={{
        opacity: "0.83",
        borderRadius: 2,
        px: 3,
        mb: 2,
      }}
    >
      <CardContent>
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 2, sm: 4 }}
          sx={{ textAlign: "center" }}
        >
          <TimerItems timeLeft={timeLeft} />
        </Grid>
      </CardContent>
    </Card>
  );
};

const TimerItems = ({ timeLeft }) => {
  const timerItems = [];
  if (typeof timeLeft === "string") {
    timerItems.push(
      <Grid item>
        <Typography sx={{ fontWeight: "bold", fontSize: 40 }}>
          {timeLeft}
        </Typography>
      </Grid>
    );
  } else {
    Object.keys(timeLeft).forEach((interval) => {
      timerItems.push(
        <TimerItem
          duration={timeLeft[interval]}
          scale={interval}
          key={interval}
        />
      );
    });
  }

  return timerItems;
};

const TimerItem = ({ duration, scale }) => (
  <Grid item>
    <Typography sx={{ fontWeight: "bold", fontSize: 50 }}>
      {duration}
    </Typography>
    <Typography sx={{ fontWeight: "bold", fontSize: "calc(10px + 1vw)" }}>
      {scale}
    </Typography>
  </Grid>
);

const calculateTimeLeft = (endDate) => {
  const end = dayjs(endDate);
  const now = dayjs();
  const timeBetween = dayjs.duration(end.diff(now));

  let timeLeft = {};

  if (timeBetween.asSeconds() > 0) {
    timeLeft = {
      MOIS: timeBetween.months(),
      JOURS: timeBetween.days(),
      HEURES: timeBetween.hours(),
      MINUTES: timeBetween.minutes(),
      SECONDES: timeBetween.seconds(),
    };
  } else {
    if (timeBetween.asDays() > -1) {
      timeLeft = "C'est le jour J !";
    } else {
      timeLeft = "Merci d'être venus !";
    }
  }

  return timeLeft;
};

export default Timer;
