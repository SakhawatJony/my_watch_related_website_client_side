import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './ShopDetails.css';








const ShopDetails = () => {
  const {shopId} = useParams()
  const [shops,setShops] = useState([]);
  const {user} = useAuth();
    useEffect(()=>{
    fetch('https://obscure-forest-04770.herokuapp.com/shops')
    .then(res => res.json())
    .then(data=>setShops(data))
    },[])
    const matchingShop = shops.find(shop => shop._id === String(shopId))
    console.log(matchingShop)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
     
        fetch('https://obscure-forest-04770.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid style={{backgroundColor:"lightgrey"}} container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 8 }}>
  
  
  <Grid item xs={6} >
   
  {
     matchingShop?.shopName?(
        <Card sx={{ maxWidth: 550} } className="mx-auto mt-5">
        <CardActionArea>
          <CardMedia
            component="img"
            width="80%"
            image={matchingShop.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              productName:{matchingShop.shopName}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
             ProductPrice: {matchingShop.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {matchingShop.des}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
           
     ) : ( <div className="my-5 py-1">
     <h1 className="my-5 p-5 text-center">NO Shop Found</h1>
   </div>
       
     )}
  </Grid>
  <Grid item xs={6}>
  <h2 className="pt-5 text-center">Plaese Order Now</h2>
   <form className="orders-form" onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={user.displayName} {...register("name")} />

<input defaultValue={user.email} {...register("email", { required: true })} />
{errors.email && <span className="error">This field is required</span>}
<input placeholder="Address" defaultValue="" {...register("address")} />
<input placeholder="packageName" defaultValue="" {...register("packageName")} />
<input placeholder="phone number" defaultValue="" {...register("phone")} />
<input placeholder="price" defaultValue="" {...register("price")} />
<input type="submit" />
</form>
  </Grid>
  <br />
  <br />
</Grid>
<br />
<p className="text-center">------------------------------------------------</p>
</Box>


    );
};

export default ShopDetails;