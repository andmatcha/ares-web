import { css, keyframes } from "@emotion/react";

const Loader = ({ message = "LOADING" }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="w-56 h-56 flex justify-center items-center">
          <div css={[style.orbit, style["mars-orbit"]]}>
            <div css={style.planet}></div>
            <div css={[style.orbit, style["earth-orbit"]]}>
              <div css={style.planet}></div>
              <div css={[style.orbit, style["venus-orbit"]]}>
                <div css={style.planet}></div>
                <div css={style.sun}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 flex justify-center">
          <span css={style.message}>
            {message.split("").map((letter, index) => (
              <span
                key={index}
                css={css`
                  animation: ${animation.blur} 1.5s alternate ${index / 5}s
                    infinite;
                `}
              >
                {letter}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

const animation = {
  rotate: keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
  `,
  blur: keyframes`
  0% {filter: blur(0px);}
  20% {filter: blur(0px);}
  100% {filter: blur(2px);}
`,
};

const style = {
  orbit: css`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border: 1px solid #fafbfc;
    border-radius: 50%;
  `,
  "venus-orbit": css`
    width: 90px;
    height: 90px;
    animation: ${animation.rotate} 3s linear 0s infinite;
  `,
  "earth-orbit": css`
    width: 125px;
    height: 125px;
    animation: ${animation.rotate} 7s linear 0s infinite;
  `,
  "mars-orbit": css`
    width: 160px;
    height: 160px;
    animation: ${animation.rotate} 12s linear 0s infinite;
  `,
  planet: css`
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #6495ed;
  `,
  sun: css`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #ff7f50;
  `,
  message: css`
    letter-spacing: 4px;
    font-size: 20px;
  `,
};

export default Loader;
