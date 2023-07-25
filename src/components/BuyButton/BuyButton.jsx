import { useNavigate } from "react-router-dom";
import { useSelector  } from "react-redux"
import styles from './BuyButton.module.css'
import axios from 'axios'
import { toast } from "react-toastify";

const BuyButton = ()=>{
    const navigate = useNavigate()

    const { isAuthenticated, user } = useSelector(state => state.auth_token);
   ;
    const userId = useSelector((state)=>state.user)
    const cardPey = useSelector((state)=> state.cart)
    const userAddress = user.filter((user) => user.id=== userId.id);
    const selectRoute = async()=>{
        if(!isAuthenticated){
            toast.success("Log In before continuing");
            // <Login_v2 />
        }else if(!userAddress.address){
            return navigate('/addAddress')
        }else{
            const response= await axios.post('payment', { cardPey, user })
            const info=response.data;
            window.location.href= info.init_point;
        }
    }
    
    return(
        <button onClick={selectRoute} className={styles.buyB}>BUY NOW</button>
    );
};

export default BuyButton;