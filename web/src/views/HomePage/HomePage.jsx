import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      loginModel: {
        email: "",
        password: ""
      }
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  inputChange(event, inputName) {
    let loginModel = this.state.loginModel;
    loginModel[inputName] = event.target.value;
    this.setState({ loginModel: loginModel });
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />

        {/* <Parallax image={require("assets/img/bg4.jpg")}>
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
        </Parallax> */}

        {/* <div className={classes.section}>
          <div className={classes.container}>
            <div id="typography">
              <div className={classes.title}>
                <h2>Typography</h2>
              </div>
              
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <h4>Rounded Image</h4>
                  <img
                    src={image}
                    alt="..."
                    className={classes.imgRounded + " " + classes.imgFluid}
                  />
                </GridItem>
                <GridItem xs={12} sm={2} className={classes.marginLeft}>
                  <h4>Circle Image</h4>
                  <img
                    src={image}
                    alt="..."
                    className={
                      classes.imgRoundedCircle + " " + classes.imgFluid
                    }
                  />
                </GridItem>
                <GridItem xs={12} sm={2} className={classes.marginLeft}>
                  <h4>Rounded Raised</h4>
                  <img
                    src={image}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                </GridItem>
                <GridItem xs={12} sm={2} className={classes.marginLeft}>
                  <h4>Circle Raised</h4>
                  <img
                    src={image}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRoundedCircle +
                      " " +
                      classes.imgFluid
                    }
                  />
                </GridItem>
              </GridContainer>
            
            </div>
          </div>
        </div> */}

        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(HomePage);
