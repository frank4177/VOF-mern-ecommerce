import React from "react";
import { publicRequest, userRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure, logoutNow } from "./userRedux"
import { 
    getProductStart,
    getProductSuccess,
    getProductFailure, } from "./productRedux";
import { removeProduct } from "./cartRedux";



export const login = async (dispatch, user) => {
dispatch(loginStart());
try{
    const res = await publicRequest.post("signup/login", user);

    dispatch(loginSuccess(res.data))

}catch(err){
    dispatch(loginFailure())
}
}

export const signup = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("signup/register", user);
    
        dispatch(loginSuccess(res.data))
    
    }catch(err){
        dispatch(loginFailure())
    }
    }

    
    export const logout = async (dispatch) => {
        dispatch(logoutNow());
        
        }


        export const removeProductNow = (id) => async (dispatch) => {
            dispatch(removeProduct(id));
    
            
        }


        export const getProducts = (keyword = " ") => async (dispatch) => {
            dispatch(getProductStart())
            try{
                const res = await publicRequest.get(`/products?keyword=${keyword}`);
                dispatch(getProductSuccess(res.data.products))
            }catch(err){
                dispatch(getProductFailure())
            }   
        ;}
