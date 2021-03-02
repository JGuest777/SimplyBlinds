import Grid from '@material-ui/core/Grid';

export default function Products() {
  return (
    <div className="products">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className="products__item">
          <img src="https://images.unsplash.com/photo-1511330823821-0f576490e149?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80" />
        </Grid>
        <Grid item xs={12} sm={4} className="products__item">
          <img src="https://images.unsplash.com/photo-1527017769941-89670d542c68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
        </Grid>
        <Grid item xs={12} sm={4} className="products__item">
          <img src="https://images.unsplash.com/photo-1554215860-863c77aa9c64?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
        </Grid>
      </Grid>
    </div>
  );
}
