import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export default ({list, removeValueById}) => <Grid container direction="row" component="ul">
  {list && list.map(({value, id}) => <Grid style={{ marginBottom: "0.75rem"}} xs={4} component="li" key={id}>
    <p style={{fontSize: "1.5rem", marginBottom: "0.5rem"}}>{value}</p>
    <Button
      variant="outlined"
      disableElevation
      onClick={() => removeValueById(id)}>
        Remove
        <DeleteOutlined />
      </Button>
  </Grid>)}
</Grid>