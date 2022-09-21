const CartNav = ({ cart, onRemoveFromCart }) => {
    const [isCartVisible, setCartVisible] = useState(false);
  
    const renderOpenButton = () => (
      <button className="nav__cart-btn--open">
        <FontAwesomeIcon size="2x" icon="shopping-bag" color="#292B83"/>
        {cart !== null ? <span>{cart.total_items}</span> : ''}
      </button>
    );
  
    const renderCloseButton = () => (
      <button className="nav__cart-btn--close">
        <FontAwesomeIcon size="1x" icon="times" color="white"/>
      </button>
    );
  
    return (
      <div className="nav">
      <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
          { !isCartVisible ? renderOpenButton() : renderCloseButton() }
      </div>
        { isCartVisible &&
          <Cart
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
          />
        }  
      </div>
    );
  };
  
  export default CartNav;