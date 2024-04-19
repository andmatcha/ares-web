import { NextPage } from "next";

const MainButton: NextPage<{ url?: string; label?: string }> = ({
  url,
  label,
}) => {
  return (
    <a
      href={url}
      // css={styles.button}
      className="inline-block relative overflow-hidden w-fit text-xs md:text-base py-3 md:py-4 px-6 md:px-16 text-white text-center cursor-pointer border border-white duration-500 hover:text-main-bg max-w-xs"
    >
      <span className="relative">{label}</span>
    </a>
  );
};

// const styles = {
//   button: css`
//     &::before {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       content: "";
//       transition: all 0.4s ease-in-out;
//       transform: translateX(-100%);
//       background: #fff;
//     }
//     &:hover::before {
//       -webkit-transform: translateX(0%);
//       transform: translateX(0%);
//     }
//   `,
// };

export default MainButton;
