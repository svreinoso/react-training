import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import { httpGet } from "../../../services/httpServices";
import { Link } from "react-router-dom";

class SectionHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false,
      movies: [],
      currentPage: 1,
      title: ""
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  loadMovies() {
    console.log(this.state);
    let url = "movies/?page=" + this.state.currentPage;
    if (this.state.title != "") {
      url += `&title=${this.state.title}`;
    }
    httpGet(url, response => {
      this.setState({ movies: this.state.movies.concat(response.movies) });
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    if (
      this.props.search &&
      this.props.search.match &&
      this.props.search.match.params &&
      this.props.search.match.params.title
    ) {
      console.log(this.props.search.match.params.title);
      this.setState({ title: this.props.search.match.params.title }, () => {
        this.loadMovies();
      });
    } else {
      this.loadMovies();
    }
    console.log(this.props);
    // const movieId = this.props.match.params["movieId"];
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var windowScrollTop = window.pageYOffset;
    var scrollHeight = document.documentElement.offsetHeight;
    var windowHeight = window.innerHeight;

    if (windowScrollTop + windowHeight === scrollHeight) {
      this.setState({ currentPage: this.state.currentPage + 1 });
      this.loadMovies();
    }
  };

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
    const MovieItem = function(props) {
      return (
        <GridItem xs={12} sm={3} className={classes.marginLeft}>
          <div>
            <h4>{props.value.title}</h4>
          </div>
          <Link to={`/movie-details-page/${props.value.id}`}>
            <div>
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
            </div>
          </Link>
        </GridItem>
      );
    };

    const MoviesList = function(props) {
      const movies = props.movies;
      const listItems = movies.map(number => (
        <MovieItem key={number.id} value={number} />
      ));
      return <GridContainer>{listItems}</GridContainer>;
    };

    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Movies</h2>
          </div>
          <MoviesList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionHome);
