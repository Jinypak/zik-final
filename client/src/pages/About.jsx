import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import "./About.css";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const AboutContainer = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const aboutLinkStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textDecoration: "none",
  color: "black",
  paddingTop: "0px",
};

const AboutTitle = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 24px;
`;

const AboutInnerContainer = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;

  .prev {
    text-decoration: none;
    padding: 20px;
    color: #ccc;
  }
`;

function About() {
  return (
    <AboutContainer className="about">
      <AboutTitle>마이페이지</AboutTitle>
      <div className="accountSetting">
        <h2>계정설정</h2>
        <Link to="/about/Profile" Component={Profile} style={aboutLinkStyle}>
          프로필 정보 설정
          <p>&gt;</p>
        </Link>
        <Link
          to="/about/KidProfile"
          Component={KidProfile}
          style={aboutLinkStyle}
        >
          우리아이 정보 설정
          <p>&gt;</p>
        </Link>
        <Link to="/about/Alram" Component={Alram} style={aboutLinkStyle}>
          알림 설정
          <p>&gt;</p>
        </Link>
      </div>
      <div className="admin">
        <h2>고객센터</h2>
        <Link to="/about/News" Component={News} style={aboutLinkStyle}>
          공지사항
          <p>&gt;</p>
        </Link>
        <Link to="/about/Support" Component={Support} style={aboutLinkStyle}>
          문의하기
          <p>&gt;</p>
        </Link>
        <Link to="/about/Features" Component={Features} style={aboutLinkStyle}>
          서비스 소개
          <p>&gt;</p>
        </Link>
        <Link to="/about/Policy" Component={Policy} style={aboutLinkStyle}>
          이용약관
          <p>&gt;</p>
        </Link>
        <Link to="/about/Privacy" Component={Privacy} style={aboutLinkStyle}>
          개인정보 취급방침
          <p>&gt;</p>
        </Link>
      </div>
    </AboutContainer>
  );
}
function Profile() {
  return (
    <AboutInnerContainer className="aboutLayout profile">
      <Link to="/about" className="prev">
        &lt; 이전 페이지로
      </Link>
      <AboutTitle>프로필 정보 설정</AboutTitle>
    </AboutInnerContainer>
  );
}

const UploadBox = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const ImgBtn = styled.button`
  display: flex;
  border: none;
  flex-direction: column;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 20px;

  p:nth-child(1) {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 9999px;
    background-color: lightgreen;
    color: #fff;
    font-size: 30px;
    margin: 0 auto;
  }
  p:nth-child(2) {
    font-size: 20px;
  }
`;

const Container = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  align-items: start;
  padding: 30px;

  input {
    border: none;
    margin: 10px 0px;
    border-bottom: 1px solid #000;
  }

  .gender {
    display: flex;
    flex-direction: row;
  }
`;

const StyleSection = styled.section`
  display: flex;
  width: 90%;
  flex-direction: column;
`;

const defaultValues = {
  RadioGroup: "",
  userInput: "",
};
function KidProfile() {
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
  return (
    <AboutInnerContainer>
      <Link to="/about" className="prev">
        &lt; 이전 페이지로
      </Link>
      <AboutTitle>우리아이 정보 설정</AboutTitle>
      <UploadBox>
        <ImgBtn>
          <p>+</p>
          <p>이미지 업로드</p>
        </ImgBtn>
      </UploadBox>
      <Container onSubmit={handleSubmit((data) => setData(data))}>
        <StyleSection className="kidsname">
          <label>아이 이름</label>
          <Controller
            placeholder="kids name"
            control={control}
            name="kidsname"
            className="styledController"
            style={{ backgroundColor: "red" }}
            render={({ field }) => <input {...field} />}
            {...register("kidsname", {
              required: true,
              maxLength: 6,
            })}
          />
          {errors?.kidsname?.type === "required" && (
            <p>아이의 이름을 입력해주세요</p>
          )}
        </StyleSection>
        <StyleSection>
          <Controller
            render={({ field }) => (
              <RadioGroup className="gender" aria-label="gender" {...field}>
                <FormControlLabel value="남" control={<Radio />} label="남" />
                <FormControlLabel value="여" control={<Radio />} label="여" />
              </RadioGroup>
            )}
            name="RadioGroup"
            control={control}
          />
        </StyleSection>
        <StyleSection>
          <label>생년월일</label>
          <Controller
            placeholder="password"
            control={control}
            name="userPwd"
            render={({ field }) => <input {...field} />}
            {...register("userPwd", { min: 8, max: 99 })}
          />
          {errors.userPwd && <p>생년월일</p>}
        </StyleSection>
        <StyleSection>
          <label>생년월일 선택</label>
          <Controller
            placeholder="password"
            control={control}
            name="userPwd"
            render={({ field }) => <input {...field} />}
            {...register("userPwd", { min: 8, max: 99 })}
          />
          {errors.userPwd && <p>생년월일</p>}
        </StyleSection>
      </Container>
    </AboutInnerContainer>
  );
}

function Alram() {
  return (
    <AboutInnerContainer>
      <Link to="/about" className="prev">
        &lt; 이전 페이지로
      </Link>
      <AboutTitle>알람 설정</AboutTitle>
      <div className="alarmBox">
        <div className="alarmText">
          <h4>육아정보 알림</h4>
          <p>육아에 관련된 유용한 정보를 제공합니다</p>
        </div>
        <section class="model-1">
          <div class="checkbox">
            <input type="checkbox" />
            <label></label>
          </div>
        </section>
      </div>
      <div className="alarmBox">
        <div className="alarmText">
          <h4>육아정보 알림</h4>
          <p>육아에 관련된 유용한 정보를 제공합니다</p>
        </div>
        <section class="model-1">
          <div class="checkbox">
            <input type="checkbox" />
            <label></label>
          </div>
        </section>
      </div>
      <div className="alarmBox">
        <div className="alarmText">
          <h4>육아정보 알림</h4>
          <p>육아에 관련된 유용한 정보를 제공합니다</p>
        </div>
        <section class="model-1">
          <div class="checkbox">
            <input type="checkbox" />
            <label></label>
          </div>
        </section>
      </div>
    </AboutInnerContainer>
  );
}

function News() {
  return (
    <AboutInnerContainer>
      <Link to="/about" className="prev">
        &lt; 이전 페이지로
      </Link>
      <AboutTitle>공지사항</AboutTitle>
      <NewsBox></NewsBox>
      <NewsBox></NewsBox>
      <NewsBox></NewsBox>
      <NewsBox></NewsBox>
    </AboutInnerContainer>
  );
}

const NewsLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  border-bottom: 1px solid #000;
  text-decoration: none;
  .title {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

function NewsBox() {
  return (
    <NewsLink to="/about/News/Newsdesc">
      <div className="title">
        <span>제 14차 초대하기 이벤트 당첨자 발표</span>
        <br></br>
        <span>2021. 06. 10. 13:30</span>
      </div>
      <div className="icon">&gt;</div>
    </NewsLink>
  );
}

function NewsDesc() {
  return (
    <>
      <AboutTitle>공지사항 제목</AboutTitle>
      <p>공지사항 내용</p>
    </>
  );
}

const SupportBox = styled.div`
  .supTab {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const SupportForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WriteBtn = styled.img`
  position: absolute;
  bottom: 2%;
  right: 5%;
  width: 60px;
  height: 60px;
`;

function Support() {
  const [tabCheck, setTabCheck] = useState([]);
  let history = useHistory();

  return (
    <AboutInnerContainer style={{ position: "relative", height: "80vh" }}>
      <Link to="/about" className="prev">
        &lt; 이전 페이지로
      </Link>
      <AboutTitle>문의하기</AboutTitle>
      <SupportBox>
        <div className="supTab">
          <button className="write" onClick={() => {}}>
            문의하기
          </button>
          <button className="mylist" onClick={() => {}}>
            나의 문의내역
          </button>
        </div>
        <SupportForm className="supbox">
          <Link to="/about/support/:id" style={aboutLinkStyle}>
            문의내역
            <p>&gt;</p>
          </Link>
        </SupportForm>
      </SupportBox>
      <WriteBtn
        src="/img/writeIcon.png"
        onClick={() => history.push("/about/Support/:id")}
        alt=""
      />
    </AboutInnerContainer>
  );
}

const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 0px;

  .title {
    padding: 20px;
    width: 100%;
    margin: 0 auto;
    label {
      padding: 5px;
    }
    input {
      width: 75%;
    }
  }

  .desc {
    width: 100%;
    padding: 20px;
    margin: 0 auto;

    label {
      width: 100%;
      float: left;
    }
    input {
      width: 85%;
      padding-top: 20%;
      padding-bottom: 20%;
      border-radius: 5px;
    }
  }
  .email {
    width: 100%;
    padding: 20px;
    margin: 0 auto;

    label {
      width: 100%;
      float: left;
    }
    input {
      width: 85%;
      border-radius: 5px;
    }
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 80%;
`;

const WriteSucModal = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  p {
    position: fixed;
    top: 30%;
    left: 5%;
    right: 5%;
    bottom: 30%;
    background-color: #fff;
    color: #289ca4;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
`;

function WriteSupport() {
  const [writeBtnClick, setWriteBtnClick] = useState(false);
  let history = useHistory();

  const WriteBtnEvent = () => {
    setWriteBtnClick(true);
    console.log(writeBtnClick);
    // useEffect(() => {
    //     setTimeout(() => {
    //         history.goBack();
    //     }, 3000);
    // });
  };

  return (
    <AboutInnerContainer>
      <WriteForm>
        <div className="title">
          <label>제목</label>
          <input type="text" />
        </div>
        <div className="desc">
          <label>문의 내용</label>
          <input type="text" />
        </div>
        <div className="email">
          <label>답변 받으실 메일 주소</label>
          <input type="text" />
        </div>
        <BtnBox>
          <button onClick={() => history.goBack()}>취소</button>
          <button onClick={() => WriteBtnEvent()}>작성하기</button>
        </BtnBox>
        {writeBtnClick === true ? (
          <WriteSucModal>
            <p>작성이 완료되었습니다.</p>
          </WriteSucModal>
        ) : null}
      </WriteForm>
    </AboutInnerContainer>
  );
}

function Features() {
  return (
    <AboutInnerContainer>
      <Link to="/about" className="prev">
        &lt; 이전 페이지로
      </Link>
      <AboutTitle>서비스 소개</AboutTitle>
      <div className="box">
        <p>
          제1조(목적) 이 약관은 주식회사 범고래마루(이하 “회사”라 함)가 운영하는
          미취학 아동 발달검사 제공 플랫폼(이하 “플랫폼”이라 한다)에서 제공하는
          서비스(이하 “서비스”라 한다)를 이용함에 있어 “회사”와 “이용자”의
          권리․의무 및 책임사항을 규정함을 목적으로 합니다. ※「PC통신, 무선 등을
          이용하는 경우에 대해서도 그 성질에 반하지 않는 한 이 약관을
          준용합니다.」 제2조(정의) ① “플랫폼”이란 “이용자”가 컴퓨터 등
          정보통신설비를 이용하여 “서비스”를 이용할 수 있도록 “회사”가 제공하는
          가상의 영업장을 말하며, 아울러 “플랫폼”을 운영하는 사업자의 의미로도
          사용합니다. ② “이용자”란 “플랫폼”을 통하여 이 약관에 따라 제공하는
          서비스를 받는 회원 및 비회원을 말합니다. ③ “회원”이라 함은 “플랫폼”에
          회원등록을 한 자로서, 계속적으로 “플랫폼”이 제공하는 서비스를 이용할
          수 있는 자를 말합니다. ④ “비회원”이라 함은 회원에 가입하지 않고
          “플랫폼”이 제공하는 서비스를 이용하는 자를 말합니다.
        </p>
      </div>
    </AboutInnerContainer>
  );
}

function Policy() {
  return (
    <AboutInnerContainer>
      <Link to="/about" className="prev">
        &lt; 이전 페이지로
      </Link>
      <AboutTitle>줌인키즈 서비스 이용약관</AboutTitle>
      <div className="box">
        <p>
          제1조(목적) 이 약관은 주식회사 범고래마루(이하 “회사”라 함)가 운영하는
          미취학 아동 발달검사 제공 플랫폼(이하 “플랫폼”이라 한다)에서 제공하는
          서비스(이하 “서비스”라 한다)를 이용함에 있어 “회사”와 “이용자”의
          권리․의무 및 책임사항을 규정함을 목적으로 합니다. ※「PC통신, 무선 등을
          이용하는 경우에 대해서도 그 성질에 반하지 않는 한 이 약관을
          준용합니다.」 제2조(정의) ① “플랫폼”이란 “이용자”가 컴퓨터 등
          정보통신설비를 이용하여 “서비스”를 이용할 수 있도록 “회사”가 제공하는
          가상의 영업장을 말하며, 아울러 “플랫폼”을 운영하는 사업자의 의미로도
          사용합니다. ② “이용자”란 “플랫폼”을 통하여 이 약관에 따라 제공하는
          서비스를 받는 회원 및 비회원을 말합니다. ③ “회원”이라 함은 “플랫폼”에
          회원등록을 한 자로서, 계속적으로 “플랫폼”이 제공하는 서비스를 이용할
          수 있는 자를 말합니다. ④ “비회원”이라 함은 회원에 가입하지 않고
          “플랫폼”이 제공하는 서비스를 이용하는 자를 말합니다.
        </p>
      </div>
    </AboutInnerContainer>
  );
}

function Privacy() {
  return (
    <AboutInnerContainer>
      <Link to="/about" className="prev">
        &lt; 이전 페이지로
      </Link>
      <AboutTitle>줌인키즈 개인정보 처리방침</AboutTitle>
      <div className="box">
        <p>
          &lt;주식회사 범고래마루의 서비스 '줌인키즈'&gt;(이하 '회사'라고 함)는
          『개인정보 보호법』 및 『정보통신망 이용촉진 및 정보보호 등에 관한
          법률』(이하 ‘정보통신망법’이라고 함)을 포함하는 개인정보 관련법령에
          따라 고객의 개인정보 및 권익을 보호하고, 고객이 제공하는 개인정보가
          어떠한 용도와 방식으로 이용되는지 알려드리고자 다음과 같은 개인정보
          처리방침을 마련하고 있습니다. 회사는 관련 법령 및 지침의 변경 또는
          내부 운영방침의 변경에 따라 수시로 개인정보 처리방침을 개정할 수
          있으며, 이러한 경우 웹사이트 공지사항(또는 개별통지)을 통하여
          변경내용을 공지할 것입니다.
        </p>
        <ul>
          <li>- 수집하는 개인정보 항목 및 수집방법 </li>
          <li>- 개인정보의 수집 및 이용목적 </li>
          <li>- 개인정보의 처리 및 보유기간 </li>
          <li>- 개인정보의 제3자 제공에 관한 사항 </li>
          <li>- 개인정보의 국외 이전에 관한 사항 </li>
          <li>- 개인정보처리의 위탁에 관한 사항 </li>
          <li>- 정보주체의 권리, 의무 및 그 행사방법 </li>
          <li>- 아동의 개인정보보호 </li>
          <li>- 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</li>
          <li>- 개인정보의 파기에 관한 사항 </li>
          <li>- 개인정보의 안전성 확보 조치 </li>
          <li>- 개인정보 보호책임자 및 개인정보관련 불만처리에 관한 사항</li>
          <li>- 개인정보 열람청구 </li>
          <li>- 개인정보처리방침 변경 </li>
        </ul>
      </div>
    </AboutInnerContainer>
  );
}

export {
  Alram,
  Features,
  KidProfile,
  News,
  Policy,
  Privacy,
  Profile,
  Support,
  NewsDesc,
  WriteSupport,
};

export default About;
