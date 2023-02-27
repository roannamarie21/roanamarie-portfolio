import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/roanna.png"
                alt="Donnna"
              />
            </div>
            <div className="banner-text font-2xl">
              <h1>Roanna Marie Jugalbot!</h1>
              <hr />
              <p>
             4rth year BSCS student.
              </p> 
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
