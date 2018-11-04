import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import { httpGet } from "../../../services/httpServices";

class SectionHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false,
      movies: []
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  componentDidMount() {
    httpGet("movies", response => {
      this.setState({ movies: response.movies });
    });
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { classes } = this.props;
    const ListItem = function(props) {
      return (
        <GridItem xs={12} sm={2} className={classes.marginLeft}>
          <h4>{props.value.title}</h4>
          <img
            src={props.value.covertImage}
            alt="..."
            className={
              classes.imgRoundedCircle +
              " " +
              classes.imgFluid +
              " " +
              classes.width100
            }
          />
        </GridItem>
      );
    };

    const NumberList = function(props) {
      const numbers = props.numbers;
      const listItems = numbers.map(number => (
        <ListItem key={number.id} value={number} />
      ));
      return <GridContainer>{listItems}</GridContainer>;
    };

    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Basic Elements</h2>
          </div>
          <NumberList numbers={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionHome);
