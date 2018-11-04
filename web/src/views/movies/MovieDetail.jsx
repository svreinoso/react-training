import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import { httpGet } from "services/httpServices";
import ReactPlayer from "react-player";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        content: [{}]
      }
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const movieId = this.props.match.params["movieId"];
    httpGet("movies/" + movieId, response => {
      this.setState({ movie: response });
    });
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Home"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Material Kit React.</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.sections}>
            <div className={classes.container}>
              <div className={classes.title}>
                <h2>{this.state.movie.title}</h2>
                <GridContainer>
                  <div>
                    <ReactPlayer
                      url={this.state.movie.content[0].link}
                      controls
                      playing
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <br/>
                  <div>
                    <img
                      src={this.state.movie.fullImage}
                      alt="..."
                      className={
                        classes.imgRoundedCircle +
                        " " +
                        classes.imgFluid +
                        " " +
                        classes.width100
                      }
                    />
                  </div>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(MovieDetails);
