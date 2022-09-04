import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HighlightedCode from 'app/main/documentation/material-ui-components/utils/HighlightedCode';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  chipWrapper: {
    height: theme.spacing(10),
  },
});

function ChipsPlayground(props) {
  const { classes } = props;
  const [state, setState] = React.useState({
    color: 'default',
    onDelete: 'none',
    avatar: 'none',
    icon: 'none',
    variant: 'default',
    size: 'medium',
  });
  const { color, onDelete, avatar, icon, variant, size } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleDeleteExample = () => {
    console.info('You clicked the delete icon.');
  };

  const colorToCode = color !== 'default' ? `color="${color}" ` : '';
  const sizeToCode = size === 'small' ? `size="small" ` : '';
  const variantToCode = variant !== 'default' ? `variant="${variant}" ` : '';

  let onDeleteToCode;
  switch (onDelete) {
    case 'none':
      onDeleteToCode = '';
      break;
    case 'custom':
      onDeleteToCode = 'deleteIcon={<DoneIcon />} onDelete={handleDelete} ';
      break;
    default:
      onDeleteToCode = 'onDelete={handleDelete} ';
      break;
  }

  let iconToCode;
  let iconToPlayground;
  switch (icon) {
    case 'none':
      iconToCode = '';
      break;
    default:
      iconToCode = 'icon={<FaceIcon />} ';
      iconToPlayground = <FaceIcon />;
      break;
  }

  let avatarToCode;
  let avatarToPlayground;
  switch (avatar) {
    case 'none':
      avatarToCode = '';
      break;
    case 'img':
      avatarToCode = 'avatar={<Avatar src="/material-ui-static/images/avatar/1.jpg" />} ';
      avatarToPlayground = <Avatar src="/material-ui-static/images/avatar/1.jpg" />;
      break;
    case 'letter':
      avatarToCode = 'avatar={<Avatar>F</Avatar>} ';
      avatarToPlayground = <Avatar>F</Avatar>;
      break;
    default:
      break;
  }

  if (avatar !== 'none') {
    iconToCode = '';
    iconToPlayground = null;
  }

  const jsx = `
<Chip ${variantToCode}${colorToCode}${sizeToCode}${onDeleteToCode}${avatarToCode}${iconToCode}/>
`;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center">
          <Grid item className={classes.chipWrapper}>
            <Chip
              label="Chip Component"
              color={color}
              deleteIcon={onDelete === 'custom' ? <DoneIcon /> : undefined}
              onDelete={onDelete !== 'none' ? handleDeleteExample : undefined}
              avatar={avatarToPlayground}
              icon={iconToPlayground}
              variant={variant}
              size={size}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel>variant</FormLabel>
              <RadioGroup
                row
                name="variant"
                aria-label="variant"
                value={variant}
                onChange={handleChange}
              >
                <FormControlLabel value="default" control={<Radio />} label="default" />
                <FormControlLabel value="outlined" control={<Radio />} label="outlined" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel>color</FormLabel>
              <RadioGroup row name="color" aria-label="color" value={color} onChange={handleChange}>
                <FormControlLabel value="default" control={<Radio />} label="default" />
                <FormControlLabel value="primary" control={<Radio />} label="primary" />
                <FormControlLabel value="secondary" control={<Radio />} label="secondary" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel>size</FormLabel>
              <RadioGroup row name="size" aria-label="size" value={size} onChange={handleChange}>
                <FormControlLabel value="medium" control={<Radio />} label="medium" />
                <FormControlLabel value="small" control={<Radio />} label="small" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel>icon</FormLabel>
              <RadioGroup row name="icon" aria-label="icon" value={icon} onChange={handleChange}>
                <FormControlLabel value="none" control={<Radio />} label="none" />
                <FormControlLabel value="icon" control={<Radio />} label="icon" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel>avatar</FormLabel>
              <RadioGroup
                row
                name="avatar"
                aria-label="avatar"
                value={avatar}
                onChange={handleChange}
              >
                <FormControlLabel value="none" control={<Radio />} label="none" />
                <FormControlLabel value="letter" control={<Radio />} label="letter" />
                <FormControlLabel value="img" control={<Radio />} label="img" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel>onDelete</FormLabel>
              <RadioGroup
                row
                name="onDelete"
                aria-label="on delete"
                value={onDelete}
                onChange={handleChange}
              >
                <FormControlLabel value="none" control={<Radio />} label="none" />
                <FormControlLabel value="default" control={<Radio />} label="default" />
                <FormControlLabel value="custom" control={<Radio />} label="custom" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <HighlightedCode code={jsx} language="jsx" />
      </Grid>
    </Grid>
  );
}

ChipsPlayground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsPlayground);
