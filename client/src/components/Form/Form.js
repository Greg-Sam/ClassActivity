import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  // textAreaAutosize: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: '25ch'
  // }
}));


  

const Form = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="title"
            style={{ margin: 8 }}
            placeholder="Title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="title"
            style={{ margin: 8 }}
            placeholder="Title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
          variant="contained"
            onClick={props.handleAddPost}
            >Submit</Button>
        </Grid>
      </Grid>
    </div>
   
  );
}

export default Form