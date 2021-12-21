import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import DaumPostcode from "react-daum-postcode";

// 회원가입 폼

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 30px;

    input {
        border: none;
        margin: 10px 0px;
        border-bottom: 1px solid #000;
    }
`;

const StyleSection = styled.section`
    display: flex;
    flex-direction: column;
`;
const StyledLink = styled(Link)`
    margin: 0 auto;
    margin-top: 30px;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
`;

const defaultValues = {
    RadioGroup: "",
    userInput: "",
};

export default function SignUp() {
    const {
        handleSubmit,
        reset,
        setValue,
        control,
        register,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues,
    });
    const [data, setData] = useState(null);

    const [post, setPost] = useState(false);
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        zIndex: "100",
        height: "100%",
        padding: "0",
    };

    return (
        <Container onSubmit={handleSubmit((data) => setData(data))}>
            <StyleSection>
                <label>이메일 입력</label>
                <Controller
                    placeholder="user@email.com"
                    control={control}
                    name="userInput"
                    render={({ field }) => <input {...field} />}
                    {...register("userEmail", {
                        required: true,
                        maxLength: 20,
                        pattern:
                            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                    })}
                />
                {errors?.userEmail?.type === "pattern" && (
                    <p>유효한 이메일이 아닙니다.</p>
                )}
            </StyleSection>
            <StyleSection>
                <Controller
                    render={({ field }) => (
                        <RadioGroup aria-label="gender" {...field}>
                            <FormControlLabel
                                value="남"
                                control={<Radio />}
                                label="남"
                            />
                            <FormControlLabel
                                value="여"
                                control={<Radio />}
                                label="여"
                            />
                        </RadioGroup>
                    )}
                    name="RadioGroup"
                    control={control}
                />
            </StyleSection>
            <StyleSection>
                <label>비밀번호 입력</label>
                <Controller
                    placeholder="password"
                    control={control}
                    name="userPwd"
                    render={({ field }) => <input {...field} />}
                    {...register("userPwd", { min: 8, max: 99 })}
                />
                {errors.userPwd && (
                    <p>비밀번호는 최소 8자리 이상이어야 합니다.</p>
                )}
            </StyleSection>
            <StyleSection>
                <label>주소 검색</label>
                <Controller
                    placeholder="post"
                    control={control}
                    name="post"
                    render={({ field }) => <input {...field} />}
                    {...register("post", { min: 8, max: 99 })}
                />
                {errors.userPwd && <p>주소 버튼을 클릭해주세요</p>}

                <button onClick={() => setPost(true)}>주소 검색</button>
                {post === true ? (
                    <DaumPostcode
                        onComplete={() => {
                            setPost(false);
                        }}
                        style={postCodeStyle}
                    />
                ) : (
                    <></>
                )}
            </StyleSection>
            <StyledLink to="/home">회원가입 하기</StyledLink>
        </Container>
    );
}
