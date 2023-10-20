import { Box, Input, Text, useColorModeValue } from "@chakra-ui/react";
import "./HomePage.css";
import { IoSearchOutline } from "react-icons/io5";
import { AllImages } from "./AllImages";
import { useEffect, useState } from "react";
import { getAllImages } from "../api/api";
import Navbar from "./Navbar";
import {Pagination} from "./Pagination";

export const HomePage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    
    useEffect(() => {
        handleImages();
    }, [searchValue, page])


    const handleImages = async () => {
        let res = await getAllImages(searchValue, page);
        setData(res.results);
        setTotalPage(res.total_pages)
    }

    
    return (
        <>
            <Navbar  data={data} searchValue={searchValue} setSearchValue={setSearchValue} handleImages={handleImages} />
            <br />
            <br />
            <Box mt={"15px"}>
                <AllImages data={data} />
                <br/>
                <Pagination totalPage={totalPage} page={page} onChange={(val)=>setPage(val)} />
                <br/>
                <br/>
            </Box>
        </>
    )
}   
