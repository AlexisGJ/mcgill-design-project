import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import '../static/css/main_custom.css'

import SnackbarComponent from '../components/SnackbarComponent';
import AppbarComponent from '../components/AppbarComponent';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#455a64' }, // Purple and green play nicely together.
      secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
    typography: {
        useNextVariants: true,
    },
});


const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 20,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        textAlign: 'left',
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        textAlign: 'left',
      },
      icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
      },
      details: {
        alignItems: 'center',
      },
      column: {
        flexBasis: '33.33%',
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },

      textField: {
        width: '95%',
      },
      close: {
        padding: theme.spacing.unit / 2,
      },
      message: {
        display: 'flex',
        alignItems: 'center',
      },
      snackbarContainer: {
        minWidth: 500,
      },
      snackbarMargin: {
        margin: theme.spacing.unit,
      },

      childActiveTrue: {
        color: 'green',
      },
      childActiveFalse: {
        color: 'red',
      },
  });
  

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            expanded: null,
            snackbarOpen: false,
            snackbarMessage: "",
            snackbarVariant: "info",
            data: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:1234/api/child/all")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result
                });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    showSnackbarMessage = (message, variant) => {
        this.setState({ 
            snackbarOpen: true,
            snackbarMessage: message,
            snackbarVariant: variant
        });
    }
    
    snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ snackbarOpen: false });
    };

    handleClose = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handleChange = (key, field, e) => {

        var tempData = this.state.data
        var newValue = e.target.value
        if (field == 'active') {
            newValue = !tempData[key].active;
        }
        tempData[key][field] = newValue

        this.setState({
            data: tempData
        });
        
    }

    updateChild = (row) => {
        fetch('http://localhost:1234/api/child/' + row._id + '/update', {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(row)
        })
        .then(
            response => {if (response.status == 200) {this.showSnackbarMessage("Enregistré avec succès", "success")} else {this.showSnackbarMessage("Il y a eu une erreur lors de l'enregistrement", "error")}}
        );
        console.log(row);
    }

    render() {
        const { classes } = this.props;
        const { error, isLoaded, data, expanded } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <MuiThemeProvider theme={theme}>
                        <AppbarComponent />

                        <Grid container spacing={24} className={classes.root}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={8}>
                                <Paper className={classes.paper} elevation={1}>

                                {data.map((row, key) =>
                                    <ExpansionPanel key={row._id} expanded={expanded === row._id} onChange={this.handleClose(row._id)}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <div className={classes.column}>
                                                <Typography className={classes.heading}><span className={row.active ? classes.childActiveTrue : classes.childActiveFalse}>&#9679;</span> {row.name}</Typography>
                                            </div>
                                            <div className={classes.column}>
                                                <Typography className={classes.secondaryHeading}>{row.location}</Typography>
                                            </div>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails className={classes.details}>
                                            <Grid container>
                                                <Grid item xs={4}>
                                                    <TextField
                                                        id="outlined-name-input"
                                                        label="Nom"
                                                        className={classes.textField}
                                                        type="text"
                                                        name="name"
                                                        margin="normal"
                                                        variant="outlined"
                                                        onChange={(e) => this.handleChange(key, 'name', e)}
                                                        value={row.name}
                                                    />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <TextField
                                                        id="outlined-sensorId-input"
                                                        label="ID du capteur"
                                                        className={classes.textField}
                                                        type="text"
                                                        name="sensorId"
                                                        margin="normal"
                                                        variant="outlined"
                                                        onChange={(e) => this.handleChange(key, 'collection_id', e)}
                                                        value={row.collection_id}
                                                    />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <TextField
                                                        id="outlined-location-input"
                                                        label="Location"
                                                        className={classes.textField}
                                                        type="text"
                                                        name="location"
                                                        margin="normal"
                                                        variant="outlined"
                                                        onChange={(e) => this.handleChange(key, 'location', e)}
                                                        value={row.location}
                                                    />
                                                </Grid>
                                                <Grid item xs={4}></Grid>
                                                <Grid item xs={4}>
                                                    <TextField
                                                        id="outlined-rangemin-input"
                                                        label="Range minimum"
                                                        className={classes.textField}
                                                        type="number"
                                                        name="rangemin"
                                                        margin="normal"
                                                        variant="outlined"
                                                        onChange={(e) => this.handleChange(key, 'range_min', e)}
                                                        value={row.range_min}
                                                    />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <TextField
                                                        id="outlined-rangemax-input"
                                                        label="Range maximal"
                                                        className={classes.textField}
                                                        type="number"
                                                        name="rangemin"
                                                        margin="normal"
                                                        variant="outlined"
                                                        onChange={(e) => this.handleChange(key, 'range_max', e)}
                                                        value={row.range_max}
                                                    />
                                                </Grid>

                                                <Grid item xs={4}></Grid>
                                                <Grid item xs={4}></Grid>
                                                <Grid item xs={4}>
                                                    <FormControlLabel
                                                        control={
                                                        <Switch
                                                            checked={row.active}
                                                            onChange={(e) => this.handleChange(key, 'active', e)}
                                                            color="primary"
                                                        />
                                                        }
                                                        label="Actif"
                                                    />
                                                </Grid>
                                                
                                            </Grid>
                                            
                                        </ExpansionPanelDetails>
                                        <Divider />
                                        <ExpansionPanelActions>
                                            {/* <Button size="small" onClick={this.handleClose(row._id)}>Cancel</Button> */}
                                            <Button size="small" color="primary" onClick={(e) => this.updateChild(row)}>Save</Button>
                                        </ExpansionPanelActions>
                                    </ExpansionPanel>
                                )}

                                </Paper>
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>


                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={this.state.snackbarOpen}
                            autoHideDuration={6000}
                            onClose={this.snackbarClose}
                            className={classes.snackbarContainer}
                            >

                            <SnackbarComponent
                                variant={this.state.snackbarVariant}
                                className={classes.snackbarMargin}
                                message={this.state.snackbarMessage}
                                />

                        </Snackbar>
                    </MuiThemeProvider>
                </div>

            );
        }
    }
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SettingsWrapped = withStyles(styles)(Settings);

export default SettingsWrapped;