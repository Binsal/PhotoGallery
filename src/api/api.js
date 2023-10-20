import axios from "axios";

export const getAllImages = async (searchValue,page=1) => {
    // console.log("page111", page);
    // c
    if(searchValue==""){
        searchValue="nature"
    }
    // console.log(searchValue,page);


        try{
            let res = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchValue}&client_id=WL3WPOdkUu4aKNl351FhZwGz4-eeZxpRm1r8zG1DTOk`);
            let data = res.data;
            return data;
        }
        catch(err){
            console.log(err);
        }
  
}

export const getResults = async (searchData,page) => {
    try{
        let res = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchData}&client_id=WL3WPOdkUu4aKNl351FhZwGz4-eeZxpRm1r8zG1DTOk`);
        let data = res.data;
        return data;
    }
    catch(err){
        console.log(err);
    }
}