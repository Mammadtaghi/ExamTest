import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const wishlistContext = createContext()

export const WishlistProvider = ({ children }) => {

    const [Wishlist, setWishlist] = useState([])

    function AddToWishlist(item) {
        const itemIndex = Wishlist.findIndex(x => x._id === item._id)
        if (itemIndex === -1) {
            setWishlist([...Wishlist, item])
            return
        }
        setWishlist(Wishlist.filter(x => x._id !== item._id))
    }

    function isIn(item) {
        const Found = Wishlist.find(x => x._id === item._id)
        return Found ? true : false
    }

    const data = {
        Wishlist,
        setWishlist,
        AddToWishlist,
        isIn,
    }

    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(wishlistContext)