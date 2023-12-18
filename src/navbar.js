import react, {Component} from 'react';
import './navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


class Navbar extends Component{
    static defaultProps={
        cartLength:0
    }

    constructor(props){
        super(props);
        this.state={open:false}
        this.handleClick=this.handleClick.bind(this);
        this.handleClose=this.handleClose.bind(this);
        
    }

handleClick(){
  this.setState({open:true});

}

handleClose(){
        this.setState({open:false});
}

  


    render(){
        const {cartLength}= this.props;
        
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };

        return(
            <nav className='navbar'>
             <a href='#' className='nav-brand'>Mollo</a>
             <div className='navbar-nav'>
              <ul>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>Products</li>
                <li className='nav-link'>Contact Us</li>
                <Button onClick={this.handleClick}>
                <Badge badgeContent={cartLength} color='success'>
                <ShoppingCartIcon  className='nav-link' />
                </Badge>
                </Button>

                <Modal
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
              </ul>
             
             </div>
            </nav>
        )
    }
}

export default Navbar;