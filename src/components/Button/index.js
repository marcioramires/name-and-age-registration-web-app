import React from "react";

import { Button } from './styles'

function PageButton({children, isBack}){

    return <Button isBack={isBack}>{children}</Button>
}

export default PageButton