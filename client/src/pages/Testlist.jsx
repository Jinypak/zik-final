import { Link } from "react-router-dom";
import styled from "styled-components";
import {resultData} from '../data2';

const Container = styled.div``
const ResultBox = styled.div`
    width: 84%;
    border: 1px solid #000;
    border-radius:20px;
    margin: 0 auto;
    padding: 20px;
`

function Testlist() {
    return (
        <Container>
            검사 이력
            {resultData.map((result)=>(
                <ResultBox key={result.id}>
                <h2>{result.title} 검사 결과</h2>
                <p>{result.date}</p>
                <Link to='testlist/result/:id' >결과 보기</Link>
            </ResultBox>
            ))}
            
        </Container>
    )
}

export default Testlist
