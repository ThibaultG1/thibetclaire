import React, { useEffect, useState } from "react";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Box } from "@mui/system";
import WebsiteButton from "./buttons/WebsiteButton";
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
        px: { xs: 0, sm: 3 },
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
  if (!timeLeft.hasOwnProperty("MOIS")) {
    timerItems.push(<Grid item>{timeLeft}</Grid>);
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
    <Typography sx={{ fontWeight: "bold", fontSize: "calc(30px + 1vw)" }}>
      {duration}
    </Typography>
    <Typography sx={{ fontWeight: "bold", fontSize: "calc(7px + 1vw)" }}>
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
      timeLeft = dDay;
    } else {
      timeLeft = after;
    }
  }

  return timeLeft;
};

const dDay = (
  <Box>
    <Typography sx={{ fontWeight: "bold", fontSize: 40 }}>
      C'est le Jour J ! 😍
    </Typography>
    <h2>Suivez le mariage à distance :</h2>
    <WebsiteButton link="https://www.facebook.com/groups/718487236141164" />
  </Box>
);

const after = (
  <Typography sx={{ fontWeight: "bold", fontSize: 40 }}>
    Merci d'être venus ! 🥰
  </Typography>
);

export default Timer;
