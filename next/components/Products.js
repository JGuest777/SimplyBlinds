import Grid from '@material-ui/core/Grid';

export default function Products() {
  return (
    <div className="products">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className="products__item">
          <div className="products__item-overlay shades">
            <h1 className="products__item-text">Shades</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className="products__item">
          <div className="products__item-overlay blinds">
            <h1 className="products__item-text">Blinds</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className="products__item">
          <div className="products__item-overlay shutters">
            <h1 className="products__item-text">Shutters</h1>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
