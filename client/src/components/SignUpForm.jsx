import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    errorText: {
        color: 'red'
    },
}));

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(e) {
        e.preventDefault();
        const first_name = document.getElementById('firstName').value;
        const last_name = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = { first_name, last_name, email, password };
        this.props.processForm(user);
    }

    render() {
        return <SignUp formSubmit={this.formSubmit} errors={this.props.errors} clearErrors={this.props.clearErrors}/>;
    }
}

function SignUp(props) {
    const classes = useStyles();
    const isError = Object.values(props.errors).some(error => error !== null)

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                error={isError}
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        <Typography variant="body2" display="block" className={classes.errorText}>
                                {props.errors.firstName}
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                error={isError}
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                            <Typography variant="body2" display="block" className={classes.errorText}>
                                {props.errors.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                error={isError}
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                            <Typography variant="body2" display="block" className={classes.errorText}>
                                {props.errors.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                error={isError}
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Typography variant="body2" display="block" className={classes.errorText}>
                                {props.errors.password}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={props.formSubmit}
                    >
                            Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="./#/login" variant="body2" onClick={props.clearErrors}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default SignUpForm;