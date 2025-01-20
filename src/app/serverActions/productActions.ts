'use server'

import DbConnection from "../utils/config/db"

export async function productActions(productdetails:any) {
    await DbConnection()
}