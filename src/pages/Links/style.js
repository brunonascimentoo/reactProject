import styled from "styled-components";

export const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px 80px;
gap: 10px;
header {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    img {
        border-radius: 50%;
        width: 92.59px;
        height: 92.59px;
        margin-bottom: 15px;
        padding: 3px;
        border: 3px solid #fff;

    }

    h3, span {
        color: #666;
        margin-bottom: 15px;
    }


}

h4 {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #666;
    margin-top: 25px;
}

`   