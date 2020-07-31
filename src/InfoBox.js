import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, isRed, isGray, active, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox 
        ${active && "infoBox--selected"} 
        ${isRed && "infoBox--red"} 
        ${isGray && "infoBox--gray"}
      `} // "--" usually used as modifies elements while "__" used as descripts element
    >
      <CardContent>
        {/* Title i.e. Conronavirus cases */}
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>

        {/* +120k Number of cases */}
        <h2
          className={`infoBox_cases ${!isRed && "infoBox__cases--green"} ${
            isGray && "infoBox__cases--gray"
          }`}
        >
          {cases}
        </h2>

        {/* 1.2M Total */}
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
