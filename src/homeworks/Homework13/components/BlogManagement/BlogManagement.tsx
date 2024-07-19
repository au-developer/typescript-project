import Button from "components/Button/Button";
import { useState } from "react";

import { PageWrapper, TextAreaWrapper } from "homeworks/Homework13/components/BlogManagement/styles";

function BlogManagement(){
const [userPost, addUserPost] = useState<string | undefined>()
const makePost = ()=>{
    addUserPost
}

    return<PageWrapper>
        <TextAreaWrapper></TextAreaWrapper>
        {/* <Button name="Post" onClick={}/> */}
    </PageWrapper>
}

export default BlogManagement;