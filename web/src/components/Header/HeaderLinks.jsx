/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Redirect } from 'react-router'


function HeaderLinks({ ...props }) {
  const { classes } = props;
  
  let user = JSON.parse(localStorage.getItem("authUser"));
  console.log(user);
  if(user){

    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="/profile-page"
            color="transparent"
            className={classes.navLink}
          >
            Profile
        </Button>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }

  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onKeyUp={event => {
              console.log(event.target);
              if(event.keyCode === 13 && event.target.value) {
                // history.push(`/movies/?title=${event.target.value}`);
                // <Redirect to={`/movies/?title=${event.target.value}`} />
                location.href = `/movies/${event.target.value}`;
              }
            }}
          />
        </div>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/login-page"
          color="transparent"
          className={classes.navLink}
        >
          Login
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/register-page"
          color="transparent"
          className={classes.navLink}
        >
          Register
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
